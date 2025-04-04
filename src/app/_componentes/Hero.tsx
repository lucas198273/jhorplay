'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative w-full aspect-video flex items-center justify-center overflow-hidden text-white">
      {/* Fundo - Banner completo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bg1.webp"
          alt="Banner de fundo"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          A melhor lista IPTV com teste grátis do Brasil
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-200">
          Assista a todos os seus canais de TV e streaming preferidos com qualidade e estabilidade.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl shadow-lg text-sm md:text-lg">
            ASSINAR AGORA
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl shadow-lg text-sm md:text-lg">
            TESTE GRÁTIS
          </button>
        </div>
      </div>
    </section>
  );
}
