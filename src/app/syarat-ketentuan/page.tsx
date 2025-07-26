import Container from '@/components/Container';
import React from 'react';

const SyaratKetentuanPage: React.FC = () => {
  return (
    <div className="bg-background py-24 sm:py-32">
      <Container>
        {/* 'prose-h3:mt-12' akan memberi margin atas yang lebih besar pada setiap h3 */}
        <div className="prose lg:prose-lg max-w-4xl mx-auto prose-h3:mt-12 prose-h3:border-b prose-h3:pb-2 prose-h3:border-gray-200">
          
          <h1>Syarat dan Ketentuan Penggunaan Finako</h1>
          <p className="lead">Terakhir diperbarui: [Tanggal Hari Ini]</p>
          
          <p className="font-bold">BACALAH SELURUH KETENTUAN PENGGUNAAN INI SEBELUM MENGAKSES ATAU MENGGUNAKAN LAYANAN FINAKO.</p>
          
          <p>Ketentuan Penggunaan ini mengatur hubungan antara pengguna (“Mitra Usaha”) dan Finako ("Kami"). Dengan mendaftar atau menggunakan Layanan kami, Anda setuju untuk terikat oleh S&K ini secara penuh.</p>
          
          <hr className="my-12"/>

          <h3>1. Definisi</h3>
          <ol className="space-y-2"> {/* Memberi jarak antar list item */}
            <li><strong>Layanan:</strong> Merujuk pada aplikasi perangkat lunak berbasis web "Finako" yang kami kembangkan, berfungsi sebagai sistem kasir digital dan pengelolaan usaha.</li>
            <li><strong>Mitra Usaha:</strong> Adalah perorangan atau badan usaha yang mendaftar untuk menggunakan Layanan Finako.</li>
            <li><strong>Akun:</strong> Adalah akun yang dibuat oleh Mitra Usaha untuk mengakses Layanan Finako.</li>
            <li><strong>Data Usaha:</strong> Adalah semua data yang Anda masukkan ke dalam Layanan, termasuk data produk, resep, penjualan, stok, dan pegawai.</li>
          </ol>

          <h3>2. Pendaftaran dan Akun</h3>
          <ol className="space-y-2">
            <li>Anda harus berusia minimal 18 tahun untuk membuat Akun.</li>
            <li>Anda bertanggung jawab untuk menyediakan informasi yang akurat, lengkap, dan terkini saat registrasi.</li>
            <li>Anda bertanggung jawab penuh untuk menjaga kerahasiaan kata sandi dan keamanan Akun Anda.</li>
            <li>Kami berhak menolak pendaftaran atau menangguhkan Akun jika kami mencurigai adanya pelanggaran hukum atau penyalahgunaan.</li>
          </ol>

          <h3>3. Biaya dan Pembayaran</h3>
          <ol className="space-y-2">
            <li>Layanan Finako tersedia dalam bentuk paket langganan berbayar dengan siklus bulanan atau tahunan.</li>
            <li>Pembayaran harus dilakukan di muka sesuai dengan tagihan. Apabila pembayaran tidak dilakukan, akses ke fitur berbayar dapat kami batasi atau hentikan.</li>
            <li>Semua biaya yang telah dibayarkan tidak dapat dikembalikan (non-refundable), kecuali ditentukan lain oleh hukum yang berlaku.</li>
            <li>Harga dapat berubah sewaktu-waktu dengan pemberitahuan sebelumnya kepada Mitra Usaha.</li>
          </ol>
          
          <h3>4. Kewajiban Mitra Usaha</h3>
          <p>Anda setuju untuk tidak menggunakan Layanan untuk aktivitas yang melanggar hukum, norma kesusilaan, atau hak kekayaan intelektual pihak lain. Anda bertanggung jawab penuh atas semua Data Usaha yang Anda masukkan.</p>

          <h3>5. Kepemilikan Hak Kekayaan Intelektual</h3>
          <p>Semua hak atas Layanan (nama, logo, kode) adalah milik eksklusif Finako. Anda tetap menjadi pemilik penuh atas semua Data Usaha Anda. Anda memberikan kami lisensi terbatas untuk memproses Data Usaha Anda hanya untuk tujuan menyediakan dan meningkatkan Layanan.</p>

          {/* === Pasal Privasi yang Diperjelas === */}
          <h3>6. Privasi dan Keamanan Data</h3>
          <p>Kami sangat peduli dengan privasi dan keamanan data Anda. Dengan menggunakan Layanan, Anda menyetujui praktik pengolahan data kami sebagai berikut:</p>
          <ul className="space-y-2">
            <li><strong>Pengumpulan Data:</strong> Kami mengumpulkan data yang Anda berikan saat registrasi (nama, email, no. telepon) dan Data Usaha yang Anda input ke dalam aplikasi untuk dapat menyediakan Layanan.</li>
            <li><strong>Penggunaan Data:</strong> Data Anda digunakan untuk menyediakan fitur aplikasi, memproses transaksi, memberikan dukungan pelanggan, dan mengirimkan informasi penting terkait layanan.</li>
            <li><strong>Pembagian Data:</strong> Kami tidak akan menjual atau membagikan data pribadi atau Data Usaha Anda kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan eksplisit dari Anda. Pembagian data hanya dapat terjadi kepada mitra infrastruktur (seperti penyedia server cloud) yang terikat kerahasiaan, atau jika diwajibkan oleh hukum.</li>
            <li><strong>Keamanan:</strong> Kami menerapkan standar keamanan teknis, termasuk enkripsi, untuk melindungi data Anda dari akses yang tidak sah.</li>
          </ul>
          <p>Untuk detail yang lebih lengkap, silakan baca <a href="/kebijakan-privasi" target="_blank" rel="noopener noreferrer">Kebijakan Privasi</a> kami secara penuh.</p>

          <h3>7. Batasan Tanggung Jawab</h3>
          <p>Layanan disediakan "sebagaimana adanya". Tanggung jawab finansial kami atas setiap klaim tidak akan melebihi jumlah total biaya langganan yang telah Anda bayarkan dalam 3 bulan terakhir.</p>

          <h3>8. Pengakhiran</h3>
          <p>Anda dapat berhenti berlangganan kapan saja. Kami dapat menangguhkan atau menghentikan Akun Anda jika terjadi pelanggaran serius terhadap S&K ini. Kami mengesampingkan Pasal 1266 KUHPerdata, sehingga pengakhiran tidak memerlukan putusan pengadilan.</p>
          
          <h3>9. Lain-lain</h3>
          <p>Ketentuan Penggunaan ini diatur oleh hukum Republik Indonesia. Perselisihan akan diupayakan untuk diselesaikan secara musyawarah, dan jika gagal, akan diselesaikan melalui Badan Arbitrase Nasional Indonesia (BANI).</p>

          <h3>10. Kontak Kami</h3>
          <p>
            Jika Anda memiliki pertanyaan mengenai Ketentuan Penggunaan ini, silakan hubungi kami melalui email di <a href="mailto:dukungan@finako.com">dukungan@finako.com</a>.
          </p>

        </div>
      </Container>
    </div>
  );
};

export default SyaratKetentuanPage;