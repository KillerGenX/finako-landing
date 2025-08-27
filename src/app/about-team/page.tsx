import React from 'react';
// Impor ikon LinkedIn, Anda mungkin perlu menginstal react-icons
// Buka terminal dan jalankan: npm install react-icons
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa'; // Impor ikon email

const AboutFounder: React.FC = () => {
  return (
    // Kita beri latar belakang abu-abu muda agar menonjol dan tambahkan margin atas agar tidak menempel header
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        
        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-teal-600">Di Balik Finako</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Dari Pelaku Usaha, Untuk Pelaku Usaha
          </p>
        </div>
        
        {/* Kartu Profil Founder */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
          
          {/* Bagian Foto */}
          <div className="md:w-1/3">
            {/* GANTI DENGAN URL FOTO ANDA NANTI */}
            <img 
              className="h-48 w-48 md:h-full md:w-full object-cover rounded-full md:rounded-none md:rounded-l-2xl p-4 md:p-0" 
              src="/images/Founder.jpg" // Placeholder, ganti dengan foto Anda
            />
          </div>

          {/* Bagian Teks & Informasi */}
          <div className="md:w-2/3 p-6 md:p-8 text-center md:text-left">
            <p className="text-sm font-medium text-teal-600">Founder</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Teguh Prasetyo</h3>
            <p className="mt-4 text-gray-600">
            "Selama bertahun-tahun bekerja di dunia teknologi, saya melihat langsung betapa sulitnya UMKM mendapatkan akses ke perangkat lunak yang bagus tanpa harus membayar mahal.

Karena itu, saya membangun Finako dengan satu misi sederhana: memberikan alat bantu canggih yang mudah digunakan, aman, dan terjangkau bagi para pelaku usaha kuliner di Indonesia. Keamanan data bisnis Anda adalah janji dan prioritas utama saya."
            </p>
            
            {/* Link LinkedIn */}
            <div className="mt-6 flex justify-center md:justify-start gap-4"> {/* Menggunakan flexbox untuk menata link */}
              <a 
                href="https://www.linkedin.com/in/teguhpraasetyo" // Ganti dengan URL LinkedIn Anda
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors"
              >
                <FaLinkedin size={24} />
                <span>Hubungi di LinkedIn</span>

              </a>
              {/* Link Email */}
              <a
                href="mailto:founder@finako.app"
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors"
              >
                <FaEnvelope size={24} />
                <span>Email</span>

              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutFounder;