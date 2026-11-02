import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Counter from './Counter.jsx'
import { reveal } from './ease.js'

const COLS = 30, ROWS = 12

export default function Proof() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const lit = useMemo(() => {
    const s = new Set()
    let seed = 7
    while (s.size < 36) {
      seed = (seed * 9301 + 49297) % 233280
      s.add(Math.floor((seed / 233280) * COLS * ROWS))
    }
    return [...s]
  }, [])
  const order = useMemo(() => new Map(lit.map((v, i) => [v, i])), [lit])

  return (
    <section className="proof" ref={ref}>
      <div className="container">
        <motion.p className="eyebrow" {...reveal}>Recognition</motion.p>
        <div className="proof-head">
          <motion.h2 className="h2" {...reveal}>
            One of <span className="big-36"><Counter to={36} duration={2.4} /></span> companies
            <br />chosen by <em>APEDA</em> from over
            <br /><span className="mark"><Counter to={100000} duration={2.6} /></span> applicants across India.
          </motion.h2>
        </div>

        <div className={`dot-field ${inView ? 'go' : ''}`} style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }} aria-hidden>
          {Array.from({ length: COLS * ROWS }).map((_, i) => (
            <i key={i} className={order.has(i) ? 'lit' : ''} style={order.has(i) ? { transitionDelay: `${0.6 + order.get(i) * 0.05}s` } : undefined} />
          ))}
        </div>

        <div className="stat-row">
          {[
            [3, 'Export markets', 'Dubai · Canada · Scotland'],
            [36, 'APEDA shortlist', 'out of 1 lakh applicants'],
            [3, 'Retail touchpoints', 'Blinkit · Lulu · Phoenix'],
            [0, 'Preservatives', 'Just honest ingredients'],
          ].map(([n, t, d], i) => (
            <motion.div className="stat" key={t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
              <span className="stat-n"><Counter to={n} from={n === 0 ? 10 : 0} /></span>
              <b>{t}</b>
              <span>{d}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
