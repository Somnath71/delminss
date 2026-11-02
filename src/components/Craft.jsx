import { motion } from 'framer-motion'
import { reveal } from './ease.js'

const steps = [
  {
    num: '01',
    title: 'Quality',
    desc: 'From hand-selected whole spices to export-grade grains, every single batch undergoes rigorous multi-tier quality testing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Trust',
    desc: 'Built on clean labels, honest ingredients, and global certifications that families across continents rely on every day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Originality',
    desc: 'Faithful to India’s authentic street recipes — delivering the genuine burst of tang, spice, and crunch without imitation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Safety',
    desc: 'Vacuum-sealed in ISO & HACCP certified cleanrooms — 100% untouched by bare hands with zero artificial preservatives.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

export default function Craft() {
  return (
    <section className="craft-section" id="craft">
      <div className="container craft-grid">
        {/* Left Side: Arched Spices & Traditional Mortar Artwork */}
        <motion.div className="craft-visual" {...reveal}>
          <div className="craft-image-frame">
            <img
              src="/Product4.png"
              alt="Traditional Indian spices and ingredients in brass bowls"
              className="craft-image"
            />
          </div>
        </motion.div>

        {/* Right Side: Header and 2x2 Feature Cards */}
        <div className="craft-content">
          <motion.div className="craft-header" {...reveal}>
            <span className="craft-eyebrow">THE CRAFT</span>
            <h2 className="craft-title">
              Crafted with Tradition. <br />
              Perfected with Care.
            </h2>
            <p className="craft-subtitle">
              From the selection of raw ingredients to the final pack, our craft is guided by four uncompromising commitments — Quality, Trust, Originality, and Safety — so you can enjoy the same authentic street experience anywhere in the world.
            </p>
          </motion.div>

          <div className="craft-cards-grid">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="craft-card"
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.1 + i * 0.08 }}
              >
                {/* Vintage Corner Filigree Brackets */}
                <span className="craft-corner top-left" aria-hidden="true" />
                <span className="craft-corner top-right" aria-hidden="true" />
                <span className="craft-corner bottom-left" aria-hidden="true" />
                <span className="craft-corner bottom-right" aria-hidden="true" />

                {/* Subtle Background Watermark Stamp */}
                <div className="craft-card-seal" aria-hidden="true">✦</div>

                <div className="craft-card-top">
                  <div className="craft-card-icon-medallion">
                    <div className="craft-card-icon">{s.icon}</div>
                  </div>
                  <div className="craft-card-stamp">
                    <span className="craft-card-num">{s.num}</span>
                  </div>
                </div>

                <h3 className="craft-card-title">{s.title}</h3>

                {/* Retro Ornamental Divider */}
                <div className="craft-card-divider" aria-hidden="true">
                  <span className="craft-divider-line" />
                  <span className="craft-divider-diamond">✦</span>
                  <span className="craft-divider-line" />
                </div>

                <p className="craft-card-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
