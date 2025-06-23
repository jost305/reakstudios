import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The team at Recond transformed our rough demos into a professional-sounding album. Their attention to detail and creative input was invaluable.",
    author: "Jake Williams",
    band: "The Midnight Sons",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"
  },
  {
    id: 2,
    quote: "Working with Recond was an incredible experience. They understood our vision and helped us achieve a sound we never thought possible.",
    author: "Lisa Martinez",
    band: "Solo Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"
  },
  {
    id: 3,
    quote: "Professional, efficient, and incredibly talented. Recond delivered exactly what we needed for our album release.",
    author: "David Kim",
    band: "Electric Pulse",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-studio-blue/5 via-cyan-400/3 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Refined header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <span className="text-studio-blue text-sm font-medium tracking-[0.25em] uppercase">Client Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight mb-6 leading-tight">
            <span className="text-white">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-studio-blue to-cyan-300 bg-clip-text text-transparent">Clients Say</span>
          </h2>
        </div>
        
        {/* Modern testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`group relative ${index === 1 ? 'lg:mt-8' : index === 2 ? 'lg:mt-16' : ''}`}>
              <div className="p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-3xl hover:border-studio-blue/20 transition-all duration-500 hover:-translate-y-2">
                {/* Quote mark */}
                <div className="w-12 h-12 bg-gradient-to-br from-studio-blue/20 to-cyan-400/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-studio-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-4 h-4" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image}
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-studio-blue text-sm font-medium">{testimonial.band}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
