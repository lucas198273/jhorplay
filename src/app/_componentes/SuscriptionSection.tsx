export function SubscriptionSection() {
  return (
    <section className="relative py-16 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Texto */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-bold">ASSINAR AGORA</h2>
          <p className="text-lg leading-relaxed">
            A melhor lista IPTV com teste grátis do Brasil. <br />
            Assista a todos os seus canais de TV e streaming preferidos com qualidade e estabilidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        
          </div>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/assets/bgus.jpeg"
            alt="Banner promocional IPTV"
            className="w-full max-w-md rounded-lg shadow-lg border-4 border-white"
          />
        </div>

      </div>
    </section>
  );
}
