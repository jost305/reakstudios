import { Facebook, Instagram, Youtube, Music } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Youtube, url: "#" },
    { icon: Music, url: "#" }
  ];

  const services = [
    "Recording",
    "Mixing", 
    "Mastering",
    "Production",
    "Sound Design"
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
    { label: "Booking", href: "#contact" },
    { label: "FAQ", href: "#" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="studio-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-bold text-studio-blue mb-4">ReakStudios</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional recording studio and music production services in the heart of Nashville. Creating exceptional music since 2009.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    className="studio-gray hover:bg-studio-blue hover:text-black p-3 rounded-lg transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-studio-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => link.href.startsWith("#") ? scrollToSection(link.href.slice(1)) : null}
                    className="hover:text-studio-blue transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Recond Studio. All rights reserved. | 
            <a href="#" className="hover:text-studio-blue transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-studio-blue transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
