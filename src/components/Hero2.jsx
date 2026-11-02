import { motion } from 'framer-motion'
import { ease, reveal } from './ease.js'

export default function Hero2() {
  const scrollToCraft = () => {
    const el = document.getElementById('craft')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToStory = () => {
    const el = document.getElementById('story')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero2-section" id="legend">
      <div className="container hero2-grid">
        {/* Left Content Column */}
        <div className="hero2-content">
          {/* Eyebrow in Hindi + English */}
          <motion.div className="hero2-eyebrow" {...reveal}>
            {/* <span>भारत का सबसे प्यारा स्नैक</span> */}
            {/* <span className="hero2-eyebrow-sep">·</span> */}
            <span>INDIA'S BELOVED STREET SNACK</span>
          </motion.div>

          {/* Heading Line 1: Devanagari 'पानी पूरी' */}
          <motion.h2
            className="hero2-title-hi"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            DELMINS
          </motion.h2>

          {/* Heading Line 2: 'PANI' (solid) + 'PURI' (outlined) */}
          <motion.div
            className="hero2-title-en"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
          >
            <span className="hero2-title-solid">PANI</span>
            <span className="hero2-title-outline">PURI</span>
          </motion.div>

          {/* Story Narrative */}
          <motion.p
            className="hero2-desc"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
            One hollow sphere of joy. A dozen names across the land — Puchka in Bengal, Golgappa in the North, Pani Puri in the West, and countless beloved names in between. A delicate crack, a splash of tangy green fire, a burst of spiced fillings, and a mouth too full to speak. From bustling street corners to cherished family gatherings, every bite carries a story of tradition, nostalgia, and togetherness. Different names, different flavours, yet one irresistible love. It's more than just a snack; it's a little piece of India's soul — the crunch that unites a nation.          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="hero2-actions"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.22 }}
          >
            <button onClick={scrollToStory} className="hero2-btn-primary">
              Hear the Legend
            </button>
            <button onClick={scrollToCraft} className="hero2-btn-secondary">
              Meet the Regions
            </button>
          </motion.div>

          {/* Bottom 3-Stat Metric Boxes */}
          <motion.div
            className="hero2-stats"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
          >
            <div className="hero2-stat-box">
              <span className="hero2-stat-val">12+</span>
              <span className="hero2-stat-lbl">NAMES</span>
            </div>
            <div className="hero2-stat-box">
              <span className="hero2-stat-val">28</span>
              <span className="hero2-stat-lbl">STATES SERVED</span>
            </div>
            <div className="hero2-stat-box">
              <span className="hero2-stat-val">∞</span>
              <span className="hero2-stat-lbl">APPETITE</span>
            </div>
          </motion.div>
        </div>

        {/* Right Food Showcase Column */}
        <motion.div
          className="hero2-visual"
          initial={{ opacity: 0, scale: 0.94, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <div className="hero2-image-wrap">
            <img
              src="/product1.png"
              alt="Pani Puri Thali with mint pudina pani, tamarind water, and spiced fillings"
              className="hero2-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

