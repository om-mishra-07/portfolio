import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const words = ['I', 'build', 'scalable', 'products', 'powered', 'by', 'AI.'];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const bioLines = [
    {
      bold: 'Technical Product Manager',
      text: ' at Darwinbox — where I ship AI-powered HR products used by 1M+ employees.',
    },
    {
      bold: 'AI/ML Engineer',
      text: ' building vision systems, NLP pipelines, and real-time intelligent applications.',
    },
    {
      bold: 'Blockchain Developer',
      text: ' who shipped decentralized systems at Filecoin hackathons.',
    },
    {
      bold: 'CS Graduate',
      text: ' from BITS Pilani — the breeding ground of India\'s sharpest engineers.',
    },
  ];

  return (
    <section id="about" className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] text-indigo-400 uppercase mb-8"
        >
          01 — Who I Am
        </motion.p>

        {/* Word-by-word animated headline */}
        <div ref={ref} className="mb-16">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight tracking-tight text-white flex flex-wrap gap-x-4 gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={word === 'AI.' ? 'gradient-text' : ''}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Bio cards — staggered */}
        <div className="grid md:grid-cols-2 gap-4">
          {bioLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass p-6 rounded-2xl hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-8 h-px bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 group-hover:w-16 transition-all duration-500" />
              <p className="text-base text-white/70 leading-relaxed">
                <span className="text-white font-semibold">{line.bold}</span>
                {line.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-12 mt-16 pt-16 border-t border-white/5"
        >
          {[
            { number: '3+', label: 'Years of Experience' },
            { number: '10+', label: 'Projects Shipped' },
            { number: '1M+', label: 'Users Impacted' },
            { number: '4', label: 'Domains Mastered' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-[clamp(2rem,4vw,3rem)] font-black gradient-text leading-none">{stat.number}</p>
              <p className="text-sm text-white/40 mt-1 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
