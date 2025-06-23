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
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative">
      {/* Modern floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-studio-blue/10 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-studio-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Minimalist header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-studio-blue text-sm font-medium tracking-[0.2em] uppercase">Extended Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            <span className="text-white">Specialized</span>
            <br />
            <span className="bg-gradient-to-r from-studio-blue to-cyan-300 bg-clip-text text-transparent font-normal">Audio Services</span>
          </h2>
        </div>
        
        {/* Modern card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-6 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-studio-blue/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-studio-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Minimal icon */}
                  <div className="w-12 h-12 bg-studio-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-studio-blue/20 transition-all duration-300">
                    <Icon size={24} className="text-studio-blue" />
                  </div>
                  
                  {/* Clean typography */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-studio-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Subtle price */}
                  <div className="text-xs text-studio-blue/70 font-medium">{service.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}