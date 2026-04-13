import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? 'mt-3 max-w-4xl rounded-2xl glass border border-white/10 px-6 py-3'
            : 'max-w-7xl px-6 py-5'
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-white font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">OM</span>
            <span className="text-white/60 font-light ml-1">MISHRA</span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:ommishrawork@gmail.com"
            className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-px bg-white"
              animate={{ rotate: menuOpen ? 45 : 0, translateY: menuOpen ? 4 : 0 }}
            />
            <motion.span
              className="block w-5 h-px bg-white"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block w-5 h-px bg-white"
              animate={{ rotate: menuOpen ? -45 : 0, translateY: menuOpen ? -4 : 0 }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass mx-4 mt-2 rounded-2xl p-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-white text-lg font-medium block transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a
                  href="mailto:ommishrawork@gmail.com"
                  className="inline-flex items-center gap-2 mt-2 text-white/60 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Available for work
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
