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
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (2).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (3).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (4).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (5).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (6).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (7).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (8).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (9).webp",
    cover: "/assets/cover-inception.webp",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },{
    name: "Inception",
    description: "A história de um ladrão que invade os sonhos para roubar segredos.",
    image: "/assets/img (10).webp",
    cover: "/assets/cover-inception.webp",
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

            {/* Banner */}
            <div className="w-full h-96 sm:h-[500px] relative">
              <Image
                src={selectedMovie.image}
                alt={selectedMovie.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
            </div>

            {/* Conteúdo */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Capa */}
                <div className="mb-4 md:mb-0 md:w-1/3">
                  <Image
                    src={selectedMovie.cover}
                    alt="Capa"
                    width={300}
                    height={450}
                    className="rounded-lg shadow-md mx-auto md:mx-0"
                  />
                </div>

                {/* Descrição e Trailer */}
                <div className="md:w-2/3 space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{selectedMovie.name}</h1>
                  <p className="text-lg leading-relaxed">{selectedMovie.description}</p>

                  <div className="aspect-video w-full mt-4">
                    <iframe
                      src={selectedMovie.trailerUrl}
                      title="Trailer"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
