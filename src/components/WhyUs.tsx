import { MaterialIcon } from "@/components/MaterialIcon";
import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <section
      id="hakkimizda"
      className="mx-auto max-w-container-max scroll-mt-24 border-y border-white/5 bg-surface-container-lowest/50 px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="mb-stack-lg text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface text-headline-lg-mobile md:text-headline-lg">
          Neden Biz?
        </h2>
        <p className="mt-stack-md font-label-sm text-label-sm uppercase tracking-widest text-primary/80">
          Neden Mat Garajı Seçmelisiniz
        </p>
        <div className="mx-auto mt-stack-md h-1 w-24 bg-primary" />
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {WHY_US.map((item) => (
          <div key={item.title} className="p-6 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <MaterialIcon
                name={item.icon}
                filled
                className="text-3xl text-primary"
              />
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md text-on-surface">
              {item.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
