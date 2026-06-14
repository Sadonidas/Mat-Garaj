import Link from "next/link";
import { HERO_VIDEO_SRC } from "@/lib/media";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden"
    >
      {/* Arka plan videosu: src/lib/media.ts veya NEXT_PUBLIC_HERO_VIDEO_URL */}
      <video
        src={HERO_VIDEO_SRC}
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        aria-hidden="true"
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
