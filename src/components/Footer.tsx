import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      id="iletisim"
      className="relative w-full scroll-mt-24 border-t border-white/5 bg-surface-container-lowest/80 py-section-gap backdrop-blur-2xl"
    >
      <div className="mx-auto grid max-w-container-max grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop">
        <div className="col-span-12 mb-12 flex flex-col gap-stack-lg lg:col-span-4 lg:mb-0">
          <a
            href="#hero"
            className="font-headline-md text-headline-md text-primary"
          >
            {SITE_NAME}
          </a>
          <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">
            Kusursuz işçilik ve premium malzemelerle aracınızın sınırlarını
            yeniden çizin.
          </p>
          <div className="flex flex-col gap-stack-sm font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-3">
              <MaterialIcon name="location_on" className="text-primary" />
              <span>
                Bahçeşehir 2. Kısım Mah. Mercedes Bulvarı Flora Avm. No:30/B-AA
                Başakşehir / İSTANBUL
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <MaterialIcon name="call" className="text-primary" />
              <span>0534 894 81 38</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <MaterialIcon name="mail" className="text-primary" />
              <span>info@matgaraj.com</span>
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <MaterialIcon name="schedule" className="text-primary" />
                <span>Hafta içi: 08:30 - 19:00</span>
              </div>
              <div className="flex items-center gap-3 pl-9">
                <span>Cumartesi: 08:30 - 19:00</span>
              </div>
              <div className="flex items-center gap-3 pl-9">
                <span>Pazar: Kapalı</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:pl-12">
          <div className="glass-panel rounded-xl p-8">
            <h3 className="mb-6 font-headline-md text-headline-md text-on-surface">
              Projenizi Konuşalım
            </h3>
            <form className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
              <div className="col-span-1 md:col-span-2">
                <input
                  className="w-full border-0 border-b border-white/20 bg-transparent py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:ring-0"
                  placeholder="Adınız Soyadınız"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="w-full border-0 border-b border-white/20 bg-transparent py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:ring-0"
                  placeholder="Telefon Numaranız"
                  type="tel"
                />
              </div>
              <div>
                <input
                  className="w-full border-0 border-b border-white/20 bg-transparent py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:ring-0"
                  placeholder="E-posta Adresiniz"
                  type="email"
                />
              </div>
              <div className="col-span-1 mt-4 md:col-span-2">
                <button
                  type="button"
                  className="btn-gold-border inline-flex w-full items-center justify-center rounded bg-black/20 px-6 py-4 font-label-sm text-label-sm uppercase tracking-widest text-primary"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-12 mt-section-gap flex flex-col items-center justify-between gap-stack-sm border-t border-white/5 pt-stack-lg md:flex-row">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            © 2024 Mat Garaj. Tüm Hakları Saklıdır.
          </span>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.title}
                href={social.href}
                title={social.title}
                className="flex items-center justify-center text-on-surface-variant transition-colors hover:text-primary"
              >
                <MaterialIcon name={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
