export const SITE_NAME = "Mat Garaj";

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetlerimiz", href: "#hizmetlerimiz" },
  { label: "Videolar ve İçerikler", href: "#videolar" },
  { label: "Galeri", href: "#galeri" },
  { label: "Google Yorumları", href: "#google-yorumlari" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export const BRAND_NAMES = [
  "Avery",
  "Carlike",
  "KPMF",
  "Teck",
  "Hexis",
  "Orafol",
  "3M",
] as const;

export const SERVICES = [
  {
    icon: "layers",
    title: "ARAÇ KAPLAMA",
    description:
      "Mat, parlak, saten, fırçalanmış metal ve renk değişimi kaplamalar.",
  },
  {
    icon: "local_shipping",
    title: "ARAÇ REKLAM GİYTİRME",
    description:
      "Filo veya tekil araçlar için etkileyici reklam giydirme tasarımları.",
  },
  {
    icon: "business",
    title: "BİNA CAM FİLMLERİ",
    description:
      "Güneş kontrolü, ısı yalıtımı ve mahremiyet sağlayan bina cam filmleri.",
  },
  {
    icon: "security",
    title: "GÜVENLİK CAM FİLMİ",
    description:
      "Darbe ve kırılmaya dayanıklı, sertifikalı güvenlik cam filmleri.",
  },
  {
    icon: "diamond",
    title: "REFLEKTİF ÜRÜNLER & LOGOLAR",
    description: "Gece görünürlüğü yüksek reflektif ürünler ve özel logolar.",
  },
  {
    icon: "directions_car",
    title: "ARAÇ CAM FİLMLERİ",
    description:
      "UV/ısı koruması ve konfor için profesyonel araç cam filmleri.",
  },
] as const;

export const WHY_US = [
  {
    icon: "verified",
    title: "Usta İşçilik",
    description:
      "Eğitimli ekibimizle OEM standartlarında montaj ve kusursuz uygulama.",
  },
  {
    icon: "payments",
    title: "Şeffaf Fiyatlandırma",
    description: "Sürpriz yok: Net teklif, net kapsam ve hızlı planlama.",
  },
  {
    icon: "support_agent",
    title: "Garanti ve Destek",
    description:
      "Uygulama sonrası bakım önerileri ve garanti kapsamıyla yanınızdayız.",
  },
] as const;

export const VIDEOS = [
  {
    title:
      "Mat Garaj'da Ferrari 296 GTB'ye Özel Tasarım | Sarı Şerit",
    description:
      "Ferrari 296 GTB'ye Mat Garaj'da kişiye özel sarı şerit tasarımı ve detaylı uygulama.",
  },
  {
    title: "Türkiye'nin Tek Mat Siyah Bentley'i! | Kaplamanın Tüm Detayları",
    description:
      "Türkiye'de tek olan mat siyah Bentley Bentayga'nın Mat Garaj'daki değişim ve kaplama süreci.",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    id: "ferrari-296-gtb-sari-serit",
    title: "Ferrari 296 GTB | Sarı Şerit Tasarım",
    coverImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c50fa8?w=800&q=80",
    // Instagram reel/post URL — gerçek linkinizi buraya yapıştırın
    instagramUrl: "#",
  },
  {
    id: "bentley-bentayga-mat-siyah",
    title: "Mat Siyah Bentley Bentayga | Kaplama Detayları",
    coverImage:
      "https://images.unsplash.com/photo-1563720360172-824a3515a014?w=800&q=80",
    // Instagram reel/post URL — gerçek linkinizi buraya yapıştırın
    instagramUrl: "#",
  },
  {
    id: "ferrari-ozel-kaplama",
    title: "Ferrari Özel Kaplama | Mat Garaj Stüdyo",
    coverImage:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    // Instagram reel/post URL — gerçek linkinizi buraya yapıştırın
    instagramUrl: "#",
  },
  {
    id: "bentley-luxury-finish",
    title: "Bentley Premium Finish | Tam Uygulama",
    coverImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    // Instagram reel/post URL — gerçek linkinizi buraya yapıştırın
    instagramUrl: "#",
  },
] as const;

// Google Maps işletme yorumları sayfası — gerçek Google Maps linkinizi buraya yapıştırın
export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.9,
  totalReviews: 120,
  mapsUrl: "#",
} as const;

export const GOOGLE_REVIEWS = [
  {
    id: "review-1",
    author: "Ahmet Y.",
    date: "2 ay önce",
    rating: 5,
    text: "Aracımın kaplamasını Mat Garaj'da yaptırdım. İşçilik kalitesi ve ilgi olağanüstüydü, sonuç tam istediğim gibiydi.",
  },
  {
    id: "review-2",
    author: "Elif K.",
    date: "3 ay önce",
    rating: 5,
    text: "Profesyonel ekip, şeffaf fiyatlandırma ve mükemmel teslimat süreci. Kesinlikle tavsiye ederim.",
  },
  {
    id: "review-3",
    author: "Murat D.",
    date: "5 ay önce",
    rating: 5,
    text: "Cam filmi ve kaplama işlemlerim kusursuz tamamlandı. Detaylara gösterilen özen gerçekten fark yaratıyor.",
  },
] as const;

export const SOCIAL_LINKS = [
  { icon: "photo_camera", title: "Instagram", href: "#" },
  { icon: "smart_display", title: "YouTube", href: "#" },
  { icon: "music_note", title: "TikTok", href: "#" },
  { icon: "thumb_up", title: "Facebook", href: "#" },
] as const;
