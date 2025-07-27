// src/components/Footer.tsx
import Link from 'next/link';
import React from 'react';
import NextImage from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils'; // Pastikan utilitas ini ada

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Kolom 1: Logo & Subheading */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <NextImage
              src="/finako.svg"
              alt="Logo Finako"
              width={110}
              height={28}
              priority={true}
            />
          </Link>
          <p className="mt-3.5 text-foreground-accent">
            {footerDetails.subheading}
          </p>
        </div>

        {/* Kolom 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map(link => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground" target={link.url.startsWith('http') ? '_blank' : '_self'}
    rel="noopener noreferrer">{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak & Media Sosial */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Hubungi Kami Untuk Demo</h4>
          {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">Email: {footerDetails.email}</a>}
          {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground mt-1">Telepon: {footerDetails.telephone}</a>}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map(platformName => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                      target="_blank" // Buka di tab baru
                      rel="noopener noreferrer"
                      className="text-foreground-accent hover:text-primary transition-colors"
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  )
                }
              })}
            </div>
          )}
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className="mt-10 pt-8 border-t border-gray-200 text-center text-foreground-accent px-6">
        <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
        {/* Kita hapus kredit ke template untuk tampilan produksi */}
      </div>
    </footer>
  );
};

export default Footer;