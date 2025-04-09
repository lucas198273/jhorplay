'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const plans = [
  { name: "Mensal", duration: "30 DIAS", price: "29,90", installments: "", trial: true },
  { name: "Trimestral", duration: "3 MESES", price: "24,97", installments: "x3", trial: true },
  { name: "Semestral", duration: "6 MESES", price: "22,48", installments: "x6", trial: true },
  { name: "Anual", duration: "12 MESES", price: "20,41", installments: "x12", trial: true }
];

export function PlanSectionJhor() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden text-white">
      {/* Banner de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/baner0.jpg"
          alt="Plano de fundo"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Overlay escura para legibilidade */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Conteúdo da seção */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-10 bg-[rgba(0,0,0,0.6)] rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-4" data-aos="fade-up">
    Escolha seu plano ideal
  </h2>
  <p className="text-center text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="100">
    Aproveite nossas formas de pagamento facilitadas com conteúdo ilimitado e sem travamentos.
  </p>

  {/* Grid para telas grandes */}
  <div className="hidden lg:grid grid-cols-4 gap-8 justify-items-center">
    {plans.map((plan, index) => (
      <div
        key={index}
        className="bg-[rgba(0,0,0,0.9)] p-6 rounded-lg text-white text-center shadow-lg"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className="text-lg text-gray-300">{plan.duration}</p>
        <ul className="mt-4 text-sm text-gray-200 space-y-1">
          <li>Pacote Completo</li>
          <li>Canais em alta qualidade</li>
          <li>Sem travamentos</li>
          <li>Canais Abertos & Fechados</li>
          <li>Filmes, Séries, Novelas</li>
          <li>Adulto (Opcional)</li>
        </ul>
        <p className="mt-4 text-xl font-bold">
          R$ {plan.price} <span className="text-gray-300">{plan.installments}</span>
        </p>
        {plan.trial && (
          <button className="mt-4 bg-white text-blue-800 hover:bg-gray-200 py-2 px-4 rounded">
            TESTE GRÁTIS
          </button>
        )}
      </div>
    ))}
  </div>

  {/* Mobile: Rolagem lateral */}
  <div className="lg:hidden overflow-x-auto">
    <div className="flex space-x-4 px-4 justify-center">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-[rgba(0,0,0,0.8)] p-6 rounded-lg text-white text-center shadow-lg min-w-[80%] sm:min-w-[60%]"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          <p className="text-lg text-gray-300">{plan.duration}</p>
          <ul className="mt-4 text-sm text-gray-200 space-y-1">
            <li>Pacote Completo</li>
            <li>Canais em alta qualidade</li>
            <li>Sem travamentos</li>
            <li>Canais Abertos & Fechados</li>
            <li>Filmes, Séries, Novelas</li>
            <li>Adulto (Opcional)</li>
          </ul>
          <p className="mt-4 text-xl font-bold">
            R$ {plan.price} <span className="text-gray-300">{plan.installments}</span>
          </p>
          {plan.trial && (
            <button className="mt-4 bg-white text-blue-800 hover:bg-gray-200 py-2 px-4 rounded">
              TESTE GRÁTIS
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}
