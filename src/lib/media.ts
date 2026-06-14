/**
 * Hero arka plan videosu — Vercel Blob public URL.
 *
 * Vercel'de videoyu Blob'a yükledikten sonra şu ortam değişkenini ayarlayın:
 * NEXT_PUBLIC_HERO_VIDEO_URL=https://xxxxx.public.blob.vercel-storage.com/hero/mat-garaj-hero.mp4
 *
 * Yerel geliştirme: .env.local dosyasına aynı değişkeni ekleyin.
 * Vercel deploy: Project → Settings → Environment Variables
 */
const FALLBACK_HERO_VIDEO_SRC =
  "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4";

export const HERO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || FALLBACK_HERO_VIDEO_SRC;

export const IS_HERO_VIDEO_FROM_BLOB = Boolean(
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim(),
);
