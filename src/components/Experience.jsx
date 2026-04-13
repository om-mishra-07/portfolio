import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: 'Technical Product Manager',
    company: 'Darwinbox',
    period: '2023 — Present',
    location: 'Hyderabad, India',
    description:
      'Led development of AI-powered HR products impacting 1M+ employees across 700+ enterprise clients. Drove 0→1 product launches including intelligent analytics dashboards and ML-based talent insights.',
    highlights: ['AI Product Strategy', 'Roadmap Ownership', '1M+ Users', 'Enterprise SaaS'],
    color: '#6366f1',
  },
  {
    role: 'Engineer / Developer',
    company: 'Expedera',
    period: '2022 — 2023',
    location: 'Remote',
    description:
      'Developed hardware-optimized neural network inference engines. Worked on edge AI systems that bring intelligence to resource-constrained devices.',
    highlights: ['Edge AI', 'Neural Networks', 'Hardware Optimization', 'C++/Python'],
    color: '#8b5cf6',
  },
  {
    role: 'AI/ML Research Intern',
    company: 'CTTC',
    period: '2022',
    location: 'Bhubaneswar, India',
    description:
      'Conducted research on computer vision and signal processing algorithms. Published findings on real-time detection systems using deep learning architectures.',
    highlights: ['Computer Vision', 'Research', 'Deep Learning', 'Signal Processing'],
    color: '#a78bfa',
  },
  {
    role: 'Data Analyst',
    company: 'PARC',
    period: '2021',
    location: 'Remote',
    description:
      'Analyzed large datasets to extract actionable business insights. Built data pipelines and visualization dashboards that informed strategic decisions.',
    highlights: ['Data Analysis', 'Python', 'SQL', 'Tableau'],
    color: '#c4b5fd',
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] text-indigo-400 uppercase mb-8"
        >
          04 — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight tracking-tight text-white mb-16"
        >
          The journey
          <br />
          <span className="gradient-text">so far.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              className="w-full bg-gradient-to-b from-indigo-500 to-purple-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Entries */}
          <div className="flex flex-col gap-12 pl-8 md:pl-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-8 md:-left-24 top-1 w-3 h-3 rounded-full border-2 border-current transition-all duration-300 group-hover:scale-150"
                  style={{
                    borderColor: exp.color,
                    background: 'black',
                    marginLeft: '-6px',
                  }}
                />

                {/* Card */}
                <div className="glass p-8 rounded-3xl hover:border-white/15 transition-all duration-300 group-hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-base font-medium mt-1" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-white/50 text-sm">{exp.period}</p>
                      <p className="text-white/30 text-xs mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-white/50 leading-relaxed mb-5">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${exp.color}10`,
                          border: `1px solid ${exp.color}20`,
                          color: exp.color,
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
      </div>
    </section>
  );
}
