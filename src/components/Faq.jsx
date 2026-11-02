import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ease, reveal } from './ease.js'

export const FAQS = [
  {
    id: '01',
    category: 'The Brand & Heritage',
    q: 'What is Delmins?',
    a: 'Delmins is a premium Indian packaged food brand dedicated to reviving India’s most beloved street ritual with export-grade craftsmanship. We make authentic, preservative-free packaged Pani Puri using carefully curated regional grains, cold-pressed spices, and state-of-the-art hygiene standards verified by central food safety authorities.',
    badge: '100% Street Heritage · Zero Compromise',
  },
  {
    id: '02',
    category: 'Purity & Craft',
    q: 'Are your products preservative-free?',
    a: 'Yes, absolutely. Delmins products contain zero artificial preservatives, synthetic colors, or harmful chemical additives. Our shatter-crisp crunch and fresh herb flavors are locked in using nitrogen-flushed, multi-layer oxygen-barrier packaging that protects purity naturally.',
    badge: 'Zero Chemical Additives · Natural Crunch',
  },
  {
    id: '03',
    category: 'Freshness & Shelf Life',
    q: 'What is the shelf life?',
    a: 'Our unopened boxes carry a guaranteed shelf life of 3 to 6 months when stored in a cool, dry place away from direct sunlight. Exact batch manufacturing and best-before dates are laser-printed on every carton alongside our central FSSAI license.',
    badge: '3–6 Months Sealed Freshness',
  },
  {
    id: '04',
    category: 'Availability & Delivery',
    q: 'Where can I buy Delmins?',
    a: 'You can order directly on Blinkit for 10-minute doorstep delivery (live across Gurgaon & expanding to Delhi NCR), or purchase in person at Lulu Mall Lucknow and Phoenix Palassio. Dedicated Delmins street-ritual kiosks are also rolling out across major metro transit hubs.',
    badge: 'Blinkit 10-Min Delivery & Retail Outlets',
  },
  {
    id: '05',
    category: 'International Export',
    q: 'Do you export or ship internationally?',
    a: 'Yes — Delmins is designed export-first from day one. Active air and sea consignments are regularly dispatched to Canada, Dubai (UAE), and Scotland (UK). We hold formal RCMC accreditation with APEDA and FIEO. International distributors and importers can reach our dedicated trade desk.',
    badge: 'APEDA & FIEO Certified Global Trade',
  },
  {
    id: '06',
    category: 'Bulk & Celebrations',
    q: 'Can I order in bulk?',
    a: 'Certainly! We cater bulk orders for weddings, Diwali hampers, corporate gifting crates, family reunions, and wholesale catering. Custom branded packaging and tiered volume pricing are available through our concierge desk.',
    badge: 'Custom Corporate Gifting & Event Crates',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          {/* Left Column: Retro Editorial Header & Concierge Card */}
          <div className="faq-left-col">
            <div className="faq-sticky-header">
              <motion.div className="faq-eyebrow-pill" {...reveal}>
                <span className="faq-pill-star">★</span>
                <span>प्रश्न एवं उत्तर · QUESTIONS & ANSWERS</span>
                <span className="faq-pill-star">★</span>
              </motion.div>

              <motion.h2 className="faq-title" {...reveal}>
                Questions, <br />
                <span className="faq-title-accent">answered crisp.</span>
              </motion.h2>

              <motion.div className="faq-divider" aria-hidden="true" {...reveal}>
                <span className="faq-divider-line" />
                <svg className="faq-divider-star" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
                <span className="faq-divider-line" />
              </motion.div>

              <motion.p className="faq-subtitle" {...reveal}>
                From our zero-preservative promise to export-grade airtight packing, here is everything you need to know about our street-to-table ritual.
              </motion.p>

              {/* Retro Concierge / Trade Box */}
              <motion.div className="faq-concierge-card" {...reveal} transition={{ ...reveal.transition, delay: 0.15 }}>
                <span className="faq-card-corner tl" aria-hidden="true" />
                <span className="faq-card-corner tr" aria-hidden="true" />
                <span className="faq-card-corner bl" aria-hidden="true" />
                <span className="faq-card-corner br" aria-hidden="true" />

                <div className="faq-concierge-tag">
                  <span className="faq-concierge-star">★</span>
                  <span>TRADE & BULK DESK · व्यापार केंद्र</span>
                </div>
                <h3 className="faq-concierge-heading">Have an export or wholesale question?</h3>
                <p className="faq-concierge-text">
                  Our master trade team assists international importers, distributors, and event organizers with customized consignments.
                </p>
                <a href="#footer" className="faq-concierge-btn">
                  <span>Contact Our Team</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Retro Archival Accordion Cards */}
          <div className="faq-accordion-wrap">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <motion.div
                  key={faq.id}
                  className={`faq-retro-card ${isOpen ? 'open' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.06, duration: 0.6, ease }}
                >
                  {/* Brass Corner Filigree */}
                  <span className="faq-item-corner tl" aria-hidden="true" />
                  <span className="faq-item-corner tr" aria-hidden="true" />
                  <span className="faq-item-corner bl" aria-hidden="true" />
                  <span className="faq-item-corner br" aria-hidden="true" />

                  {/* Header Button */}
                  <button
                    className="faq-trigger"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-trigger-left">
                      {/* Retro Archival Number Medallion */}
                      <span className="faq-num-badge">{faq.id}</span>
                      <div className="faq-trigger-copy">
                        <span className="faq-cat-pill">{faq.category}</span>
                        <h3 className="faq-item-question">{faq.q}</h3>
                      </div>
                    </div>

                    {/* Brass Toggle Button */}
                    <div className="faq-brass-toggle" aria-hidden="true">
                      <motion.svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="faq-toggle-icon"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </motion.svg>
                    </div>
                  </button>

                  {/* Accordion Expandable Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-container"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <div className="faq-answer-inner">
                          <p className="faq-answer-text">{faq.a}</p>
                          <div className="faq-answer-badge">
                            <span className="faq-answer-check">✓</span>
                            <span>{faq.badge}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
