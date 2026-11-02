import { motion } from 'framer-motion'
import { ease, reveal } from './ease.js'

export const CERTIFICATES = [
  {
    id: 'fssai',
    tag: 'Govt. of India',
    code: 'FSSAI Central',
    reg: 'Lic. 1002401100018',
    title: 'Food Safety Standards',
    desc: 'National central license compliance for hygienic manufacturing & food safety.',
    seal: 'FSSAI CERTIFIED',
    color: '#1e3a8a',
    accent: '#2563eb',
    image: '/fssai-logo.png',
  },
  {
    id: 'up-govt',
    tag: 'Govt. of Uttar Pradesh',
    code: 'उ.प्र. सरकार · FSDA',
    reg: 'State Manufacturing NOC',
    title: 'Food Safety & Standards',
    desc: 'Licensed & verified by Food Safety and Drug Administration, Govt. of Uttar Pradesh.',
    seal: 'UP GOVT APPROVED',
    color: '#8c2a12',
    accent: '#c2410c',
    image: '/up-govt-seal.png',
  },
  {
    id: 'apeda',
    tag: 'Govt. of India · Commerce',
    code: 'एपीडा · APEDA',
    reg: 'RCMC Registered Exporter',
    title: 'Processed Food Export',
    desc: 'Certified by Agricultural and Processed Food Products Export Development Authority.',
    seal: 'APEDA CERTIFIED',
    color: '#15803d',
    accent: '#16a34a',
    image: '/apeda-logo.png',
  },
  {
    id: 'fieo',
    tag: 'Ministry of Commerce',
    code: 'FIEO Exporter',
    reg: 'Apex Export Council',
    title: 'Global Trade Organisation',
    desc: 'Recognised by Federation of Indian Export Organisations for worldwide trade & consignments.',
    seal: 'FIEO VERIFIED',
    color: '#0369a1',
    accent: '#0284c7',
    image: '/fieo-logo.png',
  },
  {
    id: 'startup-india',
    tag: 'DPIIT · Govt. of India',
    code: '#startupindia',
    reg: 'DPIIT Recognized Entity',
    title: 'Innovative Enterprise',
    desc: 'Officially recognized food enterprise under Department for Promotion of Industry and Internal Trade.',
    seal: 'DPIIT RECOGNIZED',
    color: '#c2410c',
    accent: '#ea580c',
    image: '/startup-india-logo.png',
  },
  {
    id: 'bharati',
    tag: 'APEDA · Commerce Ministry',
    code: 'BHARATI',
    reg: 'Agritech & Export Incubation',
    title: 'Agri-Export Acceleration',
    desc: "Recognised under Bharat's Hub for Agritech, Resilience, Advancement & Incubation for Export Enablement.",
    seal: 'BHARATI ACCREDITED',
    color: '#047857',
    accent: '#10b981',
    image: '/bharati-logo.png',
  },
]

export default function Certificates() {
  return (
    <section className="cert-section" id="certificates">
      <div className="container">
        {/* Section Header */}
        <div className="cert-header">
          <motion.p className="cert-eyebrow" {...reveal}>
            ACCREDITATIONS & ASSURANCE
          </motion.p>
          <motion.h2 className="cert-title" {...reveal}>
            Our Certificates &amp; Standards
          </motion.h2>
          <motion.div className="cert-divider" aria-hidden="true" {...reveal}>
            <span className="cert-divider-line" />
            <svg className="cert-divider-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
            <span className="cert-divider-line" />
          </motion.div>
          <motion.p className="cert-subtitle" {...reveal}>
            Every batch of Delmins is produced under rigorous quality management, international
            export hygiene, and state & central government-certified food safety protocols.
          </motion.p>
        </div>

        {/* 6 Attractive Rectangular Retro Cards in a Row */}
        <div className="cert-grid">
          {CERTIFICATES.map((c, i) => (
            <motion.div
              key={c.id}
              className="cert-card-wrap"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.7, ease }}
            >
              <div className="cert-card" style={{ '--card-c': c.color, '--card-acc': c.accent }}>
                {/* 4 Corner Brass Filigree Accents */}
                <span className="cert-corner tl" aria-hidden="true" />
                <span className="cert-corner tr" aria-hidden="true" />
                <span className="cert-corner bl" aria-hidden="true" />
                <span className="cert-corner br" aria-hidden="true" />

                {/* Subtle Official Logo Watermark */}
                {c.image && (
                  <img
                    src={c.image}
                    alt=""
                    className="cert-card-watermark"
                    aria-hidden="true"
                  />
                )}

                {/* Top Authority Pill */}
                {/* <div className="cert-card-tag">{c.tag}</div> */}

                {/* Circular Embossed Medallion Icon / Official Logo */}
                <div className="cert-icon-seal">
                  {c.image ? (
                    <img src={c.image} alt={c.code} className="cert-seal-img" />
                  ) : (
                    <div className="cert-icon-inner">{c.icon}</div>
                  )}
                </div>

                {/* Certificate Main Title & Code */}
                <h3 className="cert-card-title">{c.code}</h3>
                {/* <span className="cert-card-reg">{c.reg}</span> */}

                {/* Standard Name & Brief Details */}
                <div className="cert-card-body">
                  {/* <p className="cert-card-subject">{c.title}</p> */}
                  <p className="cert-card-desc">{c.desc}</p>
                </div>

                {/* Bottom Retro Wax-Stamp / Seal */}
                <div className="cert-card-footer">
                  <div className="cert-stamp">
                    <span className="cert-stamp-star">★</span>
                    <span className="cert-stamp-text">{c.seal}</span>
                    <span className="cert-stamp-star">★</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
