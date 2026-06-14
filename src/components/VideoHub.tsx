import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { VIDEOS } from "@/lib/constants";

export function VideoHub() {
  return (
    <section
      id="videolar"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface text-headline-lg-mobile md:text-headline-lg">
          Videolar ve İçerikler
        </h2>
        <div className="mt-4 h-1 w-24 bg-primary" />
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {VIDEOS.map((video) => (
          <Link
            key={video.id}
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${video.title} — YouTube'da aç`}
            className="glass-panel group block cursor-pointer overflow-hidden rounded-xl"
          >
            <div className="relative aspect-video overflow-hidden bg-black/50">
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MaterialIcon
                  name="play_circle"
                  className="text-6xl text-white/70 transition-colors group-hover:text-primary"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary">
                {video.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {video.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
