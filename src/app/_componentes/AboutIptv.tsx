import Image from "next/image";
import serverImage from "../../../public/assets/img (1).webp";
import networkImage from "../../../public/assets/image.png";
import { Check, Globe } from "lucide-react";

export function AboutIPTV() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative" data-aos="fade-up-right" data-aos-delay="550">
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden">
              <Image
                src={serverImage}
                alt="Servidor IPTV"
                fill
                className="object-contain hover:scale-110 transition-all duration-300"
                quality={100}
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 md:-bottom-8 -bottom-16">
              <Image
                src={networkImage}
                alt="Rede IPTV"
                fill
                className="object-contain hover:scale-110 transition-all duration-300"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-white">Sobre nosso serviço IPTV</h2>
            <p className="text-gray-300">
              Oferecemos servidores IPTV de alta qualidade, garantindo estabilidade, velocidade e uma ampla variedade de canais para você aproveitar sem interrupções.
            </p>
            <ul className="space-y-4">
              {["Alta estabilidade", "Canais em Full HD", "Suporte 24/7"].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <Check className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-blue-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <Globe className="w-5 h-5 text-white" /> Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
