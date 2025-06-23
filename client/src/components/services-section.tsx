import { Mic, Sliders, Disc, Music, Podcast, Film } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Recording",
    description: "Professional multi-track recording with state-of-the-art equipment and acoustically treated rooms.",
    price: "Starting at $150/hour"
  },
  {
    icon: Sliders,
    title: "Mixing",
    description: "Expert mixing services to balance and enhance your recordings with professional grade plugins.",
    price: "Starting at $200/song"
  },
  {
    icon: Disc,
    title: "Mastering",
    description: "Final polish and optimization for streaming platforms, vinyl, and digital distribution.",
    price: "Starting at $100/song"
  },
  {
    icon: Music,
    title: "Production",
    description: "Full music production services including arrangement, instrumentation, and creative direction.",
    price: "Starting at $500/song"
  },
  {
    icon: Podcast,
    title: "Podcast Production",
    description: "Complete podcast production including recording, editing, and post-production services.",
    price: "Starting at $75/hour"
  },
  {
    icon: Film,
    title: "Sound Design",
    description: "Custom sound design and audio post-production for film, games, and multimedia projects.",
    price: "Custom Pricing"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 studio-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bcd4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-studio-blue bg-opacity-10 rounded-full mb-6">
            <span className="text-studio-blue text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            PROFESSIONAL <span className="text-studio-blue">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From recording to mastering, we provide comprehensive music production services to bring your vision to life with industry-leading quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-studio-blue transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-studio-blue/20"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-studio-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-studio-blue text-4xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={48} />
                    </div>
                    <div className="text-right">
                      <div className="text-studio-gold font-bold text-lg">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-studio-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <button className="w-full py-3 bg-studio-blue/10 border border-studio-blue/30 rounded-lg text-studio-blue font-semibold hover:bg-studio-blue hover:text-black transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-studio-blue to-transparent w-20"></div>
            <span className="text-gray-400 font-medium">Ready to get started?</span>
            <div className="h-px bg-gradient-to-r from-transparent via-studio-blue to-transparent w-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
