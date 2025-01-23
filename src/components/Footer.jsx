import { FaYoutube, FaFacebook, FaInstagram, FaSoundcloud } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary to-primary py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo and Tagline */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold gradient-text">Dilu Beats</h2>
            <p className="mt-2 text-gray-300">
              Crafting unique beats that resonate with the soul.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="#about" className="hover:text-accent transition-colors duration-300">About</a>
            <a href="#music" className="hover:text-accent transition-colors duration-300">Music</a>
            <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
            <a href="#blog" className="hover:text-accent transition-colors duration-300">Blog</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a 
              href="https://www.youtube.com/@DILUBeats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-red-500 transition-all duration-300"
            >
              <FaYoutube />
            </a>
            <a 
              href="https://www.facebook.com/dilubeats/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/dilu.beats/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-500 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.soundcloud.com/DiluBeats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-orange-500 transition-all duration-300"
            >
              <FaSoundcloud />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-600"></div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Dilu Beats. All rights reserved.</p>
          <p>
            Design and Development by <a href="https://www.neurioxit.systems/" className="hover:text-accent">neuriOx IT</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
