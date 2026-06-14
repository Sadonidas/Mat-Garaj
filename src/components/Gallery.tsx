import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, INSTAGRAM_ICON_SRC } from "@/lib/constants";

export function Gallery() {
  return (
    <section
      id="galeri"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile pb-section-gap md:px-margin-desktop"
    >
      <div className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface text-headline-lg-mobile md:text-headline-lg">
          Galeri
        </h2>
        <div className="mt-4 h-1 w-24 bg-primary" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {GALLERY_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} — Instagram'da aç`}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 transition-all duration-500 ease-out group-hover:border-primary group-hover:shadow-[0_0_24px_rgba(235,28,36,0.35)]">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 transition-colors duration-500 group-hover:via-black/30" />
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                <span className="text-xs font-medium tracking-wide text-white/95 transition-all duration-300 group-hover:text-primary">
                  İnstagramda Gör
                </span>
                <img
                  src={INSTAGRAM_ICON_SRC}
                  alt=""
                  width={18}
                  height={18}
                  className="h-4.5 w-4.5 transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(24%)_sepia(93%)_saturate(7151%)_hue-rotate(347deg)_brightness(94%)_contrast(93%)]"
                />
              </div>
            </div>
            <h3 className="mt-4 font-headline-md text-headline-md text-on-surface transition-colors duration-300 group-hover:text-primary">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
