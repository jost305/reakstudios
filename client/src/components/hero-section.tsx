import { Play, Headphones, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="font-display text-5xl md:text-7xl font-black mb-6 text-white">
          PROFESSIONAL
          <span className="text-studio-blue block">RECORDING</span>
          STUDIO
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          State-of-the-art recording facilities and expert music production services for artists, bands, and content creators.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            className="bg-studio-blue hover:bg-blue-400 text-black font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Play className="mr-2 h-5 w-5" />
            Book Studio Time
          </Button>
          <Button 
            onClick={scrollToPortfolio}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            <Headphones className="mr-2 h-5 w-5" />
            Listen to Our Work
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white h-8 w-8" />
      </div>
    </section>
  );
}
