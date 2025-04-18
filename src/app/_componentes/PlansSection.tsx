"use client";
import Image from 'next/image';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const streamingServices = [
  { id: 1, name: 'Netflix', src: '/assets/img1.webp' },
  { id: 2, name: 'Amazon Prime', src: '/assets/img2.webp' },
  { id: 3, name: 'HBO Max', src: '/assets/img3.webp' },
  { id: 4, name: 'Disney+', src: '/assets/img4.webp' },
  { id: 5, name: 'Paramount+', src: '/assets/img5.webp' },
  { id: 6, name: 'Apple TV', src: '/assets/img6.webp' },
  { id: 7, name: 'Globo Play', src: '/assets/img7.webp' },
];

export function PlansSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-black">
      {/* Banner de fundo otimizado */}
     

      <div className="relative container mx-auto px-4 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Tenha todos os aplicativos de streaming em sua casa
          </h2>
          <h3 className="text-2xl font-semibold mb-2" data-aos="fade-up" data-aos-delay="100">
            PLANOS
          </h3>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
            Escolha seu plano ideal
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {streamingServices.map((service, index) => (
            <div
              key={service.id}
              className="rounded-lg shadow-md overflow-hidden bg-transparent"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <div className="relative h-40">
                <Image
                  src={service.src}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold">{service.name}</h4>
              </div>
            </div>
          ))}
          {/* Card extra */}
          <div
            className="rounded-lg shadow-md overflow-hidden bg-transparent flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay={streamingServices.length * 100}
          >
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold">E muito mais ...</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
