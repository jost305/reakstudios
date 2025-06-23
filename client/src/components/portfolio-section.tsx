import AudioPlayer from "./audio-player";

const featuredTracks = [
  {
    id: 1,
    title: "Electric Nights",
    artist: "The Voltage Band",
    genre: "Rock • 2024",
    duration: "3:42",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  },
  {
    id: 2,
    title: "Midnight Dreams",
    artist: "Sarah Chen",
    genre: "Pop • 2024",
    duration: "4:18",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
  }
];

const recentProjects = [
  {
    id: 1,
    title: "Blue Note Sessions",
    artist: "Marcus Williams Quartet",
    genre: "Jazz",
    description: "Full album recording and mixing for this acclaimed jazz ensemble.",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    title: "Neon Pulse EP",
    artist: "DJ Synthwave",
    genre: "Electronic",
    description: "Electronic music production with custom sound design and mastering.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    title: "Wandering Roads",
    artist: "Emma Thompson",
    genre: "Folk",
    description: "Intimate acoustic album with live room recording techniques.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Ultra-modern background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-studio-blue/8 via-cyan-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/5 via-studio-blue/8 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Modern header design */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-studio-blue/20 to-cyan-400/10 rounded-full mb-8">
            <div className="w-8 h-8 bg-studio-blue rounded-lg"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
            <span className="text-white">Our</span>
            <br />
            <span className="bg-gradient-to-r from-studio-blue via-cyan-300 to-blue-200 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the quality and creativity that defines our audio post-production work across film, television, and media.
          </p>
        </div>
        
        {/* Featured audio players with modern design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {featuredTracks.map((track) => (
            <div key={track.id} className="group">
              <div className="p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl hover:border-studio-blue/30 transition-all duration-500">
                <AudioPlayer track={track} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Modern project showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                <img 
                  src={project.image}
                  alt="Project thumbnail" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Modern overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-studio-blue/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Genre tag */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.genre === 'Jazz' ? 'bg-studio-blue/20 text-studio-blue border border-studio-blue/30' :
                    project.genre === 'Electronic' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                    'bg-green-500/20 text-green-400 border border-green-400/30'
                  }`}>
                    {project.genre}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-studio-blue transition-colors duration-300">{project.title}</h3>
                <p className="text-studio-blue text-sm font-medium">{project.artist}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
