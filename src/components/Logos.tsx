import React from 'react';
// Impor ikon-ikon yang relevan dari react-icons
import { FaCoffee, FaStore, FaUtensils, FaTruck, FaGlassCheers } from 'react-icons/fa';

// Kita buat data untuk jenis usaha di sini agar rapi
const businessTypes = [
  { 
    icon: FaCoffee, // Menggunakan komponen ikon langsung
    name: 'Kafe & Warkop' 
  },
  { 
    icon: FaUtensils, 
    name: 'Warung Makan' 
  },
  { 
    icon: FaStore, 
    name: 'Restoran' 
  },
  { 
    icon: FaTruck, 
    name: 'Food Truck' 
  },
  { 
    icon: FaGlassCheers, 
    name: 'Kios Minuman' 
  },
];

const Logos: React.FC = () => {
  return (
    // Kita beri ID agar bisa di-link dari navbar jika perlu
    <section id="business-types" className="py-20 px-5 bg-background">
      {/* Judul seksi yang baru dan lebih relevan */}
      <h2 className="text-3xl font-bold text-center text-foreground">
        Dirancang Khusus Untuk <span className="text-primary">Usaha Seperti Anda</span>
      </h2>
      <p className="text-center mt-4 text-foreground-accent max-w-2xl mx-auto">
        Baik Anda pemilik warung kopi sederhana maupun restoran yang sedang berkembang, Finako siap membantu.
      </p>

      {/* Kontainer untuk menampilkan jenis usaha */}
      <div className="mt-12 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center gap-x-6 gap-y-10">
        {businessTypes.map((business, index) => {
          // Kita loop data businessTypes untuk membuat setiap item
          const IconComponent = business.icon; // Ambil komponen ikon
          return (
            <div key={index} className="flex flex-col items-center gap-3 text-center opacity-70 hover:opacity-100 transition-opacity">
              <IconComponent className="w-12 h-12 text-foreground" />
              <p className="font-semibold text-foreground-accent">{business.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Logos;