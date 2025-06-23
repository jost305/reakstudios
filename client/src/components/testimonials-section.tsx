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
    <section className="py-20 studio-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            WHAT OUR <span className="text-studio-blue">CLIENTS SAY</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="studio-gray p-8 rounded-xl border-l-4 border-studio-blue">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-studio-gold fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-studio-blue text-sm">{testimonial.band}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
