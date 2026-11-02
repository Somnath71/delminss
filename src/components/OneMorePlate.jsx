import { motion } from 'framer-motion'
import { reveal } from './ease.js'

export default function OneMorePlate() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="one-more-plate">
      <div className="container one-more-plate-inner">
        <motion.h2 className="one-more-plate-title" {...reveal}>
          एक और प्लेट, भैया!
        </motion.h2>
        <motion.p className="one-more-plate-sub" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
          One more plate, please. The oldest street snack in India never went out of fashion — it just waited for you to finish chewing.
        </motion.p>
        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.2 }}>
          <button
            onClick={scrollToTop}
            className="one-more-plate-btn"
            aria-label="Back to the top"
          >
            Back to the Top
          </button>
        </motion.div>
      </div>
    </section>
  )
}
