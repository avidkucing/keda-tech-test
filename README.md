
# KeDA Tech Test

## Test 1

### Jawaban Soal

Jawaban untuk 3 soal yang telah diberikan terdapat di `scr/test1.js`

### Menjalankan Unit Test

Proyek ini menggunakan **Jest** untuk melakukan unit test. Ikuti langkah-langkah di bawah ini untuk menjalankan test:

1. Instal dependensi terlebih dahulu:
```bash
npm install
```

2. Jalankan semua test dengan perintah:
```bash
npm test
```

Hasil test akan ditampilkan di terminal, dan akan menunjukkan apakah semua fungsi bekerja dengan benar atau tidak.

## Test 2

Ini adalah proyek [Next.js](https://nextjs.org) yang dibuat menggunakan [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Untuk memulai server development, jalankan perintah berikut:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

Proyek ini menggunakan [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) untuk mengoptimalkan dan memuat font [Geist](https://vercel.com/font) secara otomatis — font baru dari Vercel.

Selain itu, proyek ini juga menggunakan **SASS** untuk styling yang lebih fleksibel dan terstruktur.

### Kenapa Menggunakan Next.js?

- Pilihan rendering lebih fleksibel: Next.js mendukung Server-Side Rendering (SSR), Static Site Generation (SSG), dan Incremental Static Regeneration (ISR) — memberi kita kontrol penuh atas performa dan SEO.

- Routing lebih mudah: Struktur folder menjadi routing secara otomatis, termasuk routing dinamis seperti /blog/[slug].

- Optimasi SEO: Karena bisa merender di server, konten bisa diindeks lebih baik oleh mesin pencari dibanding SPA biasa.

- Dukungan API Route: Dapat membuat API langsung di dalam proyek Next.js — cocok untuk backend ringan atau prototipe cepat.

- Development lebih mudah: Hot reload, integrasi TypeScript, built-in image optimization, dan dokumentasi yang lengkap membuat proses development jadi menyenangkan.

### Kenapa Menggunakan SASS?

- Nesting lebih rapi: SASS memungkinkan nesting selector seperti struktur HTML, membuat CSS lebih terstruktur dan mudah dibaca.

- Mendukung variabel dan mixins: Gunakan variabel untuk warna, font, atau ukuran agar styling lebih konsisten dan mudah dikelola.

- Mendukung partials & CSS modules: File SCSS bisa dibagi menjadi partials dan diimpor sesuai kebutuhan, mempermudah scaling pada proyek besar.

- Kompatibel dengan CSS biasa: Semua CSS valid juga berlaku di SASS, jadi migrasi atau integrasi sangat mudah.
