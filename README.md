# ApexFlow Plumbing & Rooter - Landing Page

Website profil bisnis dan perolehan prospek (lead generation) modern untuk jasa kontraktor pipa residensial dan darurat 24 jam di wilayah Austin, Texas. Dibangun menggunakan Next.js 15, TypeScript, Tailwind CSS, dan Framer Motion dengan arsitektur static export tanpa ketergantungan server runtime.

---

## Daftar Isi

- Ringkasan Proyek
- Fitur Utama
- Struktur Halaman
- Tumpukan Teknologi (Tech Stack)
- Panduan Instalasi dan Menjalankan Proyek
- Konfigurasi Bisnis Terpusat
- Sistem Desain dan Identitas Visual
- Struktur Direktori
- Optimasi dan Aksesibilitas
- Lisensi

---

## Ringkasan Proyek

ApexFlow Plumbing dirancang dengan pendekatan konversi tinggi (conversion-first) yang mengutamakan kecepatan akses, kejelasan informasi biaya, dan pembuktian kredibilitas teknisi berlisensi resmi (Texas Master Plumber License #MP-41982). Antarmuka mengadopsi prinsip desain modern, tipografi tegas, ruang bernapas luas, serta animasi mikro yang terukur dan tidak berlebihan.

---

## Fitur Utama

### 1. Hero Section Terarah
- Tipografi judul dominan dengan proposisi nilai layanan darurat 24/7.
- Tombol aksi utama langsung menuju form reservasi dan tombol sekunder panggilan darurat langsung.
- Latar belakang foto residensial berkualitas tinggi dengan gradasi kontras alami untuk keterbacaan teks maksimal.
- Lencana pembuktian sosial Google Reviews 4.9 bintang terintegrasi secara ringkas di sudut kanan bawah.

### 2. Jalur Verifikasi Kredibilitas (Trust Strip)
- Menampilkan empat metrik kepercayaan: ulasan Google terverifikasi, akreditasi BBB (A+), lisensi Master Plumber resmi negara bagian Texas, dan proteksi asuransi senilai $2.000.000.

### 3. Katalog Layanan Inti (Core Services Grid)
- Empat kartu layanan komprehensif: Emergency Leak Detection, Drain Cleaning & Hydro-Jetting, Water Heater Servicing, dan Fixture Installation.
- Dilengkapi detail spesifikasi pekerjaan, patokan harga awal transparan, dan tombol pemesanan langsung.

### 4. Tabel Transparansi Biaya (Flat-Rate Pricing Table)
- Penjelasan kebijakan bebas biaya inspeksi diagnostik ($0 Diagnostic Fee) apabila perbaikan disetujui.
- Rincian harga flat-rate tertulis sebelum pekerjaan dimulai guna menghilangkan biaya tersembunyi dan tarif lembur.

### 5. Galeri Hasil Pekerjaan (Before & After Showcase)
- Dokumentasi foto asli pekerjaan sebelum dan sesudah penanganan oleh teknisi.
- Kontrol perbandingan interaktif: tampilan berdampingan (Side-by-Side), hanya Sebelum (Before), dan hanya Sesudah (After).
- Fitur Fullscreen Lightbox interaktif: pengguna dapat mengklik foto untuk melihat resolusi penuh di layar lebar lengkap dengan navigasi tombol panah keyboard.

### 6. Empat Pilar Keunggulan Kontraktor (Why Choose Us)
- Pemaparan keunggulan armada teknisi berlisensi, kendaraan operasional dengan stok suku cadang lengkap, peralatan sensor akustik/kamera HD, serta garansi kebersihan rumah konsumen.

### 7. Pengecek Kode Pos Interaktif & Peta Jangkauan (Service Area)
- Fitur pencarian kode pos 5 digit interaktif untuk memverifikasi ketersediaan armada teknisi di Greater Austin secara instan.
- Peta cakupan wilayah terintegrasi dan tombol seleksi cepat area populer (Downtown, SoCo, Round Rock, Cedar Park, Lakeway).

### 8. Kalkulator Estimasi & Wizard Pemesanan 4 Langkah (Quote Wizard)
- Alur pemesanan interaktif tanpa muat ulang halaman:
  1. Pemilihan jenis masalah dan layanan pipa.
  2. Penentuan tingkat urgensi kedatangan teknisi.
  3. Verifikasi kode pos lokasi pengerjaan.
  4. Pengisian data kontak dan pembuatan nomor tiket referensi otomatis.

### 9. Ulasan Konsumen Terverifikasi (Customer Reviews)
- Papan skor kepuasan pelanggan dengan diagram distribusi bintang 5 dan testimoni riil warga Austin.

### 10. Tanya Jawab Interaktif (FAQ Accordion)
- Akordion interaktif untuk menjawab pertanyaan umum seputar kebijakan tarif, garansi satu tahun, dan estimasi waktu respons teknisi (di bawah 45 menit).

### 11. Bilah Tindakan Cepat Seluler (Mobile Floating Bar)
- Bilah navigasi melayang khusus layar ponsel untuk akses satu ketukan ke panggilan darurat telepon dan pembukaan form estimasi.

---

## Tumpukan Teknologi (Tech Stack)

- Framework: Next.js 15.1.7 (App Router)
- Bahasa: TypeScript 5.7.3
- Desain & Tampilan: Tailwind CSS 3.4.17
- Animasi Antarmuka: Framer Motion 12.4.7
- Ikonografi: Lucide React 0.475.0
- Pemrosesan Gambar: Sharp & Next/Image
- Format Output: Static HTML Export (output: 'export')

---

## Panduan Instalasi dan Menjalankan Proyek

### Prasyarat
- Node.js versi 18.18.0 atau yang lebih baru
- npm, yarn, atau pnpm

### Langkah Instalasi

1. Clone repositori ke direktori lokal:
```bash
git clone <url-repositori>
cd Plumber
```

2. Pasang dependensi proyek:
```bash
npm install
```

3. Jalankan server pengembangan lokal:
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:3000` untuk melihat aplikasi.

4. Membuat build produksi statis:
```bash
npm run build
```
Hasil build statis akan tersimpan di direktori `out/`, siap untuk diunggah ke penyedia hosting statis seperti Cloudflare Pages, Vercel, Netlify, atau GitHub Pages.

---

## Konfigurasi Bisnis Terpusat

Seluruh identitas usaha, kontak telepon, alamat, nomor lisensi, daftar layanan, harga, ulasan, dan daftar kode pos dikelola melalui satu berkas konfigurasi tunggal di:

```
src/config/site.config.ts
```

Perubahan pada nama bisnis, nomor telepon, alamat email, atau daftar layanan di berkas ini akan otomatis diterapkan ke seluruh antarmuka website (termasuk skema SEO Structured Data JSON-LD).

---

## Sistem Desain dan Identitas Visual

### Palet Warna
- Dark Navy (Warna Utama/Latar Belakang Kontras):
  - Navy 950: #080D1A
  - Navy 900: #0F172A
  - Navy 800: #1E293B
- Apex Orange (Aksen Konversi Utama & Interaksi):
  - Vibrant Orange: #FF7A00
  - Deep Orange: #EA580C
- Neutral Canvas (Latar Belakang Konten Bersih):
  - White: #FFFFFF
  - Slate 50: #F8FAFC
  - Slate 100: #F1F5F9
  - Slate 200: #E2E8F0
- Semantik Fungsional Terukur:
  - Emerald Green: Digunakan terbatas untuk status verifikasi lisensi dan garansi.
  - Rose Red: Digunakan terbatas untuk status kegagalan pipa/masalah darurat.

### Prinsip Gerak (Motion)
- Gerakan bersifat lembut (durasi 300ms hingga 500ms) dengan jarak pergeseran pendek (12px hingga 18px).
- Trigger animasi hanya berjalan satu kali saat elemen masuk ke area pandang layar (viewport once).
- Mendukung fitur sistem operasi `prefers-reduced-motion` untuk kenyamanan aksesibilitas.

---

## Struktur Direktori

```
Plumber/
├── public/
│   ├── icon.svg
│   └── images/
│       ├── apex-logo-icon.svg
│       ├── apex-logo-icon.png
│       ├── hero-clean-bg.jpg
│       ├── ba-faucet-before.jpg
│       ├── ba-faucet-after.jpg
│       ├── service-leak.jpg
│       ├── service-drain.jpg
│       ├── service-water-heater.jpg
│       └── service-fixtures.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── coverage/
│   │   │   └── ServiceArea.tsx
│   │   ├── faq/
│   │   │   └── FaqAccordion.tsx
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── layout/
│   │   │   ├── EmergencyTopbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileFloatingBar.tsx
│   │   │   └── Navbar.tsx
│   │   ├── pricing/
│   │   │   └── PricingTable.tsx
│   │   ├── reviews/
│   │   │   └── ReviewsSection.tsx
│   │   ├── services/
│   │   │   └── ServicesGrid.tsx
│   │   ├── showcase/
│   │   │   └── BeforeAfter.tsx
│   │   ├── trust/
│   │   │   ├── TrustStrip.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   ├── ui/
│   │   │   ├── ApexLogo.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── wizard/
│   │       └── QuoteWizard.tsx
│   ├── config/
│   │   └── site.config.ts
│   ├── hooks/
│   │   └── useQuoteWizard.ts
│   └── types/
│       └── index.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Optimasi dan Aksesibilitas

1. Kepatuhan Standar Aksesibilitas WCAG: Seluruh kombinasi warna teks dan latar belakang memenuhi standar kontras WCAG AAA pada teks judul dan WCAG AA pada teks tubuh.
2. SEO dan Metadata: Dilengkapi metadata canonical, OpenGraph, Twitter Cards, serta structured data Schema.org berformat `PlumbingService` dan `LocalBusiness` lengkap dengan koordinat geolokasi kota Austin.
3. Nol Pergeseran Tata Letak (Zero Cumulative Layout Shift): Seluruh elemen visual memiliki rasio aspek atau kontainer yang telah ditentukan sebelum gambar selesai dimuat.
4. Tanpa Server Runtime: Menghasilkan berkas statis murni yang aman dari kerentanan injeksi sisi server dan memiliki latensi respon mendekati instan melalui jaringan CDN.

---

## Lisensi

Hak cipta dilindungi undang-undang. Dikembangkan untuk portofolio dan penggunaan komersial resmi ApexFlow Plumbing.
