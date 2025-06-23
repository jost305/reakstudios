import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  projectDetails: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    serviceType: "",
    preferredDate: "",
    projectDetails: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        serviceType: "",
        preferredDate: "",
        projectDetails: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "8, Kole Osho way. Abule Oko road,\nMagboro, Ogun state, Nigeria"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 701 924 6326"
    },
    {
      icon: Mail,
      title: "Email",
      content: "reakstudios@hotmail.com"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      content: "Monday - Saturday\n8:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-950 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-studio-blue/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Contemporary header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-studio-blue rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium tracking-wide">LET'S COLLABORATE</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 leading-tight">
            <span className="text-white">Get In</span>
            <br />
            <span className="bg-gradient-to-r from-studio-blue via-cyan-300 to-blue-200 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to enhance your film's audio? Let's discuss your audio post-production needs and bring your vision to life with our specialized services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Modern Contact Form */}
          <div className="relative">
            <div className="p-10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl">
              <h3 className="text-3xl font-semibold text-white mb-8">Request Audio Services</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Full Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400 rounded-xl h-12 focus:border-studio-blue focus:ring-studio-blue/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400 rounded-xl h-12 focus:border-studio-blue focus:ring-studio-blue/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Service Type</label>
                  <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10 rounded-xl">
                      <SelectItem value="stereo-mix">Stereo Mix to Picture</SelectItem>
                      <SelectItem value="surround-mix">Surround Mix to Picture</SelectItem>
                      <SelectItem value="adr">ADR Recording & Editing</SelectItem>
                      <SelectItem value="voice-over">Voice Over Recording/Editing</SelectItem>
                      <SelectItem value="animation-vo">Animation VO</SelectItem>
                      <SelectItem value="voice-demo">Voice Over Demo (Full Production)</SelectItem>
                      <SelectItem value="music-scoring">Music Scoring</SelectItem>
                      <SelectItem value="sound-design">Custom Sound Design</SelectItem>
                      <SelectItem value="tv-mix">Longform Television Mixes</SelectItem>
                      <SelectItem value="audiobook">Audiobook Recording</SelectItem>
                      <SelectItem value="voice-casting">Full Service Voice Casting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Preferred Date</label>
                  <Input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="bg-white/5 border-white/10 text-white rounded-xl h-12 focus:border-studio-blue focus:ring-studio-blue/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Project Details</label>
                  <Textarea
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 rounded-xl focus:border-studio-blue focus:ring-studio-blue/20"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-studio-blue to-cyan-400 hover:from-cyan-400 hover:to-studio-blue text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-studio-blue/25"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Modern Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">Studio Information</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-studio-blue/20 to-cyan-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-studio-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Modern Studio Image */}
            <div className="relative rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Studio interior" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Our Studio</h4>
                <p className="text-gray-200">Professional audio post-production facility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
