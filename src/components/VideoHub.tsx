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
          <div
            key={video.title}
            className="glass-panel group cursor-pointer overflow-hidden rounded-xl"
          >
            <div className="relative flex aspect-video items-center justify-center bg-black/50">
              <MaterialIcon
                name="play_circle"
                className="text-6xl text-white/70 transition-colors group-hover:text-primary"
              />
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
          </div>
        ))}
      </div>
    </section>
  );
}
