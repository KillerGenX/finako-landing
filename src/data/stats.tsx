// 1. Impor ikon-ikon baru yang lebih sesuai
import { FiClock, FiMessageSquare, FiTrendingUp } from "react-icons/fi";
import { IStats } from "@/types";

// 2. Definisikan statistik baru yang relevan untuk Finako
export const stats: IStats[] = [
  // STATISTIK 1: FOKUS PADA KEMUDAHAN
  {
    title: "< 5 Menit",
    // Gunakan ikon jam dan warna primary kita
    icon: <FiClock size={34} className="text-primary" />,
    description: "Waktu yang dibutuhkan dari daftar hingga Anda siap mencatat penjualan pertama Anda."
  },
  
  // STATISTIK 2: FOKUS PADA DUKUNGAN
  {
    title: "24/7",
    // Gunakan ikon pesan dan warna primary kita
    icon: <FiMessageSquare size={34} className="text-primary" />,
    description: "Dukungan komunitas via grup WhatsApp. Kami ada saat bisnis Anda membutuhkan kami."
  },

  // STATISTIK 3: FOKUS PADA PERTUMBUHAN BERSAMA
  {
    title: "100%",
    // Gunakan ikon tren naik dan warna primary kita
    icon: <FiTrendingUp size={34} className="text-primary" />,
    description: "Komitmen kami untuk terus mengembangkan fitur berdasarkan masukan dari pengusaha seperti Anda."
  }
];