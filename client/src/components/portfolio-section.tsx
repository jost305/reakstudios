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
    <section id="portfolio" className="py-20 studio-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            OUR <span className="text-studio-blue">PORTFOLIO</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Listen to some of our recent work and discover the quality that sets us apart.
          </p>
        </div>
        
        {/* Featured Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredTracks.map((track) => (
            <AudioPlayer key={track.id} track={track} />
          ))}
        </div>
        
        {/* Recent Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={project.image}
                  alt="Project thumbnail" 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-studio-blue text-black p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  project.genre === 'Jazz' ? 'bg-studio-blue text-black' :
                  project.genre === 'Electronic' ? 'bg-studio-gold text-black' :
                  'bg-green-500 text-black'
                }`}>
                  {project.genre}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{project.artist}</p>
              <p className="text-gray-500 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
