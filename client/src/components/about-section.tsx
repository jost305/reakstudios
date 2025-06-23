import { Linkedin, Instagram, Twitter, Music } from "lucide-react";

const stats = [
  { value: "500+", label: "Albums Recorded" },
  { value: "200+", label: "Happy Artists" },
  { value: "15+", label: "Years Experience" },
  { value: "25+", label: "Industry Awards" }
];

const teamMembers = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "Head Engineer & Producer",
    bio: "15+ years experience working with Grammy-winning artists. Specializes in rock, pop, and electronic music production.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    social: [
      { icon: Linkedin, url: "#" },
      { icon: Instagram, url: "#" }
    ]
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Mixing Engineer",
    bio: "Award-winning mixing engineer known for her work in indie and alternative music. Expert in analog and digital workflows.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    social: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" }
    ]
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Mastering Engineer",
    bio: "Mastering specialist with releases on major labels. Expert in preparing music for streaming platforms and vinyl.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    social: [
      { icon: Linkedin, url: "#" },
      { icon: Music, url: "#" }
    ]
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-950 relative overflow-hidden">
      {/* Modern background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-studio-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyan-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Contemporary header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-studio-blue"></div>
            <span className="text-studio-blue text-sm font-medium tracking-[0.3em] uppercase">About Us</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-studio-blue"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
            <span className="text-white">Reak</span>
            <br />
            <span className="bg-gradient-to-r from-studio-blue via-cyan-400 to-blue-300 bg-clip-text text-transparent">Studios</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Reak Studios, we specialize in enhancing and finalizing audio elements for films, ensuring a captivating auditory experience for audiences.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Located in Magboro, Ogun State, Nigeria, we provide comprehensive audio post-production services that bring stories to life.
            </p>
          </div>
        </div>
        
        {/* Modern stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="text-6xl md:text-7xl font-light text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-studio-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Clean team section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto relative overflow-hidden rounded-2xl">
                  <img 
                    src={member.image}
                    alt="Team member" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-studio-blue font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.url} 
                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-studio-blue hover:bg-studio-blue/10 transition-all duration-300"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
