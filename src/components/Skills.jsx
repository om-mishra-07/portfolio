import { motion } from 'framer-motion';

const categories = [
  {
    label: 'AI / ML',
    color: '#6366f1',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'LangChain', 'Pandas', 'NumPy'],
  },
  {
    label: 'Web Dev',
    color: '#8b5cf6',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    label: 'Blockchain',
    color: '#a855f7',
    skills: ['Solidity', 'Filecoin', 'IPFS', 'Web3.js', 'Hardhat', 'Ethers.js'],
  },
  {
    label: 'Product',
    color: '#c4b5fd',
    skills: ['Figma', 'Amplitude', 'Jira', 'Mixpanel', 'A/B Testing', 'OKRs', 'SQL', 'Tableau'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent 70%)' }}
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
          05 — Skills & Tools
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight tracking-tight text-white mb-4"
        >
          Tools of the
          <br />
          <span className="gradient-text">trade.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/40 mb-16 max-w-xl"
        >
          A curated set of technologies I use to build production systems across every layer of the stack.
        </motion.p>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass p-8 rounded-3xl group hover:border-white/15 transition-all duration-300"
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color }}
                />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.1 + j * 0.04,
                    }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `0 0 16px ${cat.color}40`,
                    }}
                    className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all duration-200"
                    style={{
                      background: `${cat.color}08`,
                      border: `1px solid ${cat.color}20`,
                      color: `${cat.color}cc`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-medium tracking-widest text-indigo-400 uppercase mb-2">Education</p>
            <h3 className="text-xl font-bold text-white">B.E. Computer Science</h3>
            <p className="text-white/50 mt-1">BITS Pilani · Birla Institute of Technology and Science</p>
          </div>
          <div className="flex-shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              }}
            >
              B
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
