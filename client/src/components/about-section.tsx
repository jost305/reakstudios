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
    <section id="about" className="py-20 studio-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-studio-blue bg-opacity-10 rounded-full mb-6">
            <span className="text-studio-blue text-sm font-semibold uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            ABOUT <span className="text-studio-blue">REAKSTUDIOS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            With over 15 years of experience in music production, we've worked with artists across all genres to create unforgettable recordings. Our state-of-the-art facility combines cutting-edge technology with artistic expertise.
          </p>
        </div>
        
        {/* Studio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-studio-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt="Team member" 
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-gray-700 group-hover:border-studio-blue transition-colors duration-300"
                />
                <div className="absolute inset-0 w-48 h-48 rounded-full mx-auto bg-studio-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-studio-blue font-semibold mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm max-w-xs mx-auto mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {member.social.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      className="text-gray-400 hover:text-studio-blue transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
