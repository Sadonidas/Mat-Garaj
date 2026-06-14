import { MaterialIcon } from "@/components/MaterialIcon";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="hizmetlerimiz"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface text-headline-lg-mobile md:text-headline-lg">
          Hizmetlerimiz
        </h2>
        <div className="mt-4 h-1 w-24 bg-primary" />
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="glass-panel glow-primary group relative flex flex-col overflow-hidden rounded-xl p-8 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-30">
              <MaterialIcon
                name={service.icon}
                className="text-6xl text-primary"
              />
            </div>
            <div className="mb-6">
              <MaterialIcon
                name={service.icon}
                filled
                className="text-3xl text-primary"
              />
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md text-on-surface">
              {service.title}
            </h3>
            <p className="flex-grow font-body-md text-body-md text-on-surface-variant">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
