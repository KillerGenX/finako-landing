import React from 'react';
import NextImage from 'next/image'; // Menggunakan alias untuk menghindari konflik
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-10 lg:grid-cols-3 lg:max-w-full">
      {testimonials.map((testimonial, index) => (
        <figure 
          key={index}
          className="flex flex-col items-center text-center lg:items-start lg:text-left bg-base-200 p-6 rounded-lg"
        >
          {/* Kutipan Testimoni */}
          <blockquote className="text-foreground-accent mb-6 relative">
            <span className="absolute -top-3 -left-4 text-6xl text-primary/20 font-serif">“</span>
            <p className="relative z-10">"{testimonial.quote}"</p>
          </blockquote>

          {/* Profil Pengguna */}
          <figcaption className="flex items-center mt-auto">
            <NextImage
              src={testimonial.avatarSrc}
              alt={`Foto profil ${testimonial.name}`}
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-primary">{testimonial.name}</h3>
              <p className="text-sm text-foreground-accent">
                {testimonial.businessName}, {testimonial.location}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Testimonials;