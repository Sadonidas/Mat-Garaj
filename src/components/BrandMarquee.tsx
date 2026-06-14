import { BRAND_NAMES } from "@/lib/constants";

function BrandList() {
  return (
    <>
      {BRAND_NAMES.map((brand) => (
        <span
          key={brand}
          className="cursor-default transition-colors hover:text-on-surface"
        >
          {brand}
        </span>
      ))}
    </>
  );
}

export function BrandMarquee() {
  return (
    <section className="border-y border-white/5 bg-surface-container-lowest/50 py-stack-lg backdrop-blur-sm">
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-gutter px-margin-mobile md:flex-row md:px-margin-desktop">
        <div className="marquee-container w-full flex-grow py-4">
          <div className="marquee-content font-headline-md text-headline-md text-on-surface-variant/50">
            <BrandList />
          </div>
          <div
            aria-hidden="true"
            className="marquee-content font-headline-md text-headline-md text-on-surface-variant/50"
          >
            <BrandList />
          </div>
        </div>
      </div>
    </section>
  );
}
