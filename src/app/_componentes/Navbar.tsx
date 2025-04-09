"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu mobile automaticamente ao voltar para o desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <header className="relative w-full bg-black" >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 h-16 relative z-10">
        {/* Links à esquerda */}
        <div className="hidden md:flex space-x-6" data-aos="fade-right" data-aos-delay="100">
          <a href="/filmes" className="text-white hover:text-gray-400 transition">
            Blog
          </a>
          <a href="/canais" className="text-white hover:text-gray-400 transition">
            Canais
          </a>
        </div>

        {/* Ícone do menu mobile */}
        <button
          id="menu-button"
          className="md:hidden text-white p-2 transition"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-aos="fade-down" data-aos-delay="150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo centralizada */}
        <div className="flex justify-center flex-1 md:flex-none" data-aos="fade-up" data-aos-delay="200">
          <a href="/logo">
            <img
              src="/assets/Logo-JhorPlay.png.webp"
              alt="logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Links à direita */}
        <div className="hidden md:flex space-x-6" data-aos="fade-left" data-aos-delay="100">
          <a href="/suporte" className="text-white hover:text-gray-400 transition">
            Suporte
          </a>
          <a href="/planos" className="text-white hover:text-gray-400 transition">
            Planos
          </a>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="bg-black bg-opacity-90 p-4 absolute top-16 w-full z-20 text-white shadow-md"
          data-aos="fade-down"
        >
          <ul className="space-y-4 text-center">
            <li>
              <a href="/filmes" className="block py-2 hover:text-gray-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/canais" className="block py-2 hover:text-gray-400 transition">
                Canais
              </a>
            </li>
            <li>
              <a href="/suporte" className="block py-2 hover:text-gray-400 transition">
                Suporte
              </a>
            </li>
            <li>
              <a href="/planos" className="block py-2 hover:text-gray-400 transition">
                Planos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
