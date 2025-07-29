"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        
        {/* === KOLOM KIRI (Informasi) === */}
        <div className="lg:w-1/3">
          <p className="hidden lg:block text-foreground-accent uppercase tracking-wider">Punya Pertanyaan?</p>
          <SectionTitle>
            <h2 className="my-3 !leading-snug text-center lg:text-left">
              Jawaban Atas Keraguan Anda
            </h2>
          </SectionTitle>
          <p className="lg:mt-6 text-foreground-accent text-center lg:text-left">
            Tidak menemukan jawaban yang Anda cari? Jangan ragu untuk menghubungi kami.
          </p>
          {/* Ganti dengan email atau kontak Finako */}
          <a href="mailto:cs@finako.app" className="mt-3 block text-xl lg:text-3xl text-primary font-semibold hover:underline text-center lg:text-left">
            cs@finako.app
          </a>
        </div>

        {/* === KOLOM KANAN (Daftar FAQ) === */}
        <div className="w-full lg:w-2/3 border-b border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full py-5 text-lg text-left">
                      <span className="font-semibold text-foreground">{faq.question}</span>
                      {open ? 
                        <BiMinus className="w-5 h-5 text-primary" /> : 
                        <BiPlus className="w-5 h-5 text-gray-400" />
                      }
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-0 pb-5 text-foreground-accent">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;