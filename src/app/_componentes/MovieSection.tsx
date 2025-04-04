"use client";
import { useState } from "react";
import Image from "next/image";

interface Movie {
  name: string;
  description: string;
  image: string;
}

const movies: Movie[] = [
  {
    name: "Inception",
    description: "Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos...",
    image: "/assets/f1.png"
  }, {
    name: "Inception",
    description: "Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos...",
    image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  },
  {
    name: "Interstellar",
    description: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
     image: "/assets/f1.png"
  }
];

export function MovieSection() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);


 
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Catálogo de Filmes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <Image
                src={movie.image}
                alt={movie.name}
                width={300}
                height={400}
                className="object-cover w-full h-56 sm:h-64"
              />
              <div className="p-4 text-white flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{movie.name}</h3>
                <button
                  onClick={() => setSelectedMovie(movie)}
                  className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Ver Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMovie && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto text-white relative">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✖
            </button>
            <Image src={selectedMovie.image} alt={selectedMovie.name} width={300} height={400} className="rounded w-full" />
            <h3 className="text-2xl mt-4 font-semibold">{selectedMovie.name}</h3>
            <p className="mt-2">{selectedMovie.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

