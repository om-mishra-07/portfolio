import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleField from './ParticleField';

const titleVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const taglineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 0.9, ease: 'easeOut' },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const handleScrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle background */}
      <ParticleField />

      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div
          className="absolute -top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent 60%)' }}
        />
      </div>

      {/* Radial grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative text-center px-6 max-w-5xl mx-auto"
        style={{ y, opacity, scale, zIndex: 3 }}
      >
        {/* Small tag line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-white/60 mb-8 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Portfolio 2025
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        </motion.div>

        {/* Main name */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.9] tracking-[-0.04em] text-white mb-4"
        >
          Om
          <br />
          <span className="gradient-text">Mishra</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-[clamp(1.1rem,3vw,1.6rem)] font-light text-white/50 tracking-wide mt-6 mb-3"
        >
          Building Intelligent Systems
        </motion.p>

        {/* Roles */}
        <motion.p
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base text-white/35 font-medium tracking-[0.15em] uppercase"
        >
          Technical Product Manager&nbsp;&nbsp;·&nbsp;&nbsp;AI/ML Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Full Stack Developer
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <button
            onClick={() => handleScrollTo('#work')}
            className="group relative glass px-8 py-4 rounded-full text-white font-medium text-sm tracking-wide overflow-hidden hover:border-white/30 transition-all duration-300 hover:scale-105 min-w-[160px]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => handleScrollTo('#contact')}
            className="group px-8 py-4 rounded-full font-medium text-sm tracking-wide text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 min-w-[160px]"
          >
            Contact
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
