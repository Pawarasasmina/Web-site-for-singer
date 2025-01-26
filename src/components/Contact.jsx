import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs
import logo from '../assets/logo.jpg'; // Import logo image

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Function to handle form submission with EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_iz8zkta', // Replace with your EmailJS Service ID
        'template_a8saqoh', // Replace with your EmailJS Template ID
        e.target,
        'EKc3678tSlBIwABRF' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setModalMessage('Message sent successfully!');
          setIsModalOpen(true);
        },
        (error) => {
          setModalMessage('Failed to send message, please try again.');
          setIsModalOpen(true);
        }
      );
    e.target.reset(); // Clear the form
  };

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
  <div className="flex flex-col items-center text-gray-300 space-y-1">
    <div className="flex items-center gap-2">
      <FaPhoneAlt size={18} />
      <p>
        <a href="tel:+94707040004" className="hover:underline">
          (+94) 70 704 0004
        </a>
      </p>
    </div>
    <div className="flex items-center gap-2">
      <FaPhoneAlt size={18} />
      <p>
        <a href="tel:+94772172050" className="hover:underline">
          (+94) 77 217 2050
        </a>
      </p>
    </div>
  </div>
  <div className="flex items-center gap-2 text-gray-300">
    <FaEnvelope size={18} />
    <p>
      <a
        href="mailto:dilubeatss@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        dilubeatss@gmail.com
      </a>
    </p>
  </div>
</div>


          {/* Contact Form */}
          <form onSubmit={sendEmail} className="space-y-4 bg-secondary p-4 rounded-xl shadow-lg">
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="user_name" // EmailJS expects this field name
                className="w-full p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="user_email" // EmailJS expects this field name
                className="w-full p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                name="message" // EmailJS expects this field name
                rows="4"
                className="w-full p-3 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-accent to-accent-light rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Modal for Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-lg">
            <h3 className="text-lg font-bold mb-4">Notification</h3>
            <p className="text-gray-700 mb-6">{modalMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
