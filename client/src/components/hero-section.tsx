import { useState, useEffect } from "react";
import { Play, Headphones, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "FILM AUDIO",
    subtitle: "POST PRODUCTION",
    accent: "SPECIALISTS",
    description: "At Reak Studios, we specialize in enhancing and finalizing audio elements for films, ensuring a captivating auditory experience for audiences."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "VOICE OVER &",
    subtitle: "ADR RECORDING",
    accent: "EXCELLENCE",
    description: "Professional voice over recording, ADR sessions, and animation VO services with full production capabilities."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "CUSTOM SOUND",
    subtitle: "DESIGN &",
    accent: "SCORING",
    description: "Music scoring, custom sound design, and longform television mixes tailored to your project's unique needs."
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Auto-slide every 5 seconds
    const slideInterval = setInterval(nextSlide, 5000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 hero-slide ${
            index === currentSlide ? 'active' : 'inactive'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-studio-blue transition-colors duration-300 opacity-70 hover:opacity-100"
      >
        <ChevronLeft size={48} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-studio-blue transition-colors duration-300 opacity-70 hover:opacity-100"
      >
        <ChevronRight size={48} />
      </button>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-white transform transition-all duration-1000">
          {heroSlides[currentSlide].title}
          <span className="text-studio-blue block">{heroSlides[currentSlide].subtitle}</span>
          {heroSlides[currentSlide].accent}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-300">
          {heroSlides[currentSlide].description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500">
          <Button 
            onClick={scrollToContact}
            className="bg-studio-blue hover:bg-blue-400 text-black font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Play className="mr-2 h-5 w-5" />
            Request Audio Services
          </Button>
          <Button 
            onClick={scrollToPortfolio}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            <Headphones className="mr-2 h-5 w-5" />
            Our Portfolio
          </Button>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-studio-blue scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white h-8 w-8" />
      </div>
    </section>
  );
}
