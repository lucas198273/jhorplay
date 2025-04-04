"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import imgBanner1 from "../../../public/assets/banners/bn1.png"; // Substitua pelas imagens do banner
import imgBanner2 from "../../../public/assets/banners/bn1.png";
import imgBanner3 from "../../../public/assets/banners/bn1.png";

const banners = [imgBanner1, imgBanner2, imgBanner3]; // Imagens dos banners

export  function BannerSlider() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Troca de banner a cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length); // Atualiza o banner atual
    }, 3000);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full h-64 md:h-96 bg-black">
      <div className="relative w-full h-full">
        {/* Exibição do banner atual */}
        <Image
          src={banners[currentBanner]}
          alt={`Banner ${currentBanner + 1}`}
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

      {/* Overlay (Opcional) */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </section>
  );
}
