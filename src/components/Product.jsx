import { motion } from 'framer-motion'
import LazyCanvas from './three/LazyCanvas.jsx'
import PackScene from './three/PackScene.jsx'
import Counter from './Counter.jsx'
import { ease, reveal } from './ease.js'

const specs = [
  ['Vacuum-cooked shells', 'Locks in crunch & taste'],
  ['Preservative-free', 'Nothing artificial, ever'],
  ['3–6 month shelf life', 'Cool, dry place'],
  ['Export-grade hygiene', 'International QC standards'],
]

export default function Product() {
  return (
    <section className="product" id="product">
      <div className="container product-grid">
        <div className="product-stage" data-cursor="Drag">
          <div className="product-ring" />
          <div className="product-ring r2" />
          <LazyCanvas className="product-canvas" camera={{ position: [0, 0, 6.5], fov: 40 }}>
            <PackScene />
          </LazyCanvas>
          <span className="drag-hint">↔ Drag to turn the pack</span>
        </div>

        <div className="product-copy">
          <motion.p className="eyebrow light" {...reveal}>The Pack</motion.p>
          <motion.h2 className="h2 light" {...reveal}>
            The street-side ritual, <em>sealed in a box.</em>
          </motion.h2>
          <motion.p className="lede light" {...reveal}>
            Everything you need for a full round of pani puri — crisp shells, spiced filling and tangy pani — packed with
            care and hygiene so the same authentic burst reaches you anywhere in the world.
          </motion.p>

          <div className="spec-grid">
            {specs.map(([t, d], i) => (
              <motion.div
                key={t}
                className="spec"
                initial={{ opacity: 0, y: 30, rotateX: -40 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8, ease }}
              >
                <b>{t}</b>
                <span>{d}</span>
              </motion.div>
            ))}
          </div>

          <motion.div className="price-card" {...reveal}>
            <div>
              <span className="price-tag">Launch price · Tier 1 cities</span>
              <div className="price-row">
                <span className="price-old">₹399</span>
                <span className="price-new">₹<Counter from={399} to={299} duration={1.8} /></span>
              </div>
            </div>
            <a href="https://blinkit.com/s/?q=delmins" target="_blank" rel="noreferrer" className="btn btn-saffron" data-cursor="Buy">Get yours <span className="arrow">→</span></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
