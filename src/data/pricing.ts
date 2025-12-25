import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  // PAKET 1: BASIC
  {
    name: 'Basic',
    price: 39000, // Gunakan format angka
    features: [
      '1 Outlet',
      '2 Pengguna ',
      'Maksimal 25 Produk',
      'Laporan Penjualan Dasar',
      'Fitur Absensi Pegawai'
    ],
  },
  // PAKET 2: PRO (Akan di-highlight otomatis)
  {
    name: 'Pro',
    price: 89000, // Gunakan format angka
    features: [
      'Semua fitur di paket Basic',
      'Mendukung hingga 5 Outlet',
      '10 Pengguna',
      'Produk dengan Varian',
      'Maksimal 50 Produk',
    ],
  },
  // PAKET 3: ENTERPRISE
  {
    name: 'Enterprise',
    price: 139000, // Gunakan format angka
    features: [
      'Semua fitur di paket Pro',
      'Mendukung hingga 10 Outlet',
      '20 Pengguna',
      'Produk Komposit & Stok Bahan Baku',
      'Dukungan Prioritas',
    ],
  },
];