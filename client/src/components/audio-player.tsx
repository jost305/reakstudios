import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  image: string;
}

interface AudioPlayerProps {
  track: Track;
}

export default function AudioPlayer({ track }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would control actual audio playback here
    // For demo purposes, we'll just simulate progress
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 100);
    }
  };

  return (
    <div className="audio-player rounded-xl p-6 border border-gray-700">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={track.image}
          alt="Album artwork" 
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{track.title}</h3>
          <p className="text-gray-400">{track.artist}</p>
          <p className="text-sm text-studio-blue">{track.genre}</p>
        </div>
      </div>
      
      <div className="audio-controls flex items-center space-x-4">
        <button 
          onClick={togglePlay}
          className="text-studio-blue hover:text-blue-300 text-2xl"
        >
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </button>
        <div className="flex-1 bg-gray-600 rounded-full h-2 relative">
          <div 
            className="bg-studio-blue h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm text-gray-400">{track.duration}</span>
      </div>
    </div>
  );
}
