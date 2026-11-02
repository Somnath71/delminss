import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ease } from './ease.js'

/* ── tiny helpers ─────────────────────────────────────── */
const rnd = (min, max) => Math.random() * (max - min) + min

/* ── particle data (generated once outside component) ── */
const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: rnd(2, 98),   // vw %
  y: rnd(5, 95),   // vh %
  size: rnd(3, 9),
  dur: rnd(4, 11),
  delay: rnd(0, 8),
  color: ['#ffb321', '#3cbf68', '#e8452c', '#fff4de'][Math.floor(rnd(0, 4))],
  drift: rnd(-30, 30),
}))

/* ── headline lines (original animation) ─────────────── */
const LINES = ['One bite.', 'One burst.', 'Pure India.']

/* ── floating blobs ───────────────────────────────────── */
const BLOBS = [
  { w: '38vw', h: '38vw', top: '-8%', right: '-6%', bg: 'radial-gradient(circle, rgba(255,179,33,0.32), transparent 65%)', dur: 7 },
  { w: '28vw', h: '28vw', top: '50%', left: '-8%', bg: 'radial-gradient(circle, rgba(60,191,104,0.22), transparent 65%)', dur: 9 },
  { w: '22vw', h: '22vw', bottom: '10%', right: '12%', bg: 'radial-gradient(circle, rgba(232,69,44,0.18), transparent 65%)', dur: 11 },
]

/* ══════════════════════════════════════════════════════ */
export default function Hero({ ready }) {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])

  /* typed tagline cycling */
  const taglines = [
    'Export-quality · Preservative-free · Crisp & Glorious',
    'From Gurgaon → Dubai → Canada → Scotland',
    'APEDA recognised · Top 36 of 1,00,000 applicants',
  ]
  const [tIdx, setTIdx] = useState(0)
  useEffect(() => {
    if (!ready) return
    const id = setInterval(() => setTIdx(t => (t + 1) % taglines.length), 3200)
    return () => clearInterval(id)
  }, [ready])

  const show = (d) => ({
    initial: { opacity: 0, y: 28 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { delay: d, duration: 0.85, ease },
  })

  return (
    <section
      className="hero hero-v2"
      id="top"
      ref={ref}
    >
      {/* ── ambient blobs ── */}
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="hero2-blob"
          style={{ width: b.w, height: b.h, top: b.top, right: b.right, left: b.left, bottom: b.bottom, background: b.bg }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: b.dur, ease: 'easeInOut' }}
        />
      ))}

      {/* ── floating particles ── */}
      {PARTICLES.map(p => (
        <motion.span
          key={p.id}
          className="hero2-particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: p.color }}
          animate={{ y: [0, p.drift, 0], opacity: [0, 0.85, 0], scale: [0.6, 1.2, 0.6] }}
          transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* ── scrollY parallax wrapper ── */}
      <motion.div
        className="hero-content container"
        style={{ y, opacity, scale }}
      >
        {/* badge */}
        <motion.div className="pill" {...show(0.05)}>
          <span className="pill-dot" />
          APEDA recognised · Top 36 of 1,00,000 applicants
        </motion.div>

        {/* ── headline — original line-by-line slide-up ── */}
        <h1 className="hero-title hero2-title">
          {LINES.map((l, i) => (
            <span className="line" key={l}>
              <motion.span
                className={i === 1 ? 'accent' : ''}
                initial={{ y: '115%', rotate: 4 }}
                animate={ready ? { y: '0%', rotate: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 1.1, ease }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* ── animated cycling tagline ── */}
        <motion.div className="hero2-tagline-wrap" {...show(0.55)}>
          <AnimatePresence mode="wait">
            <motion.p
              key={tIdx}
              className="hero-sub"
              initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.55, ease }}
            >
              {taglines[tIdx]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* ── cta row ── */}
        <motion.div className="hero-ctas" {...show(0.72)}>
          <motion.a
            className="btn btn-saffron"
            href="https://blinkit.com/s/?q=delmins"
            target="_blank"
            rel="noreferrer"
            data-cursor="Order"
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Order on Blinkit <span className="arrow">→</span>
          </motion.a>
          <motion.a
            className="btn btn-ghost"
            href="#our-story"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = 'our-story'
              window.dispatchEvent(new HashChangeEvent('hashchange'))
            }}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Our Story
          </motion.a>
        </motion.div>

        {/* ── animated stat strip ── */}
        <motion.div className="hero2-stats" {...show(0.9)}>
          {[
            { n: '#36', label: 'of 1L applicants' },
            { n: '3+', label: 'countries exported' },
            { n: '0', label: 'preservatives' },
            { n: '100%', label: 'crisp guarantee' },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="hero2-stat"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0 + i * 0.1, duration: 0.6, ease }}
            >
              <span className="hero2-stat-n">{s.n}</span>
              <span className="hero2-stat-l">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── scroll cue ── */}
      <motion.a href="#global" className="scroll-cue" {...show(1.25)} aria-label="Scroll">
        <span />
      </motion.a>

      {/* ── corner hint ── */}
      <motion.div className="hero-hint" {...show(1.1)}>
        <span className="hint-ring" /> Pani Puri. Reimagined.
      </motion.div>

      {/* ── decorative spice ring SVG ── */}
      <motion.svg
        className="hero2-ring"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        aria-hidden
      >
        <circle cx="300" cy="300" r="280" stroke="rgba(255,179,33,0.18)" strokeWidth="1.5" strokeDasharray="12 20" />
        <circle cx="300" cy="300" r="220" stroke="rgba(60,191,104,0.14)" strokeWidth="1" strokeDasharray="6 28" />
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i / 16) * Math.PI * 2
          return (
            <circle
              key={i}
              cx={300 + Math.cos(a) * 280}
              cy={300 + Math.sin(a) * 280}
              r={i % 3 === 0 ? 5 : 3}
              fill={i % 2 === 0 ? '#ffb321' : '#3cbf68'}
              opacity="0.6"
            />
          )
        })}
      </motion.svg>
    </section>
  )
}
