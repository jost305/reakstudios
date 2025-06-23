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
    <section id="services" className="py-20 studio-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            OUR <span className="text-studio-blue">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From recording to mastering, we provide comprehensive music production services to bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="studio-gray p-8 rounded-xl hover:studio-light transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-studio-blue text-4xl mb-6 group-hover:animate-float">
                  <Icon size={48} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="text-studio-gold font-semibold">{service.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
