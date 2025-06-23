import { Headphones, BookOpen, Users, Volume2 } from "lucide-react";

const additionalServices = [
  {
    icon: Volume2,
    title: "Voice Over Demo (Full Production)",
    description: "Complete voice over demo reel production with professional editing and sound design.",
    price: "Custom Quote"
  },
  {
    icon: Headphones,
    title: "Custom Sound Design",
    description: "Bespoke sound design for films, games, and multimedia projects with creative audio solutions.",
    price: "Custom Quote"
  },
  {
    icon: BookOpen,
    title: "Longform Television Mixes",
    description: "Professional mixing for television series, documentaries, and extended format content.",
    price: "Custom Quote"
  },
  {
    icon: BookOpen,
    title: "Audiobook Recording",
    description: "Professional audiobook recording with high-quality narration and post-production services.",
    price: "Custom Quote"
  },
  {
    icon: Users,
    title: "Full Service Voice Casting",
    description: "Complete voice casting services to find the perfect voice talent for your project.",
    price: "Custom Quote"
  }
];

export default function AdditionalServicesSection() {
  return (
    <section className="py-16 studio-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-studio-blue bg-opacity-10 rounded-full mb-6">
            <span className="text-studio-blue text-sm font-semibold uppercase tracking-wider">Additional Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            MORE <span className="text-studio-blue">SPECIALIZED</span> SERVICES
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-studio-blue transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-studio-blue/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-studio-blue text-3xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={36} />
                    </div>
                    <div className="text-right">
                      <div className="text-studio-gold font-bold text-sm">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold mb-3 text-white group-hover:text-studio-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}