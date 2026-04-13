import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI/ML Engineering',
    description: 'Computer vision, NLP, and intelligent systems that learn and adapt in real-time.',
    tags: ['PyTorch', 'TensorFlow', 'OpenCV', 'LLMs'],
    gradient: 'from-indigo-600/20 to-blue-600/10',
    accent: '#6366f1',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Full Stack Development',
    description: 'End-to-end web applications from pixel-perfect UIs to scalable backend APIs.',
    tags: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    gradient: 'from-violet-600/20 to-purple-600/10',
    accent: '#8b5cf6',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Product Management',
    description: 'Translating user needs into product roadmaps with data-driven decisions.',
    tags: ['Roadmapping', 'OKRs', 'Agile', 'Analytics'],
    gradient: 'from-fuchsia-600/20 to-pink-600/10',
    accent: '#a855f7',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Blockchain Systems',
    description: 'Decentralized applications and smart contracts on modern blockchain platforms.',
    tags: ['Solidity', 'Filecoin', 'IPFS', 'Web3.js'],
    gradient: 'from-cyan-600/20 to-teal-600/10',
    accent: '#06b6d4',
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] text-indigo-400 uppercase mb-8"
        >
          02 — What I Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight tracking-tight text-white mb-4"
        >
          Four domains.
          <br />
          <span className="gradient-text">One vision.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/40 mb-16 max-w-xl"
        >
          I operate at the intersection of technology and product — turning complex problems into elegant solutions.
        </motion.p>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`relative glass p-8 rounded-3xl overflow-hidden cursor-default group transition-all duration-300`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Glow dot */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: service.accent }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    background: `${service.accent}15`,
                    border: `1px solid ${service.accent}30`,
                    color: service.accent,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-white/50 leading-relaxed mb-6">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${service.accent}10`,
                        border: `1px solid ${service.accent}20`,
                        color: service.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
