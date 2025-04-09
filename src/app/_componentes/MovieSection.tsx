"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface Movie {
  name: string;
  description: string;
  image: string;
}

const movies: Movie[] = [
  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (1).webp",
  },
  {
    name: "Interstellar",
    description: "Uma jornada épica pelo espaço e pelo tempo para salvar a humanidade.",
    image: "/assets/img (2).webp",
  },
  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (3).webp",
  },
  {
    name: "Interstellar",
    description: "Uma jornada épica pelo espaço e pelo tempo para salvar a humanidade.",
    image: "/assets/img (4).webp",
  },
  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (5).webp",
  },
  {
    name: "Interstellar",
    description: "Uma jornada épica pelo espaço e pelo tempo para salvar a humanidade.",
    image: "/assets/img (6).webp",
  },
  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (7).webp",
  },
  {
    name: "Interstellar",
    description: "Uma jornada épica pelo espaço e pelo tempo para salvar a humanidade.",
    image: "/assets/img (8).webp",
  },
  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (9).webp",
  },
  {
    name: "Interstellar",
    description: "Uma jornada épica pelo espaço e pelo tempo para salvar a humanidade.",
    image: "/assets/img (10).webp",
  },
];

export function MovieSection() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative py-16 overflow-hidden text-white">
      {/* Fundo com imagem e overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bgnet.jpg" // Certifique-se de que o arquivo esteja na pasta "public"
          alt="Fundo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-10 text-center drop-shadow"
          data-aos="fade-up"
        >
          Catálogo de Filmes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full"
              style={{ maxWidth: "200px" }} // ajustado para caber 5 por linha
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={movie.image}
                alt={movie.name}
                width={200}
                height={300}
                className="object-cover w-full h-auto rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedMovie(movie)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm shadow"
                >
                  Ver Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Página de detalhes full-screen */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 bg-black text-white overflow-auto">
          <div className="relative">
            {/* Botão de fechar */}
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-6 text-white text-3xl hover:text-red-500 z-10"
            >
              ✖
            </button>

            {/* Banner do filme */}
            <div className="w-full h-96 sm:h-[500px] relative">
              <Image
                src={selectedMovie.image}
                alt={selectedMovie.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Conteúdo do filme */}
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-4">{selectedMovie.name}</h1>
              <p className="text-lg leading-relaxed">
                {selectedMovie.description ||
                  "Sem descrição disponível para este filme."}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
