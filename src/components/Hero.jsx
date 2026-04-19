function Hero() {
    return (
        // Mantemos o h-screen para ocupar a tela toda
        <section className="relative h-screen overflow-hidden bg-black flex flex-col">
            
            {/* O container da imagem agora respeita o top-18 da sua Navbar */}
            <div className="absolute top-18 right-0 left-0 bottom-0 z-0">
                
                <img 
                    src="../src/img/hero.jpg" 
                    alt="Hero" 
                    // Trocamos object-cover por object-contain
                    className="w-full h-full object-contain opacity-90" 
                />

                {/* Overlay de gradiente - Ajustado para cobrir a imagem corretamente */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none"></div>
            </div>

            {/* Ícone de scroll - Adicionei -translate-x-1/2 para centralizar de verdade */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </section>
    );
}

export default Hero;