"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { HERO_VIDEO_SRC } from "@/lib/media";

const INTRO_FADE_MS = 2000;
const FADE_TICK_MS = 50;
const SCROLL_VOLUME_LERP = 0.1;

function getVisibilityRatio(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  if (rect.height <= 0) return 0;

  const visibleTop = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, window.innerHeight);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);

  return Math.min(1, visibleHeight / rect.height);
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let unlocked = false;
    let scrollControl = false;
    let fadeIntervalId: ReturnType<typeof setInterval> | null = null;
    let rafId = 0;
    let targetVolume = 0;
    let currentVolume = 0;
    let lastScrollY = window.scrollY;

    const ensurePlaying = () => {
      if (video.paused) {
        video.play().catch(() => {
          video.muted = true;
        });
      }
    };

    const applyVolume = (volume: number, allowMute: boolean) => {
      try {
        const clamped = Math.min(1, Math.max(0, volume));

        if (allowMute && clamped <= 0.001) {
          video.volume = 0;
          video.muted = true;
        } else {
          video.muted = false;
          video.volume = clamped;
        }
      } catch {
        video.muted = true;
        video.volume = 0;
      } finally {
        ensurePlaying();
      }
    };

    const stopIntroFade = () => {
      if (fadeIntervalId !== null) {
        clearInterval(fadeIntervalId);
        fadeIntervalId = null;
      }
    };

    const enableScrollControl = () => {
      stopIntroFade();
      scrollControl = true;
      targetVolume = getVisibilityRatio(section);
    };

    const startIntroFade = () => {
      stopIntroFade();

      const totalSteps = Math.round(INTRO_FADE_MS / FADE_TICK_MS);
      let step = 0;

      fadeIntervalId = setInterval(() => {
        if (scrollControl) return;

        step += 1;
        const progress = Math.min(1, step / totalSteps);
        const volume = easeOutCubic(progress);

        currentVolume = volume;
        applyVolume(volume, false);

        if (progress >= 1) {
          stopIntroFade();
          enableScrollControl();
        }
      }, FADE_TICK_MS);
    };

    const unlockAudio = () => {
      if (unlocked) return;
      unlocked = true;

      try {
        video.muted = false;
        video.volume = 0;
        currentVolume = 0;
      } catch {
        video.muted = true;
        ensurePlaying();
        return;
      }

      video
        .play()
        .then(() => {
          startIntroFade();
        })
        .catch(() => {
          video.muted = true;
          video.volume = 0;
          ensurePlaying();
        });
    };

    const onUserGesture = () => {
      unlockAudio();
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const hasScrolled = scrollY !== lastScrollY;
      lastScrollY = scrollY;

      if (!unlocked) {
        unlockAudio();
      }

      if (unlocked && hasScrolled && !scrollControl) {
        enableScrollControl();
      }

      if (scrollControl) {
        targetVolume = getVisibilityRatio(section);
      }
    };

    const onVideoPause = () => {
      if (document.visibilityState === "visible") {
        ensurePlaying();
      }
    };

    const animateScrollVolume = () => {
      if (scrollControl) {
        currentVolume += (targetVolume - currentVolume) * SCROLL_VOLUME_LERP;

        if (Math.abs(targetVolume - currentVolume) < 0.005) {
          currentVolume = targetVolume;
        }

        applyVolume(currentVolume, true);
      }

      rafId = window.requestAnimationFrame(animateScrollVolume);
    };

    video.muted = true;
    video.volume = 0;
    video.play().catch(() => {
      video.muted = true;
    });

    rafId = window.requestAnimationFrame(animateScrollVolume);

    video.addEventListener("pause", onVideoPause);

    const passiveOnce: AddEventListenerOptions = { once: true, passive: true };
    const once: AddEventListenerOptions = { once: true };

    window.addEventListener("mousemove", onUserGesture, once);
    window.addEventListener("mousedown", onUserGesture, once);
    window.addEventListener("touchstart", onUserGesture, passiveOnce);
    window.addEventListener("wheel", onUserGesture, passiveOnce);
    window.addEventListener("keydown", onUserGesture, once);
    window.addEventListener("scroll", onUserGesture, passiveOnce);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      stopIntroFade();
      window.cancelAnimationFrame(rafId);
      video.removeEventListener("pause", onVideoPause);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden"
    >
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-black/55"
      />

      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
        <div className="relative flex max-w-2xl flex-col justify-center">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary-container opacity-20 mix-blend-screen blur-[100px] filter" />

          <span className="relative mb-4 block font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Mat Garaj – 22 Yıllık Tecrübeyle Araç Kaplama, Koruma ve
            Kişiselleştirmede Uzman!
          </span>

          <h1 className="relative mb-stack-lg font-display-xl text-display-xl text-on-surface text-headline-lg-mobile md:text-display-xl">
            Kreatif Araç Kaplama ve Tasarım Deneyimi
          </h1>

          <p className="relative mb-stack-lg max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            Mat Garaj olarak, aracınızı sadece kaplamıyoruz — karakter
            kazandırıyoruz. Premium ürünlerle uzun ömürlü, estetik ve
            profesyonel uygulamalar sunuyoruz.
          </p>

          <div className="relative flex flex-wrap gap-stack-md">
            <Link
              href="#galeri"
              className="btn-gold-border inline-flex items-center justify-center rounded bg-surface-container-lowest/50 px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-primary backdrop-blur-sm"
            >
              Projeleri İncele
            </Link>
            <Link
              href="#hizmetlerimiz"
              className="inline-flex items-center justify-center rounded border border-white/10 bg-surface-container-lowest/50 px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface backdrop-blur-sm transition-colors hover:border-white/40"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
