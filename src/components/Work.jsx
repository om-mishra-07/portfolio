import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Driver Detection System',
    tagline: 'Real-time distracted driver detection using computer vision',
    description:
      'A production-grade computer vision system that detects driver distraction in real-time using deep learning models. Achieves 94% accuracy with under 50ms inference time.',
    tags: ['Computer Vision', 'PyTorch', 'OpenCV', 'Real-time AI'],
    stat: '94%',
    statLabel: 'Detection Accuracy',
    gradient: 'from-indigo-900/80 via-black/60 to-black',
    accentColor: '#6366f1',
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="150" stroke="#6366f1" strokeWidth="1" />
        <circle cx="200" cy="200" r="100" stroke="#6366f1" strokeWidth="1" />
        <circle cx="200" cy="200" r="50" stroke="#6366f1" strokeWidth="1" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="#6366f1" strokeWidth="0.5" />
        <line x1="200" y1="50" x2="200" y2="350" stroke="#6366f1" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="8" fill="#6366f1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Decentralized Event Platform',
    tagline: 'Blockchain-based event system built in Filecoin hackathon',
    description:
      'A fully decentralized event ticketing and management platform built on Filecoin. NFT-based tickets, transparent pricing, and censorship-resistant event data storage.',
    tags: ['Filecoin', 'IPFS', 'Solidity', 'Web3'],
    stat: '1st',
    statLabel: 'Hackathon Placement',
    gradient: 'from-violet-900/80 via-black/60 to-black',
    accentColor: '#8b5cf6',
    bgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 400" fill="none">
        <polygon points="200,50 350,300 50,300" stroke="#8b5cf6" strokeWidth="1" fill="none" />
        <polygon points="200,100 300,275 100,275" stroke="#8b5cf6" strokeWidth="1" fill="none" />
        <polygon points="200,150 250,250 150,250" stroke="#8b5cf6" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="8" fill="#8b5cf6" />
      </svg>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #6366f1, transparent)',
        }}
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
          03 — Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight tracking-tight text-white mb-16"
        >
          Work that
          <br />
          <span className="gradient-text">matters.</span>
        </motion.h2>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 hover:border-white/15 transition-all duration-500 cursor-default"
              style={{ minHeight: '380px' }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                style={{ zIndex: 0 }}
              />

              {/* SVG pattern */}
              <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
                {project.bgPattern}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at 70% 50%, ${project.accentColor}20, transparent)`,
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row md:items-end justify-between h-full gap-8">
                <div className="flex-1">
                  {/* Project number */}
                  <p
                    className="text-6xl font-black opacity-10 leading-none mb-4"
                    style={{ color: project.accentColor }}
                  >
                    0{project.id}
                  </p>

                  {/* Title */}
                  <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight mb-3 group-hover:opacity-90 transition-opacity">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-white/50 text-lg mb-4">{project.tagline}</p>

                  {/* Description */}
                  <p className="text-white/35 text-sm leading-relaxed max-w-xl mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          borderColor: `${project.accentColor}30`,
                          color: `${project.accentColor}cc`,
                          background: `${project.accentColor}08`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stat */}
                <div
                  className="flex-shrink-0 text-right"
                >
                  <p
                    className="text-[clamp(3rem,6vw,5rem)] font-black leading-none"
                    style={{ color: project.accentColor }}
                  >
                    {project.stat}
                  </p>
                  <p className="text-white/40 text-sm mt-1">{project.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
