import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Import framer-motion for animation
import logo from '../assets/logo.jpg';  // Make sure the path to the logo is correct

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'music' },
    { id: 3, link: 'about' },
    { id: 4, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="w-full h-full bg-transparent">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" /> {/* Adjust size as needed */}
          </div>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-12 flex-grow justify-center">
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                className="text-gray-300 hover:text-accent cursor-pointer capitalize text-xl duration-200 transform hover:scale-110 relative"
                initial={{ opacity: 0, y: -20 }}  // Start from above the screen
                animate={{ opacity: 1, y: 0 }}    // Animate into place
                transition={{ duration: 0.5, delay: id * 0.2 }} // Add delay for each item
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger Icon */}
          <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-300 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* Mobile Menu */}
          {nav && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50">
              {/* Close Button */}
              <div className="absolute top-6 right-6 text-gray-300 cursor-pointer" onClick={() => setNav(false)}>
                <FaTimes size={30} />
              </div>

              <motion.ul
                className="h-screen flex flex-col justify-center items-center gap-12"
                initial={{ opacity: 0, y: -100 }}  // Start from above the screen
                animate={{ opacity: 1, y: 0 }}    // Animate into view
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              >
                {links.map(({ id, link }) => (
                  <motion.li
                    key={id}
                    className="text-3xl text-gray-300 hover:text-accent cursor-pointer capitalize"
                    whileHover={{ scale: 1.1 }}  // Scale up on hover
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
