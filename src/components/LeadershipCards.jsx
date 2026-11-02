import { motion } from 'framer-motion'
import { reveal } from './ease.js'

export const leaders = [
  {
    role: 'Founder & Chairperson',
    hindiRole: 'THE FOUNDING VISION',
    name: 'Sangita Seth',
    quote: '“Food should be made with care, guided by honesty, quality, and respect for what we eat.”',
    desc: "The founding vision behind Delmins, Sangita brings a deep appreciation for nature and a strong belief in making food with care. Her commitment to quality, honesty, and thoughtful food choices continues to shape the company's purpose and direction.",
    initials: 'SS',
    accentColor: '#ffb321',
    image: '/Sangita.png',
  },
  {
    role: 'Managing Director',
    hindiRole: '45+ YEARS EXPERIENCE',
    name: 'Atul Seth',
    quote: '“Building a lasting business takes more than an idea. It takes experience, discipline, and determination.”',
    desc: 'With over 45 years of experience across pharmaceuticals, plastics, foam, and other manufacturing industries, Atul brings extensive business experience, operational understanding, and a disciplined approach to building a lasting enterprise.',
    initials: 'AS',
    accentColor: '#3cbf68',
    image: '/Atul.png',
  },
  {
    role: 'Director',
    hindiRole: 'INNOVATION & GROWTH',
    name: 'Akshat Seth',
    quote: '“Carrying the family vision forward through new ideas, thoughtful innovation, and enduring global growth.”',
    desc: "An entrepreneur with a forward-looking perspective, Akshat combines business experience with the ambition to carry the family's vision forward. He is focused on building Delmins into a trusted consumer food business through new ideas, thoughtful innovation, and long-term growth.",
    initials: 'AS',
    accentColor: '#e8452c',
    image: '/Akshat.png',
  },
]

export default function LeadershipCards() {
  return (
    <section className="retro-leadership-section container">
      {/* Header with Vintage Hindi & English flourishes */}
      <div className="retro-leadership-header">
        <div className="retro-ornament">
          <span></span>
          <span className="retro-tag">GUIDANCE &amp; LEADERSHIP</span>
          <span></span>
        </div>
        <h2 className="retro-leadership-title">The Custodians of Tradition</h2>
        <p className="retro-leadership-subtitle">
          Meet the visionary minds and culinary custodians who brought India’s beloved street ritual from local thelas to dining tables across the globe.
        </p>
      </div>

      {/* 3 Retro Cards Grid */}
      <div className="retro-cards-grid">
        {leaders.map((leader, idx) => (
          <motion.div
            key={leader.name}
            className="retro-leader-card"
            {...reveal}
            transition={{ ...reveal.transition, delay: idx * 0.15 }}
          >
            {/* Corner Decorative Ornaments */}
            <div className="card-corner top-left"></div>
            <div className="card-corner top-right"></div>
            <div className="card-corner bottom-left"></div>
            <div className="card-corner bottom-right"></div>

            {/* Vintage Arched Portrait Frame */}
            <div className="retro-portrait-container">
              <div className="retro-portrait-arch">
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} className="retro-portrait-img" />
                ) : (
                  <div className="retro-portrait-placeholder">
                    {/* Retro Stamp Pattern Background */}
                    <svg className="retro-stamp-bg" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="160" height="200" fill="#2d130e" />
                      <circle cx="80" cy="85" r="54" stroke="#ffb321" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                      <circle cx="80" cy="85" r="46" stroke="#fff4de" strokeWidth="1" opacity="0.4" />
                      {/* Stylized vintage silhouette */}
                      <path
                        d="M80 50C88 50 94 56 94 65C94 74 88 80 80 80C72 80 66 74 66 65C66 56 72 50 80 50ZM80 88C96 88 114 96 114 112V136H46V112C46 96 64 88 80 88Z"
                        fill="#f7e1b5"
                        opacity="0.85"
                      />
                    </svg>
                    <div className="retro-initials-badge">
                      <span>{leader.initials}</span>
                    </div>
                  </div>
                )}
                <div className="retro-portrait-seal">
                  <span>✦ DELMINS ✦</span>
                </div>
              </div>
            </div>

            {/* Role & Name */}
            <div className="retro-card-meta">
              <span className="retro-hindi-badge">{leader.hindiRole}</span>
              <h3 className="retro-card-name">{leader.name}</h3>
              <p className="retro-card-role">{leader.role}</p>
            </div>

            {/* Quote Divider */}
            <div className="retro-card-quote">
              <p>{leader.quote}</p>
            </div>

            {/* Description */}
            <p className="retro-card-desc">{leader.desc}</p>

            {/* Bottom Seal Ribbon */}
            <div className="retro-card-footer">
              <span className="retro-dots">❖ ❖ ❖</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
