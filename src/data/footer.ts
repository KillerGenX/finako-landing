import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  // Ganti subheading menjadi tagline Finako
  subheading: "Aplikasi kasir ramah yang dirancang untuk memajukan bisnis kuliner Indonesia.",
  
  // Sesuaikan Quick Links
  quickLinks: [
    { text: "Fitur", url: "#features" },
    { text: "Blog", url: "https://blog.finako.app" },
    { text: "Harga", url: "#pricing" },
    { text: "Testimoni", url: "#testimonials" },
    { text: "FAQ", url: "#faq" },
  ],

  // Masukkan detail kontak Finako
  email: 'cs@finako.app',
  telephone: '+62 821-331-331-20', // Gunakan format Indonesia

  // Masukkan link media sosial Anda. Hapus atau beri komentar pada yang tidak Anda miliki.
  socials: {
    // github: '#',
    //twitter: '#',
    facebook: '#',
    linkedin: 'https://www.linkedin.com/company/finako-app',
    instagram: '#',
  }
};