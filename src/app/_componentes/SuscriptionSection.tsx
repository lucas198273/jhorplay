export function SubscriptionSection() {
    return (
      <section className="relative py-16 text-white bg-black">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Texto */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">ASSINAR AGORA</h2>
            <p className="text-lg mb-6">A melhor lista IPTV com teste grátis do Brasil.<br/> Assista a todos os seus canais de TV e streaming preferidos com qualidade e estabilidade.</p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg">ASSINAR AGORA</button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg">TESTE GRÁTIS</button>
            </div>
          </div>
  
          {/* Imagem */}
          <div className="lg:w-1/2 flex justify-center">
            <img src="/assets/baner-thelast.jpeg" alt="baner" className="w-full max-w-md rounded-lg shadow-lg border-4 border-white" />
          </div>
        </div>
      </section>
    );
  }