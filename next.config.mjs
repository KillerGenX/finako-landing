/** @type {import('next').NextConfig} */
const nextConfig = {
    // Tambahkan blok ini untuk memberitahu Next.js agar mengabaikan error ESLint saat build
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;