import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { GALLERY_ITEMS } from "@/lib/constants";

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
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 transition-all duration-500 ease-out group-hover:border-primary group-hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 transition-colors duration-500 group-hover:via-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-black/45 shadow-[0_0_20px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:bg-black/55 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <MaterialIcon
                    name="play_arrow"
                    filled
                    className="ml-1 text-3xl text-primary"
                  />
                </div>
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
