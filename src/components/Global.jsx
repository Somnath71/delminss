import { motion } from 'framer-motion'
import LazyCanvas from './three/LazyCanvas.jsx'
import GlobeScene, { DESTINATIONS } from './three/GlobeScene.jsx'
import { ease, reveal } from './ease.js'

const notes = {
  Dubai: { flag: '🇦🇪', note: "First export consignment — for the Gulf's big Indian diaspora.", dist: '2,200 km' },
  Scotland: { flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', note: "Bringing chaat-stall flavour to the UK's northern kitchens.", dist: '6,900 km' },
  Canada: { flag: '🇨🇦', note: 'Shipping the burst to Indian homes and stores across Canada.', dist: '11,400 km' },
}

export default function Global() {
  return (
    <section className="global" id="global">
      <div className="container global-grid">

        {/* ─── Left: Retro Editorial Copy ─── */}
        <div className="global-copy">

          {/* Eyebrow badge */}
          <motion.div className="global-eyebrow-pill" {...reveal}>
            <span className="global-pill-star">★</span>
            <span>Export-led by Design</span>
            <span className="global-pill-star">★</span>
          </motion.div>

          <motion.h2 className="global-h2" {...reveal}>
            From India's streets{' '}
            <em className="global-h2-em">to the world's shelves.</em>
          </motion.h2>

          {/* Star divider */}
          <motion.div className="global-divider" aria-hidden="true" {...reveal}>
            <span className="global-divider-line" />
            <svg className="global-divider-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
            <span className="global-divider-line" />
          </motion.div>

          <motion.p className="global-lede" {...reveal}>
            Built for export from day one. Our first consignments are headed to three continents — and after strong interest at international exhibitions, more markets are on the way.
          </motion.p>

          {/* Route cards — retro archival style */}
          <ul className="route-list">
            {DESTINATIONS.map((d, i) => {
              const info = notes[d.name]
              return (
                <motion.li
                  key={d.name}
                  style={{ '--c': d.color }}
                  initial={{ opacity: 0, x: -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease }}
                >
                  {/* Corner filigree */}
                  <span className="route-corner tl" aria-hidden="true" />
                  <span className="route-corner tr" aria-hidden="true" />
                  <span className="route-corner bl" aria-hidden="true" />
                  <span className="route-corner br" aria-hidden="true" />

                  {/* Route number badge */}
                  <span className="route-idx">0{i + 1}</span>

                  <div className="route-body">
                    <div className="route-header">
                      <b className="route-name">
                        <span className="route-flag">{info.flag}</span>
                        India → {d.name}
                      </b>
                      <span className="route-dist-badge">{info.dist}</span>
                    </div>
                    <span className="route-note">{info.note}</span>
                  </div>

                  {/* Live export indicator */}
                  <div className="route-live-dot" aria-label="Live route">
                    <span className="route-live-pulse" />
                  </div>
                </motion.li>
              )
            })}
          </ul>

          {/* Stat bar */}
          <motion.div className="global-stats-bar" {...reveal} transition={{ ...reveal.transition, delay: 0.3 }}>
            {[
              { num: '3', label: 'Continents' },
              { num: '11K+', label: 'km Shipped' },
              { num: '100%', label: 'Export-Grade' },
            ].map((s) => (
              <div className="global-stat" key={s.label}>
                <span className="global-stat-num">{s.num}</span>
                <span className="global-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── Right: Globe in a Retro Frame ─── */}
        <div className="globe-frame-outer">
          {/* Decorative arch / compass frame */}
          <div className="globe-frame-ring">
            {/* Cardinal compass labels */}
            <span className="globe-compass N">N</span>
            <span className="globe-compass S">S</span>
            <span className="globe-compass E">E</span>
            <span className="globe-compass W">W</span>

            {/* Tick marks around circumference */}
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={i}
                className="globe-tick"
                style={{ '--deg': `${i * 10}deg` }}
                aria-hidden="true"
              />
            ))}

            {/* The globe canvas */}
            <div className="globe-wrap" data-cursor="Spin">
              <LazyCanvas className="globe-canvas" camera={{ position: [0, 0, 5.2], fov: 45 }}>
                <GlobeScene />
              </LazyCanvas>
            </div>
          </div>

          {/* Below-globe retro attribution plate */}
          <div className="globe-attribution">
            <span className="globe-attr-star">★</span>
            <span>DELMINS GLOBAL EXPORT ROUTES · 2024</span>
            <span className="globe-attr-star">★</span>
          </div>
        </div>

      </div>
    </section>
  )
}
