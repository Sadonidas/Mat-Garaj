import { MaterialIcon } from "@/components/MaterialIcon";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} yıldız`}>
      {Array.from({ length: 5 }, (_, index) => (
        <MaterialIcon
          key={index}
          name="star"
          filled={index < rating}
          className={`text-base ${
            index < rating ? "text-primary" : "text-on-surface-variant/30"
          }`}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section
      id="google-yorumlari"
      className="mx-auto max-w-container-max scroll-mt-24 border-y border-white/5 bg-surface-container-lowest/50 px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="mb-stack-lg text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface text-headline-lg-mobile md:text-headline-lg">
          Google Yorumları
        </h2>
        <p className="mt-stack-md font-label-sm text-label-sm uppercase tracking-widest text-primary/80">
          Müşterilerimiz Ne Diyor?
        </p>
        <div className="mx-auto mt-stack-md h-1 w-24 bg-primary" />
      </div>

      <div className="glass-panel mb-stack-lg flex flex-col items-center justify-between gap-stack-md rounded-xl p-8 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
            <MaterialIcon name="reviews" className="text-3xl text-primary" />
          </div>
          <div className="text-left">
            <p className="font-headline-md text-headline-md text-on-surface">
              Google&apos;da {GOOGLE_REVIEWS_SUMMARY.rating.toFixed(1)} / 5
            </p>
            <StarRating rating={Math.round(GOOGLE_REVIEWS_SUMMARY.rating)} />
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {GOOGLE_REVIEWS_SUMMARY.totalReviews}+ değerlendirme
        </p>
        <a
          href={GOOGLE_REVIEWS_SUMMARY.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-border inline-flex items-center justify-center rounded px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-all duration-300"
        >
          Tüm Yorumları Gör
        </a>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {GOOGLE_REVIEWS.map((review) => (
          <article
            key={review.id}
            className="glass-panel glow-primary flex flex-col rounded-xl p-8 transition-all duration-500"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {review.author}
                </h3>
                <p className="mt-1 font-label-sm text-label-sm text-on-surface-variant/70">
                  {review.date}
                </p>
              </div>
              <MaterialIcon
                name="verified"
                className="shrink-0 text-primary"
              />
            </div>
            <StarRating rating={review.rating} />
            <p className="mt-4 flex-grow font-body-md text-body-md text-on-surface-variant">
              &ldquo;{review.text}&rdquo;
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
