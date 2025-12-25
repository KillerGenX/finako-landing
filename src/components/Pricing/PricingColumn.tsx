import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IPricing } from "@/types";
import NextLink from 'next/link'; // Kita ubah namanya menjadi NextLink
interface Props {
  tier: IPricing;
  highlight?: boolean;
}

// --- Fungsi Helper untuk Format Rupiah ---
const formatRupiah = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Tidak menampilkan desimal
  }).format(number);
};
// ------------------------------------------

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features } = tier;

  return (
    <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { 
      "shadow-lg border-primary": highlight, // Tambahkan border primary jika highlight
    })}>
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-semibold mb-4">{name}</h3>
        <p className="text-3xl md:text-5xl font-bold mb-6">
          <span className={clsx({ "text-primary": highlight })}>
            {/* --- Logika Harga Baru --- */}
            {typeof price === 'number' ? formatRupiah(price) : price}
          </span>
          {typeof price === 'number' && <span className="text-lg font-normal text-gray-600"> / bulan</span>}
        </p>
        <NextLink  href="https://pos.finako.app/register" className={clsx("w-full py-3 px-4 rounded-full transition-colors font-semibold", { 
          "bg-primary hover:bg-secondary text-white": highlight, // Perbaiki warna tombol highlight
          "bg-hero-background hover:bg-gray-200": !highlight 
        })}>
          Pilih Paket
        </NextLink>
      </div>
      <div className="p-6 mt-1">
        <p className="font-bold mb-5">YANG ANDA DAPATKAN:</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <BsFillCheckCircleFill className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingColumn;