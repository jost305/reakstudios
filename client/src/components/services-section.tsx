import { Mic, Sliders, Disc, Music, Podcast, Film } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Stereo Mix to Picture",
    description: "Professional stereo mixing synchronized to picture for film and television productions.",
    price: "Custom Quote"
  },
  {
    icon: Sliders,
    title: "Surround Mix to Picture",
    description: "Immersive surround sound mixing for cinema and broadcast television projects.",
    price: "Custom Quote"
  },
  {
    icon: Mic,
    title: "ADR Recording & Editing",
    description: "Automated Dialogue Replacement recording and editing services for film and television.",
    price: "Custom Quote"
  },
  {
    icon: Podcast,
    title: "Voice Over Recording/Editing",
    description: "Professional voice over recording and editing for commercials, documentaries, and media.",
    price: "Custom Quote"
  },
  {
    icon: Music,
    title: "Animation VO",
    description: "Specialized voice over recording for animated films, series, and digital content.",
    price: "Custom Quote"
  },
  {
    icon: Disc,
    title: "Music Scoring",
    description: "Custom music composition and scoring for films, television, and multimedia projects.",
    price: "Custom Quote"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-studio-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Modern header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-studio-blue rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium tracking-wide">PROFESSIONAL SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Audio Post
            </span>
            <br />
            <span className="bg-gradient-to-r from-studio-blue to-cyan-400 bg-clip-text text-transparent">
              Production
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Transform your vision with cutting-edge audio post-production services. From stereo mixing to surround sound, 
            we bring stories to life through exceptional audio.
          </p>
        </div>
        
        {/* Modern grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-all duration-700 hover:-translate-y-1"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-studio-blue/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>
                
                <div className="relative">
                  {/* Icon container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-studio-blue/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={32} className="text-studio-blue" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-studio-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-studio-blue font-semibold">{service.price}</span>
                    <button className="text-gray-400 hover:text-studio-blue transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
