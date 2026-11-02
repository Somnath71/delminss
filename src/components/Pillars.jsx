import { motion } from 'framer-motion'
import Tilt from './Tilt.jsx'
import { ease, reveal } from './ease.js'

const icons = {
  real: <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z" />,
  global: <><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19M12 2.5c3 3 3 16 0 19M12 2.5c-3 3-3 16 0 19" /></>,
  leaf: <path d="M4 20C4 9 11 4 20 4c0 9-5 16-16 16zM4 20l8-8" />,
  trust: <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM8.5 12l2.5 2.5 4.5-5" />,
}

const pillars = [
  ['real', 'Real and Original', 'Authentic recipes made with honesty, purity and traditional values.'],
  ['global', 'International Standards', 'Strict quality control and global food-safety practices at every step.'],
  ['leaf', 'Natural Ingredients', 'Carefully selected ingredients, prepared the traditional way.'],
  ['trust', 'Trust and Transparency', 'Clean labels, ethical sourcing and nothing to hide.'],
]

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container">
        <div className="pillars-head">
          <motion.p className="eyebrow light" {...reveal}>Our promise</motion.p>
          <motion.h2 className="h2 light" {...reveal}>
            A legacy of authenticity. <em>A promise of purity.</em>
          </motion.h2>
        </div>
        <div className="pillar-grid">
          {pillars.map(([k, t, d], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 80, rotate: i % 2 ? 4 : -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 1, ease }}
            >
              <Tilt className="pillar">
                <svg viewBox="0 0 24 24" className="pillar-icon" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                  {icons[k]}
                </svg>
                <h3>{t}</h3>
                <p>{d}</p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
