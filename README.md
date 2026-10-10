# ⏱️ Speedometer GPS Online (PWA)

Aplikasi speedometer online real-time berbasis Web Geolocation API & PWA (Progressive Web App) dengan antarmuka modern hemat daya.

🌐 **Live Website:** [https://fajrisilmi12-cyber.github.io/speedometer-gps/](https://fajrisilmi12-cyber.github.io/speedometer-gps/)

---

## ✨ Fitur Utama

- 🏎️ **Kecepatan Real-time** — Akurat berbasis sensor GPS perangkat (`km/h`).
- ⏱️ **Timer & Statistik Perjalanan** — Durasi berkendara, kecepatan puncak (*max speed*), jarak tempuh (*km*), dan kecepatan rata-rata.
- ⛽ **Estimasi Konsumsi BBM** — Perhitungan estimasi bensin terpakai (Liter) dan rasio km/L adaptif sesuai kecepatan.
- 📱 **Screen Wake Lock API** — Layar ponsel tetap menyala otomatis saat speedometer aktif di jalan.
- 📓 **Jurnal Berkendara (History)** — Catatan riwayat perjalanan tersimpan otomatis harian di penyimpanan lokal (*Local Storage*).
- 🌓 **Dark / Light Mode** — Mode gelap hemat baterai AMOLED dan mode terang untuk siang hari.
- 📲 **PWA Offline Ready** — Dapat di-*install* langsung ke layar utama (*Add to Home Screen*) dan bekerja cepat via Service Worker.

---

## 🚀 Cara Menggunakan

1. Buka tautan: [https://fajrisilmi12-cyber.github.io/speedometer-gps/](https://fajrisilmi12-cyber.github.io/speedometer-gps/) di browser HP (Chrome/Safari/Brave).
2. Izinkan akses **Lokasi (GPS)** saat diminta oleh browser.
3. Pastikan indikator status GPS berubah hijau (`|||`).
4. (Opsional) Ketuk menu browser lalu pilih **"Install App"** atau **"Add to Home Screen"** agar berfungsi layaknya aplikasi native fullscreen.

---

## 🛠️ Tech Stack

- **HTML5 & Vanilla JavaScript** (Geolocation API, Screen Wake Lock API)
- **Tailwind CSS** (via CDN)
- **Service Worker & Web App Manifest** (PWA offline caching)

---

## 📄 Lisensi

MIT License
