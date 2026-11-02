import { motion } from 'framer-motion'
import { reveal, ease } from './ease.js'
import './HandCheers.css'

export default function HandCheers() {
  return (
    <section className="hand-cheers-section" aria-label="Delmins Pani Puri Cheers">
      {/* Ambient background glows */}
      <div className="hand-cheers-ambient-glow" aria-hidden="true" />
      <div className="hand-cheers-mint-glow" aria-hidden="true" />

      {/* Top Header inside container */}
      <div className="container hand-cheers-container">
        <div className="hand-cheers-header">
          <motion.div className="hand-cheers-badge-wrap" {...reveal}>
            <div className="hand-cheers-ornament">
              <span></span>
              <span className="hand-cheers-tag">✦ THE ICONIC CHEERS ✦</span>
              <span></span>
            </div>
          </motion.div>

          <motion.h2
            className="hand-cheers-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease }}
          >
            The Crunch That Connects Us
          </motion.h2>

          <motion.p
            className="hand-cheers-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
          >
            Two hands, two golden spheres, one unforgettable burst of tangy, minty joy.
            From bustling street thelas to the comfort of your dining table — cheers to pure Indian tradition.
          </motion.p>
        </div>
      </div>

      {/* ─── FULL HAND.PNG SHOWCASE (FULL BLEED / ZERO HORIZONTAL PADDING) ─── */}
      <motion.div
        className="hand-cheers-image-stage"
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.05, ease }}
      >
        {/* Subtle floating breath motion */}
        <motion.div
          className="hand-cheers-image-inner"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/hand.png"
            alt="Two hands cheering with Delmins golden pani puris and fresh mint pani dripping"
            className="hand-cheers-full-img"
            loading="lazy"
            draggable={false}
          />
        </motion.div>

        {/* Central subtle collision radiance */}
        <div className="hand-cheers-radiance" aria-hidden="true" />
      </motion.div>

      {/* Bottom Feature Badges inside container */}

    </section>
  )
}
