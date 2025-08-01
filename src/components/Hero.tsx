import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                <a 
      href="https://pos.finako.app/register" 
      className="manrope w-full sm:w-auto text-white bg-primary hover:bg-secondary px-8 py-3.5 rounded-full transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      Daftar Sekarang
    </a>

    {/* Tombol Kedua (Secondary CTA) */}
    <a 
      href="#cta"
      className="manrope w-full sm:w-auto text-foreground bg-white hover:bg-hero-background px-8 py-3.5 rounded-full transition-colors font-semibold border border-gray-300 shadow-sm"
    >
      Jadwalkan Demo
    </a>
                </div>
                <div className="relative mt-12 md:mt-16 flex justify-center items-center">
  
  {/* --- LAKUKAN TES DI SINI --- */}
  <div 
  className="absolute w-[400px] h-[400px] -translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 to-transparent blur-3xl -z-10"
></div>

  {/* Gambar Mockup */}
  <Image
    src={heroDetails.centerImageSrc}
    width={384}
    height={340}
    quality={100}
    sizes="(max-width: 768px) 100vw, 384px"
    priority={true}
    unoptimized={true}
    alt="Mockup Aplikasi Finako"
    className="relative z-10"
  />
</div>
            </div>
        </section>
    );
};

export default Hero;
