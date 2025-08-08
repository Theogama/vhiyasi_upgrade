import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-20 mt-20">
        <div className="container-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" className="text-white font-bold text-lg tracking-wider">
            <img src="/src/assets/logo.png" alt="logo" width={135} height={135}/>
          </a>

          {/* Menu Items */}
          <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
            <li><a href="#home" className="hover:text-accent transition-colors">HOME</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">ABOUT</a></li>
            
            <li><a href="#portfolio" className="hover:text-accent transition-colors">PORTFOLIO</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">CONTACT</a></li>
          </ul>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white hover:text-accent transition-colors">
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center justify-center pt-16 sm:pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Geometric Overlay */}
        <div className="absolute inset-0 geometric-overlay opacity-40" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 hero-pattern opacity-10" />

        {/* Content */}
        <div className="relative z-10 text-center container-padding max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="heading-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">DESIGN BRILIANCE</span>
              <span className="block text-accent">UNLEASHED</span>
            </h1>

            <div className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              <p className="mb-2 leading-relaxed">
                ARCHITECTURAL <span className="text-accent">DESIGN</span> | INTERIOR <span className="text-accent">DESIGN</span> | CONSTRUCTION
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8">
              <a
                href="#portfolio"
                className="bg-accent text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
              >
                VIEW PORTFOLIO
              </a>
              <a
                href="#contact"
                className="border border-white text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs sm:text-sm tracking-wider">SCROLL</span>
            <div className="w-px h-6 sm:h-8 bg-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
