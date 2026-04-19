function Highlights() {
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Design revolucionário
          </h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi cuidadosamente pensado para oferecer a melhor experiência.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              src="../src/img/titanium-design.jpg"
              className="w-full rounded-2xl mb-4"
              alt="Design revolucionário"
            />
            <h3 className="font-bold mb-2 text-3xl">
              Titânio Premium
            </h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              src="../src/img/ios-feature.jpg"
              className="w-full rounded-2xl mb-4"
              alt="Recursos do iOS"
            />
            <h3 className="font-bold mb-2 text-3xl">
              iOS 26
            </h3>
            <p className="text-gray-300">
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>

        </div>
            <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone.</p>
                <img className="w-full rounded-2xl mb-4" src="../src/img/chip-a18-pro.jpg" alt="A18 Pro" />

                <ul className="space-y-3 texyt-gray-300 list-disc list-inside">
                    <li>CPU 20% mais rápida</li>
                    <li>GPU 25% mais eficiente</li>
                    <li>Natural Engine com 16 núcleos</li>
                    <li>Ray tracing acelerador por hardware</li>
                </ul>
            </div>

            <div id="camera" className="text-center">
              <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>
              <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-4">48MB</div>
                <h4 className="text-xl font-semibold mb-2">Principal</h4>
                <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
              </div>
                <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                <div className="text-4xl font-bold text-orange-500 mb-4">12MB</div>
                <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                <p className="text-gray-400">Campo de visão de 120 graus com modo noturno</p>
              </div>
                <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-4">12MB</div>
                <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
              </div>


              </div>

            </div>

      </div>
    </section>
  );
}

export default Highlights;