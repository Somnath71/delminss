import { motion } from 'framer-motion'
import Tilt from './Tilt.jsx'
import { ease, reveal } from './ease.js'

const places = [
  { tag: 'Quick commerce', name: 'Blinkit', where: 'Live in Gurgaon · expanding city by city', cta: 'Order in minutes', href: 'https://blinkit.com/s/?q=delmins', tone: 'saffron', big: true },
  { tag: 'Retail', name: 'Lulu Mall', where: 'Lucknow', tone: 'cream' },
  { tag: 'Retail', name: 'Phoenix Mall', where: 'On the shelf now', tone: 'mint' },
  { tag: 'Coming soon', name: 'Delmins Kiosks', where: 'Fresh pani puri counters in malls & high streets', cta: 'Partner with us', href: '#contact', tone: 'chili', big: true },
  { tag: 'Export', name: 'Worldwide', where: 'Dubai · Canada · Scotland — importers & distributors welcome', cta: 'Import Delmins', href: '#contact', tone: 'forest', big: true },
]

export default function Shelves() {
  return (
    <section className="shelves" id="find">
      <div className="container">
        <div className="section-head">
          <motion.p className="eyebrow" {...reveal}>Where to find us</motion.p>
          <motion.h2 className="h2" {...reveal}>
            Ten minutes away <em>or ten thousand kilometres.</em>
          </motion.h2>
        </div>
        <div className="shelf-grid">
          {places.map((p, i) => (
            <motion.div
              key={p.name}
              className={p.big ? 'span-2' : ''}
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.9, ease }}
            >
              <Tilt className={`shelf-card tone-${p.tone}`}>
                <span className="shelf-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.where}</p>
                {p.cta && (
                  <a href={p.href} className="shelf-cta" target={p.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {p.cta} <span className="arrow">→</span>
                  </a>
                )}
                <span className="shelf-num">0{i + 1}</span>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
