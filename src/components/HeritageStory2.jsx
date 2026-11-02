import { motion } from 'framer-motion'
import { ease, reveal } from './ease.js'

export default function HeritageStory({ onOpenStory }) {
  return (
    <section className="heritage-section" id="story">
      <div className="container">
        <div className="heritage-grid">
          {/* Left Arched Artwork */}


          {/* Right Content */}
          <motion.div
            className="heritage-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            <span className="heritage-eyebrow">OUR Products</span>

            <h2 className="heritage-title">
              Good Food. Thoughtfully Made
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
              We believe food should be enjoyable, convenient, and made with care. What goes into our food matters just as much as the experience of enjoying it.

              Our commitment is to make products using 100% natural ingredients, without preservatives or added chemicals. This commitment guides our approach to ingredient selection, product development, and manufacturing.
            </p>

            <p className="heritage-text">
              From familiar Indian favourites to new food experiences, we aim to make the foods people love easier to enjoy in their everyday lives.

              Our pani puri kit, for example, brings the familiar taste of UP-style golgappa into the home, making it easier to enjoy a much-loved street-food favourite whenever the craving strikes.
            </p>

            {/* Quote Callout Box */}
            <blockquote className="heritage-quote-box">
              “Food is more than taste — it is culture, heritage and a connection to timeless traditions.”
            </blockquote>
          </motion.div>




          <motion.div
            className="heritage-visual"
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="heritage-frame">
              <img
                src="/product5.png"
                alt="Delmins Heritage - Traditional Puri making, Ghar Jaisa Swad"
                className="heritage-image"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

