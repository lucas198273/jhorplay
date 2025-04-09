"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      {/* Botão flutuante com animação AOS e efeito de pulo */}
      <button
        onClick={() => setIsOpen(true)}
        data-aos="fade-up"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          background: "#007aff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          border: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          cursor: "pointer",
          animation: "bounce 2s infinite",
        }}
      >
        💬
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "500px",
              height: "80%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Botão fechar */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>

            {/* Iframe com o chat */}
            <iframe
              src="https://primary-production-da8c.up.railway.app/webhook/0db31976-55dc-439f-87d0-163cd3c1832a/chat"
              title="Chat de Suporte"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
};
