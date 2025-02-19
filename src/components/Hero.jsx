import { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import cover from '../assets/cover.jpg';
import cover2 from '../assets/mobilecover.jpg';  // Import the second image
import { FaYoutube, FaFacebook, FaInstagram, FaVolumeUp, FaVolumeMute ,FaPlay } from 'react-icons/fa';
import bgmusic from '../assets/numbawa-soya.mp3';

const Hero = () => {
  const [audio] = useState(new Audio(bgmusic));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true; // Enable looping
    audio.volume = 0.5; // Set initial volume
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleAudio = async () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play(); // Try to play
        setIsPlaying(true);
      } catch (error) {
        console.error("Playback failed:", error);
      }
    }
  };
  return (
    <div
      name="home"
      className="relative h-screen w-full bg-gradient-to-b from-primary to-secondary overflow-hidden"
      style={{
        backgroundImage: `url(${cover})`, // Default background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* For mobile view, use cover2 as the background */}
      <div className="absolute inset-0 bg-cover md:hidden" style={{ backgroundImage: `url(${cover2})` }}></div>

      {/* Fading effect overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-accent rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent-light rounded-full filter blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="gradient-text text-2xl font-semibold"
          >
            Welcome to the world of
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-7xl sm:text-8xl font-bold"
          >
            Dilu <span className="gradient-text">Beats</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-lg max-w-2xl"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            Sri Lankan music producer and artist creating unique beats and melodies.
            Blending traditional Sri Lankan sounds with modern electronic music.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 pt-4"
          >
            <a 
              href="https://open.spotify.com/artist/01O8OueZDiqUJjOu7XPb4t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent-light rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
            >
              Listen Now
            </a>

            <Link 
              to="contact" 
              smooth 
              duration={500}
              className="px-8 py-4 glass-effect rounded-full text-white font-semibold border-2 border-black hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
        <button
        onClick={toggleAudio}
        className="absolute bottom-6 right-6 p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-80 transition-all"
      >
        {isPlaying ? <FaVolumeUp size={24} /> : <FaPlay size={24} />}
      </button>
{/* Social Media Links */}
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  }}
  className="absolute top-40 right-6 flex flex-col items-center gap-8"
>
  <motion.a
    href="https://www.youtube.com/@DILUBeats"
    target="_blank"
    rel="noopener noreferrer"
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}
    className="text-3xl text-red-600 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
  >
    <FaYoutube />
  </motion.a>
  <motion.a
    href="https://www.instagram.com/dilu.beats/"
    target="_blank"
    rel="noopener noreferrer"
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}
    className="text-3xl text-pink-500 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
  >
    <FaInstagram />
  </motion.a>
  <motion.a
    href="https://www.facebook.com/dilubeats/"
    target="_blank"
    rel="noopener noreferrer"
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}
    className="text-3xl text-blue-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
  >
    <FaFacebook />
  </motion.a>
</motion.div>


      </div>
    </div>
  );
};

export default Hero;
