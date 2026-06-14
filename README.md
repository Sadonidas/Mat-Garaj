# Mat Garaj

Mat Garaj web sitesi — Next.js App Router, React 19, Tailwind CSS v4.

## Geliştirme

```bash
npm install
cp .env.example .env.local   # isteğe bağlı — Blob URL hazır olunca doldurun
npm run dev
```

Tarayıcıda: [http://localhost:3000](http://localhost:3000)

## Üretim

```bash
npm run build
npm start
```

## Proje yapısı

- `src/app/` — layout, ana sayfa, global stiller
- `src/components/` — Navbar, Hero, Services, Footer vb.
- `src/lib/constants.ts` — navigasyon, hizmetler, içerik
- `src/lib/media.ts` — hero video URL (Vercel Blob env)
- `legacy/code.html` — önceki statik HTML sürümü

## Hero videosu — Vercel Blob

Site, hero arka plan videosunu **Vercel Blob public URL** üzerinden okur.

### 1. Vercel projesini oluştur

1. [vercel.com](https://vercel.com) → bu repo'yu import edin
2. **Storage** → **Blob** → store oluşturun (projeye bağlayın)

### 2. Videoyu Blob'a yükleyin

Dashboard'dan yükleyebilir veya CLI kullanabilirsiniz:

```bash
npx vercel blob upload ./hero.mp4 --pathname hero/mat-garaj-hero.mp4
```

Yükleme sonrası size şuna benzer bir **public URL** verilir:

`https://xxxxx.public.blob.vercel-storage.com/hero/mat-garaj-hero.mp4`

### 3. Ortam değişkenini ayarlayın

| Ortam | Değişken | Değer |
|-------|----------|-------|
| Yerel | `.env.local` | `NEXT_PUBLIC_HERO_VIDEO_URL=<blob-public-url>` |
| Vercel | Project → Settings → Environment Variables | Aynı değişken ve URL |

`.env.example` dosyasını şablon olarak kullanın.

### 4. Deploy

Env değişkeni eklendikten sonra yeniden deploy edin. Değişken tanımlı değilse geçici olarak Pixabay yedek videosu oynatılır.

**Not:** Hero oynatmak için yalnızca public Blob URL yeterlidir. `BLOB_READ_WRITE_TOKEN` yalnızca programatik yükleme/API için gereklidir.
