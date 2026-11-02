import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { ease } from './ease.js'

const steps = [
  { n: '01', t: 'The Shell', d: 'Golden puris, vacuum-cooked to lock in a crunch that survives the journey — from our kitchen to Toronto.' },
  { n: '02', t: 'The Filling', d: 'Spiced potato and tender chickpeas, seasoned the way every street-corner master does it.' },
  { n: '03', t: 'The Pani', d: 'Tangy mint, tamarind and black salt — packed to keep its punch, poured cold right before the bite.' },
  { n: '04', t: 'The Burst', d: 'Crunch, spice and tang, all at once. That split second is the Delmins moment.' },
]

const chickpeas = [
  [170, 250, 16], [215, 262, 18], [250, 240, 15], [190, 290, 17], [232, 298, 16], [150, 282, 13],
]

function Splash({ p, i }) {
  const a = (i / 16) * Math.PI * 2 + (i % 2) * 0.2
  const dist = 120 + (i % 4) * 32
  const x = useTransform(p, [0.76, 0.95], [0, Math.cos(a) * dist])
  const y = useTransform(p, [0.76, 0.95], [0, Math.sin(a) * dist - 30])
  const s = useTransform(p, [0.76, 0.8, 1], [0, 1, 0.85])
  return <motion.circle cx={200} cy={170} r={5 + (i % 3) * 4} fill={i % 3 === 0 ? '#ffb321' : '#3cbf68'} style={{ x, y, scale: s }} />
}

function Pea({ p, i, c }) {
  const y = useTransform(p, [0.25 + i * 0.025, 0.42 + i * 0.025], [-320, 0])
  const o = useTransform(p, [0.25 + i * 0.025, 0.3 + i * 0.025], [0, 1])
  return <motion.circle cx={c[0]} cy={c[1]} r={c[2]} fill={i % 2 ? '#d8b276' : '#ecd29b'} stroke="#a77c3f" strokeWidth="2" style={{ y, opacity: o }} />
}

export default function Story() {
  const ref = useRef()
  const [step, setStep] = useState(0)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(p, 'change', (v) => setStep(Math.min(3, Math.max(0, Math.floor(v * 4)))))

  const shellScale = useTransform(p, [0, 0.2], [0.55, 1])
  const shellRot = useTransform(p, [0, 0.22], [-25, 0])
  const shellOpacity = useTransform(p, [0.24, 0.3, 0.74, 0.8], [1, 0.42, 0.42, 1])
  const holeOpacity = useTransform(p, [0.12, 0.22], [0, 1])
  const paniY = useTransform(p, [0.5, 0.72], [200, 0])
  const pop = useTransform(p, [0.8, 0.9], [0, 1])
  const wobble = useTransform(p, [0.76, 0.8, 0.84, 0.88], [1, 1.12, 0.94, 1])
  const bar = useTransform(p, [0, 1], ['0%', '100%'])

  return (
    <section className="story" id="story" ref={ref}>
      <div className="story-sticky">
        <div className="container story-grid">
          <div className="story-copy">
            <p className="eyebrow">The anatomy of a burst</p>
            <div className="story-num">
              <AnimatePresence mode="wait">
                <motion.span
                  key={step}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  {steps[step].n}
                </motion.span>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="story-title">{steps[step].t}</h2>
                <p className="story-desc">{steps[step].d}</p>
              </motion.div>
            </AnimatePresence>
            <div className="story-rail">
              <motion.span style={{ width: bar }} />
              {steps.map((s, i) => (
                <b key={s.n} className={i <= step ? 'on' : ''}>{s.t}</b>
              ))}
            </div>
          </div>

          <div className="story-visual">
            <div className="story-halo" />
            <svg viewBox="0 0 400 400" className="story-svg">
              <defs>
                <radialGradient id="shell" cx="40%" cy="35%" r="70%">
                  <stop offset="0%" stopColor="#ffd98a" />
                  <stop offset="55%" stopColor="#e5a043" />
                  <stop offset="100%" stopColor="#9c5216" />
                </radialGradient>
                <linearGradient id="pani" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#63e090" />
                  <stop offset="100%" stopColor="#1d8a47" />
                </linearGradient>
                <clipPath id="inside"><ellipse cx="200" cy="240" rx="140" ry="112" /></clipPath>
              </defs>

              <motion.g style={{ scale: wobble }}>
                <motion.g style={{ scale: shellScale, rotate: shellRot }}>
                  <g clipPath="url(#inside)">
                    <rect x="40" y="120" width="320" height="240" fill="#5a2a17" opacity="0.35" />
                    <motion.g style={{ y: paniY }}>
                      <path className="wave" d="M-200 180 Q -150 165 -100 180 T 0 180 T 100 180 T 200 180 T 300 180 T 400 180 T 500 180 T 600 180 V 400 H -200 Z" fill="url(#pani)" />
                    </motion.g>
                    {chickpeas.map((c, i) => <Pea key={i} p={p} i={i} c={c} />)}
                  </g>
                  <motion.ellipse cx="200" cy="240" rx="140" ry="112" fill="url(#shell)" style={{ opacity: shellOpacity }} />
                  <ellipse cx="200" cy="240" rx="140" ry="112" fill="none" stroke="#7a3f12" strokeWidth="3" opacity="0.5" />
                  {[[150, 210], [250, 280], [180, 300], [270, 220], [120, 260]].map(([x, y], i) => (
                    <motion.circle key={i} cx={x} cy={y} r={6 + (i % 3) * 3} fill="#b4651d" opacity={0.35} style={{ opacity: shellOpacity }} />
                  ))}
                  <motion.ellipse cx="200" cy="150" rx="58" ry="17" fill="#5a2a17" stroke="#f3c46f" strokeWidth="4" style={{ opacity: holeOpacity }} />
                </motion.g>
              </motion.g>

              {Array.from({ length: 16 }).map((_, i) => <Splash key={i} p={p} i={i} />)}
              <motion.text x="200" y="80" textAnchor="middle" className="pop" style={{ scale: pop }}>
                POP!
              </motion.text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
