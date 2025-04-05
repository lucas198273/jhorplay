export function VantagesSectionJhor() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-10">VANTAGENS</h2>

        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Suporte 24/7</h3>
            <p className="text-gray-200">
              Nossa equipe está sempre de prontidão para te auxiliar no que for preciso em todo o processo: compra, renovação e suporte.
            </p>
          </div>

          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Acesso imediato à sua lista IPTV</h3>
            <p className="text-gray-200">
              Imagem e som de alta qualidade, canais IPTV com sistema anti-travas e funcionamento excepcional em todas as conexões.
            </p>
          </div>
        </div>

        <button className="mt-10 bg-white text-blue-800 hover:bg-gray-200 py-3 px-6 rounded text-lg font-bold">
          ASSINAR AGORA
        </button>
      </div>
    </section>
  );
}
