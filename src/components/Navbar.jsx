import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY); // Track previous scroll position

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'music' },
    { id: 3, link: 'about' },
    { id: 4, link: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine navbar visibility based on scroll direction
      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed w-full z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full h-full bg-transparent">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-12 flex-grow justify-center">
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                className="text-gray-300 hover:text-accent cursor-pointer capitalize text-xl duration-200 transform hover:scale-110 relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.2 }}
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
              <motion.ul
                className="h-screen flex flex-col justify-center items-center gap-12"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              >
                {links.map(({ id, link }) => (
                  <motion.li
                    key={id}
                    className="text-3xl text-gray-300 hover:text-accent cursor-pointer capitalize"
                    whileHover={{ scale: 1.1 }}
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
