import { motion } from 'framer-motion';
import { FaMusic, FaHeadphones, FaGlobe, FaAward } from 'react-icons/fa';
import audience from '../assets/audiance.jpg';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-primary to-secondary py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={audience}
          alt="Audience"
          className="w-full h-full object-cover blur-[4px] opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pb-12"
        >
          <h2 className="text-6xl font-bold gradient-text mb-6">
            About DILU Beats
          </h2>
          <p className="text-gray-300 text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
            Meet <span className="gradient-text">DILU Beats</span> — a trailblazer in Sri Lanka’s music scene. Known for his mastery of blending Pop, Hip-hop, and R&B Classic, DILU Beats creates music that transcends boundaries and touches hearts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
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
              Born as Ginthota Manawaduge Dileepa Madushan in Matara, Sri Lanka, DILU Beats began his musical journey with the single "Rathu Dethola." He rose to prominence with "Numba Ha," the most viewed Sinhala lyrics video on YouTube and the most streamed Sri Lankan track on Spotify in 2023.
            </p>
          </motion.div>

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
              DILU Beats’ music bridges generations by fusing Sri Lankan culture with modern electronic sounds. His innovative tracks connect listeners worldwide, offering a unique auditory experience.
            </p>
          </motion.div>
        </div>

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
              Recognized in over 160+ countries, DILU Beats has connected cultures through music.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-6 rounded-lg text-center"
          >
            <FaAward className="text-4xl text-accent mb-4" />
            <h4 className="text-2xl font-bold">Awards & Achievements</h4>
            <p className="text-gray-300 leading-relaxed">
            Awarded the YouTube Creator Award for surpassing 100,000 subscribers.
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
              With over 100 professional tracks, each piece showcases the essence of innovation and cultural heritage.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
