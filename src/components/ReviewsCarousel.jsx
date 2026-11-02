import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { reveal } from './ease.js'

export const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    badge: 'Verified Customer',
    flag: '🇮🇳',
    rating: 5,
    theme: 'saffron',
    color: '#c2410c',
    accent: '#ea580c',
    bg: 'linear-gradient(168deg, #fffaf5 0%, #ffedd5 50%, #fed7aa 100%)',
    borderColor: '#f97316',
    tagBg: '#ffedd5',
    tagColor: '#9a3412',
    avatarGradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    glow: 'rgba(234, 88, 12, 0.28)',
    quote:
      'The quality and authenticity of these snacks remind me of home. Every bite is a celebration of genuine flavors.',
    dish: 'Signature Pack',
    initials: 'PS',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    badge: 'Verified Customer',
    flag: '🇮🇳',
    rating: 5,
    theme: 'emerald',
    color: '#047857',
    accent: '#10b981',
    bg: 'linear-gradient(168deg, #f0fdf5 0%, #dcfce7 50%, #bbf7d0 100%)',
    borderColor: '#22c55e',
    tagBg: '#dcfce7',
    tagColor: '#166534',
    avatarGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    glow: 'rgba(16, 185, 129, 0.28)',
    quote:
      'Premium ingredients and traditional recipes make these snacks truly special. A perfect blend of taste and quality.',
    dish: 'Heritage Recipe',
    initials: 'RK',
  },
  {
    id: 3,
    name: 'Anita Desai',
    location: 'Bangalore, India',
    badge: 'Verified Customer',
    flag: '🇮🇳',
    rating: 5,
    theme: 'crimson',
    color: '#be123c',
    accent: '#f43f5e',
    bg: 'linear-gradient(168deg, #fff1f2 0%, #ffe4e6 50%, #fecdd3 100%)',
    borderColor: '#fb7185',
    tagBg: '#ffe4e6',
    tagColor: '#9f1239',
    avatarGradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
    glow: 'rgba(244, 63, 94, 0.28)',
    quote:
      'These snacks bring joy to every gathering. The attention to detail and authentic taste is unmatched.',
    dish: 'Party Gathering Box',
    initials: 'AD',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    location: 'Ahmedabad, India',
    badge: 'Verified Customer',
    flag: '🇮🇳',
    rating: 5,
    theme: 'amber-gold',
    color: '#b45309',
    accent: '#f59e0b',
    bg: 'linear-gradient(168deg, #fffdf0 0%, #fef3c7 50%, #fde68a 100%)',
    borderColor: '#f59e0b',
    tagBg: '#fef3c7',
    tagColor: '#78350f',
    avatarGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    glow: 'rgba(245, 158, 11, 0.28)',
    quote:
      'A luxury experience in every package. The flavors are rich, authentic, and absolutely delightful.',
    dish: 'Luxury Collection',
    initials: 'VP',
  },
]

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)

  // Responsive visible card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1100) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, REVIEWS.length - visibleCount)

  // Auto-slide every 5.5s
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused, maxIndex])

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1))

  return (
    <section
      className="reviews-section"
      id="reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header with Navigation Controls */}
        <div className="reviews-header-wrap">
          <div className="reviews-header-copy">
            <motion.p className="reviews-eyebrow" {...reveal}>
              CUSTOMER EXPERIENCE · TESTIMONIALS
            </motion.p>
            <motion.h2 className="reviews-title" {...reveal}>
              Loved on India’s streets, <em>cherished across the globe.</em>
            </motion.h2>
            <motion.p className="reviews-subtitle" {...reveal}>
              Bringing families together for the timeless pani puri ritual — one authentic burst at a time.
            </motion.p>
          </div>

          {/* Retro Brass Navigation Arrows */}
          <div className="reviews-nav-controls">
            <button
              onClick={prev}
              className="reviews-arrow-btn"
              aria-label="Previous customer reviews"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <span className="reviews-counter">
              0{index + 1} <small>/</small> 0{maxIndex + 1}
            </span>
            <button
              onClick={next}
              className="reviews-arrow-btn"
              aria-label="Next customer reviews"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport Track */}
        <div className="reviews-carousel-viewport">
          <motion.div
            className="reviews-carousel-track"
            animate={{
              x: `-${index * (100 / visibleCount)}%`,
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 28,
            }}
          >
            {REVIEWS.map((r) => (
              <div
                key={r.id}
                className="reviews-card-slide"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <div
                  className="reviews-card"
                  style={{
                    '--card-bg': r.bg,
                    '--card-border': r.borderColor,
                    '--card-acc': r.accent,
                    '--card-c': r.color,
                    '--card-tag-bg': r.tagBg,
                    '--card-tag-c': r.tagColor,
                    '--card-avatar-grad': r.avatarGradient,
                    '--card-glow': r.glow,
                  }}
                >
                  {/* Vibrant Top Accent Bar */}
                  <span className="reviews-top-bar" aria-hidden="true" />

                  {/* Decorative Corner Filigree */}
                  <span className="reviews-corner tl" aria-hidden="true" />
                  <span className="reviews-corner tr" aria-hidden="true" />
                  <span className="reviews-corner bl" aria-hidden="true" />
                  <span className="reviews-corner br" aria-hidden="true" />

                  {/* Watermark Quote Mark */}
                  <span className="reviews-quote-watermark" aria-hidden="true">“</span>

                  {/* Top Bar: 5-Star Rating & Location Flag */}
                  <div className="reviews-card-top">
                    <div className="reviews-stars" aria-label="5 out of 5 stars">
                      {'★'.repeat(r.rating)}
                    </div>
                    <span className="reviews-flag-tag">
                      <span className="reviews-flag">{r.flag}</span>
                      {r.location}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="reviews-card-quote">
                    “{r.quote}”
                  </blockquote>

                  {/* Customer Footer */}
                  <div className="reviews-card-footer">
                    <div className="reviews-avatar-ring">
                      <span className="reviews-avatar-initials">{r.initials}</span>
                    </div>
                    <div className="reviews-author-info">
                      <h3 className="reviews-author-name">{r.name}</h3>
                      <span className="reviews-badge-pill">
                        <svg className="reviews-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {r.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="reviews-dots-wrap">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setIndex(dotIdx)}
              className={`reviews-dot ${dotIdx === index ? 'active' : ''}`}
              aria-label={`Go to review slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
