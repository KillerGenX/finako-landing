import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- DI SINI PERUBAHAN KUNCI-NYA ---
        // Kita definisikan warna dengan komponen RGB-nya agar modifier opasitas berfungsi
        primary: {
          DEFAULT: "#14B8A6", // Green Teal
          // Tambahkan varian lain jika perlu
        },
        secondary: {
          DEFAULT: "#0D9488", // Teal lebih gelap
        },
        // Kita bisa tetap gunakan variabel untuk warna yang tidak butuh modifier opasitas
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
      },
    },
  },
  plugins: [],
};
export default config;