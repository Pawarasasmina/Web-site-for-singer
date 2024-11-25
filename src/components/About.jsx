import { motion } from 'framer-motion';
import { FaMusic, FaHeadphones, FaGlobe, FaAward } from 'react-icons/fa';
import audience from '../assets/audiance.jpg'; // Import the image

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-primary to-secondary py-20 relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={audience}
          alt="Audience"
          className="w-full h-full object-cover blur-[4px] opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title and Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pb-12"
        >
          <h2 className="text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
            Discover the heart and soul behind <span className="gradient-text">Dilu Beats</span>. 
            Explore the journey, the sound, and the story that connects music to culture.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Content: The Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center">
                <FaMusic className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-semibold">The Journey</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              From humble beginnings in Sri Lanka to global recognition, my journey is a tale of passion and dedication. 
              With over 5 years in music production, I’ve created a fusion of traditional Sri Lankan melodies 
              and cutting-edge electronic beats that resonate worldwide.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-4"
            >
              <a
                href="#"
                className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transform transition-all duration-300"
              >
                Read My Story
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content: The Sound */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center">
                <FaHeadphones className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-semibold">The Sound</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Every beat I create tells a story, blending the vibrant essence of Sri Lankan culture with 
              innovative electronic elements. My music connects generations, bridging traditional rhythms 
              with modern creativity for a one-of-a-kind listening experience.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-4"
            >
              <a
                href="https://open.spotify.com/artist/01O8OueZDiqUJjOu7XPb4t"
                className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transform transition-all duration-300"
              >
                Listen to My Music
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Achievements Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-6 rounded-lg text-center"
          >
            <FaGlobe className="text-4xl text-accent mb-4" />
            <h4 className="text-2xl font-bold">Global Reach</h4>
            <p className="text-gray-300 leading-relaxed">
              My beats have reached listeners in over 20+ countries, connecting cultures through music.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-6 rounded-lg text-center"
          >
            <FaAward className="text-4xl text-accent mb-4" />
            <h4 className="text-2xl font-bold">Awards & Recognition</h4>
            <p className="text-gray-300 leading-relaxed">
              Winner of the Electronic Music Award 2023 for innovation in blending traditional and modern sounds.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="glass-effect p-6 rounded-lg text-center"
          >
            <FaMusic className="text-4xl text-accent mb-4" />
            <h4 className="text-2xl font-bold">100+ Tracks</h4>
            <p className="text-gray-300 leading-relaxed">
              Over 100 professionally crafted tracks available across platforms, each telling a unique story.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
