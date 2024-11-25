import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; // Import logo image

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-secondary to-primary py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center pb-6"
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Get in Touch</h2>
          <p className="text-gray-400 text-base">We'd love to hear from you! Let's make something great together.</p>
        </motion.div>

        {/* Two-Column Layout for Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Contact Info with Logo */}
          <div className="bg-secondary p-4 rounded-xl shadow-lg space-y-4 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img src={logo} alt="Dilu Beats Logo" className="w-20 h-20 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-accent">Dilu Beats Manager</h3>
            <div className="flex items-center gap-2 text-gray-300">
              <FaPhoneAlt size={18} />
              <p>(+94) 123 456 789</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaEnvelope size={18} />
              <p>manager@dilubeats.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-secondary p-4 rounded-xl shadow-lg">
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Your message..."
              />
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-accent to-accent-light rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
