"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface Movie {
  name: string;
  description: string;
  image: string;
  cover: string;
  trailerUrl: string;
}

const movies: Movie[] = [
  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (1).webp",
    cover: "/assets/img (1).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (2).webp",
    cover: "/assets/img (2).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (3).webp",
    cover: "/assets/img (3).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (4).webp",
    cover: "/assets/img (4).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (5).webp",
    cover: "/assets/img (5).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (6).webp",
    cover: "/assets/img (6).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (7).webp",
    cover: "/assets/img (7).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (8).webp",
    cover: "/assets/img (8).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (9).webp",
    cover: "/assets/img (9).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },  {
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (10).webp",
    cover: "/assets/img (10).webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  // ... outros filmes
];

export function MovieSection() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="relative py-16 overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image src="/assets/bgnet.jpg" alt="Fundo" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center drop-shadow" data-aos="fade-up">
          Catálogo de Filmes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full"
              style={{ maxWidth: "200px" }}
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
              <div className="absolute bottom-2 left-0 w-full flex justify-center">
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

      {selectedMovie && (
        <div className="fixed inset-0 z-50 bg-black text-white overflow-auto">
          <div className="relative">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-6 text-white text-3xl hover:text-red-500 z-10"
            >
              ✖
            </button>

            {/* Trailer no topo - somente após clique */}
            <div className="w-full aspect-video bg-black flex items-center justify-center">
              {selectedMovie.trailerUrl ? (
                <TrailerPlayer trailerUrl={selectedMovie.trailerUrl} />
              ) : (
                <p className="text-gray-400">Trailer indisponível</p>
              )}
            </div>

            {/* Conteúdo abaixo */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Capa reduzida */}
                <div className="mb-4 md:mb-0 w-full md:w-1/3 flex justify-center">
                  <Image
                    src={selectedMovie.cover}
                    alt="Capa"
                    width={210} // 30% menor
                    height={315}
                    className="rounded-lg shadow-md"
                  />
                </div>

                {/* Texto */}
                <div className="md:w-2/3 space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{selectedMovie.name}</h1>
                  <p className="text-base text-gray-300 italic">
                    Um filme emocionante que mistura ação, suspense e ficção científica, levando o
                    espectador a uma jornada entre realidade e sonhos.
                  </p>
                  <p className="text-lg leading-relaxed">{selectedMovie.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Componente separado para o trailer
function TrailerPlayer({ trailerUrl }: { trailerUrl: string }) {
  const [showIframe, setShowIframe] = useState(false);

  return showIframe ? (
    <iframe
      src={trailerUrl}
      title="Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-b-lg shadow-lg"
    />
  ) : (
    <button
    onClick={() => setShowIframe(true)}
    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 focus:ring-4 focus:ring-red-400 transition-all duration-300 px-6 py-3 text-white text-lg rounded shadow"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"
      />
    </svg>
    Assistir Trailer
  </button>
  
  
  );
}
