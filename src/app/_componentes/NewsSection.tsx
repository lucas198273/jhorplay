export function NewsSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Aqui você encontra tudo sobre a JhorPlay e o mundo do IPTV!
        </h2>

        {/* Mobile: Rolagem lateral */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex space-x-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-blue-700 to-black p-6 rounded-lg shadow-lg text-white min-w-[80%] transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={`/public/assets/Nesws1.jpg${i}.jpg`}
                  alt="notícia"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {i === 1 && "Plano da Netflix ou IPTV: qual escolher?"}
                  {i === 2 && "Onde assistir jogo de futebol ao vivo grátis"}
                  {i === 3 && "10 motivos para assinar IPTV agora"}
                </h3>
                <p className="text-sm text-gray-400 italic mb-1">
                  {i === 1 && "03/04/2025 18:26"}
                  {i === 2 && "03/04/2025 08:29"}
                  {i === 3 && "02/04/2025 19:13"}
                </p>
                <p className="mb-4">
                  {i === 1 &&
                    "O plano da Netflix oferece acesso a produções exclusivas..."}
                  {i === 2 &&
                    "Se você é apaixonado por futebol, acompanhe cada partida..."}
                  {i === 3 &&
                    "Você já calculou quanto gasta com streaming?..."}
                </p>
                <a href="#" className="text-blue-400 hover:underline">
                  Leia Mais &gt;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-blue-700 to-black p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={`/assets/Nesws1.jpg${i}.jpg`}
                alt="notícia"
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {i === 1 && "Plano da Netflix ou IPTV: qual escolher?"}
                {i === 2 && "Onde assistir jogo de futebol ao vivo grátis"}
                {i === 3 && "10 motivos para assinar IPTV agora"}
              </h3>
              <p className="text-sm text-gray-400 italic mb-1">
                {i === 1 && "03/04/2025 18:26"}
                {i === 2 && "03/04/2025 08:29"}
                {i === 3 && "02/04/2025 19:13"}
              </p>
              <p className="mb-4">
                {i === 1 &&
                  "O plano da Netflix oferece acesso a produções exclusivas..."}
                {i === 2 &&
                  "Se você é apaixonado por futebol, acompanhe cada partida..."}
                {i === 3 &&
                  "Você já calculou quanto gasta com streaming?..."}
              </p>
              <a href="#" className="text-blue-400 hover:underline">
                Leia Mais &gt;
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded text-lg font-semibold">
            VER TODOS OS POSTS
          </button>
        </div>
      </div>
    </section>
  );
}
