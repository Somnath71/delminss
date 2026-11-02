import { motion } from 'framer-motion'
import { ease, reveal } from './ease.js'

export default function HeritageStory({ onOpenStory }) {
  return (
    <section className="heritage-section" id="story">
      <div className="container">
        <div className="heritage-grid">
          {/* Left Arched Artwork */}
          <motion.div
            className="heritage-visual"
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="heritage-frame">
              <img
                src="/product3.png"
                alt="Delmins Heritage - Traditional Puri making, Ghar Jaisa Swad"
                className="heritage-image"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="heritage-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            <span className="heritage-eyebrow">OUR STORY</span>

            <h2 className="heritage-title">
              A Legacy of Authenticity. A Promise of Purity.
            </h2>

            {/* Vintage Sparkle Divider */}
            <div className="heritage-divider" aria-hidden="true">
              <span className="heritage-line" />
              <svg className="heritage-sparkle" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
              <span className="heritage-line" />
            </div>

            <p className="heritage-text">
              Delmins Foods is a purpose-driven food company committed to delivering real, honest, and authentic Indian flavors to customers across the globe.

            </p>

            <p className="heritage-text">
              Our products are crafted using carefully selected ingredients, traditional recipes, and modern hygienic manufacturing standards to ensure purity, quality, and trust in every bite.
              We believe food is more than taste — it is culture, heritage, and a connection to timeless traditions.
            </p>

            {/* Quote Callout Box */}
            <blockquote className="heritage-quote-box">
              “Food is more than taste — it is culture, heritage and a connection to timeless traditions.”
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

