import {
    FiSmartphone,   // Kasir
    FiPackage,      // Produk & Stok
    FiCamera,       // Absensi
    FiClipboard,    // Pesanan
    FiCpu,          // Otomatis
    FiCoffee,       // Mudah Digunakan
    FiCompass,      // Lokasi
    FiShield,
    FiBarChart2,       // Anti Curang
  } from "react-icons/fi";
  
  // 2. Impor tipe data 'IBenefit'
  import { IBenefit } from "@/types"; // Pastikan path ini sudah benar
  
  // 3. Definisikan 3 pilar fitur Finako
  export const benefits: IBenefit[] = [
    // FITUR 1: SISTEM KASIR (POINT OF SALE)
    {
      title: "Sistem Kasir Modern di Genggaman Anda",
      description: "Proses setiap pesanan dengan cepat, akurat, dan profesional. Kurangi kesalahan manusia dan berikan pengalaman terbaik bagi pelanggan Anda.",
      bullets: [
        {
          title: "Pencatatan Pesanan Intuitif",
          description: "Tampilan yang bersih memudahkan siapa saja untuk menginput pesanan, bahkan tanpa pelatihan khusus.",
          icon: <FiClipboard size={26} className="text-primary" />
        },
        {
          title: "Metode Pembayaran Lengkap",
          description: "Terima pembayaran tunai, kartu, maupun QRIS dalam satu aplikasi yang terintegrasi.",
          icon: <FiSmartphone size={26} className="text-primary" />
        },
        {
          title: "Dirancang untuk Kemudahan",
          description: "Fokus kami adalah membuat teknologi yang tidak membingungkan, sehingga Anda bisa fokus pada bisnis.",
          icon: <FiCoffee size={26} className="text-primary" />
        },
      ],
      imageSrc: "/images/mockup-1.png" // Menggunakan gambar mockup yang sudah ada
    },
    
    // FITUR 2: MANAJEMEN PRODUK & STOK
    {
      title: "Kontrol Penuh Atas Produk dan Bahan Baku",
      description: "Setiap penjualan akan otomatis memotong stok bahan baku sesuai resep. Hindari kerugian akibat stok kosong atau perhitungan manual yang rumit.",
      bullets: [
        {
          title: "Manajemen Resep",
          description: "Masukkan resep sekali, dan biarkan Finako menghitung pemakaian bahan baku untuk setiap item yang terjual.",
          icon: <FiPackage size={26} className="text-primary" />
        },
        {
          title: "Stok Otomatis",
          description: "Setiap Transaksi Penjualan,stok otomatis terpotong.",
          icon: <FiCpu size={26} className="text-primary" />
        },
        {
          title: "Analisis Harga Pokok",
          description: "Pahami biaya riil dari setiap produk yang Anda jual untuk menentukan harga yang paling menguntungkan.",
          icon: <FiBarChart2 size={26} className="text-primary" />
        },
      ],
      imageSrc: "/images/mockup-2.png" // Menggunakan gambar mockup yang sudah ada
    },
  
    // FITUR 3: ABSENSI PEGAWAI
    {
      title: "Kelola Tim Anda dengan Percaya Diri",
      description: "Pastikan kedisiplinan dan kejujuran tim dengan fitur absensi modern yang dilengkapi validasi foto dan lokasi.",
      bullets: [
        {
          title: "Absen dengan Foto Selfie",
          description: "Pegawai melakukan absensi masuk dan pulang dengan mengambil foto diri langsung dari aplikasi.",
          icon: <FiCamera size={26} className="text-primary" />
        },
        {
          title: "Validasi Lokasi GPS",
          description: "Sistem akan mencatat lokasi GPS saat absensi, memastikan pegawai berada di tempat kerja.",
          icon: <FiCompass size={26} className="text-primary" />
        },
        {
          title: "Rekap Kehadiran Anti Curang",
          description: "Dapatkan rekapitulasi jam kerja yang akurat untuk mempermudah proses penggajian setiap bulan.",
          icon: <FiShield size={26} className="text-primary" />
        },
      ],
      // Kita gunakan lagi gambar pertama karena template ini hanya menyediakan 2 mockup
      imageSrc: "/images/mockup-3.png"
    },
  ];