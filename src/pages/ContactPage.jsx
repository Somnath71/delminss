import { useState } from 'react'
import { motion } from 'framer-motion'
import { ease, reveal } from '../components/ease.js'

export default function ContactPage({ onBackHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'export',
    cityCountry: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setSubmitted(true)
  }

  return (
    <article className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero container">
        <div className="contact-hero-header">
          <motion.div className="contact-ornament" {...reveal}>
            <span className="contact-ornament-line" />
            <span className="contact-hindi-tag">Contuct Us</span>
            <span className="contact-ornament-line" />
          </motion.div>
          <motion.h1 className="contact-title" {...reveal}>
            Let's Talk Chaat, Export &amp; Partnerships
          </motion.h1>
          <motion.div className="contact-divider" aria-hidden="true" {...reveal}>
            <span className="contact-divider-line" />
            <svg className="contact-divider-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
            <span className="contact-divider-line" />
          </motion.div>
          <motion.p className="contact-subtitle" {...reveal}>
            Whether you want to stock Delmins in your city, discuss international container consignments,
            or enquire about our hygienic manufacturing — our trade desk is at your service.
          </motion.p>
        </div>

        {/* 2-Column Grid: Left Info & Right Archival Form */}
        <div className="contact-grid">
          {/* Left Column: Official Desks & Direct Channels */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Card 1: Trade & International Export */}
            <div className="contact-card">
              <span className="contact-card-corner tl" aria-hidden="true" />
              <span className="contact-card-corner tr" aria-hidden="true" />
              <span className="contact-card-corner bl" aria-hidden="true" />
              <span className="contact-card-corner br" aria-hidden="true" />

              <div className="contact-card-head">
                <span className="contact-card-icon">🌐</span>
                <div>
                  <span className="contact-card-eyebrow">INTERNATIONAL TRADE DESK</span>
                  <h3 className="contact-card-h3">Global Export &amp; Consignments</h3>
                </div>
              </div>

              <p className="contact-card-p">
                Certified by APEDA and registered with FIEO for compliant food exports to North America,
                the UK, UAE, and Europe. FCL and LCL shipments available with customized export labeling.
              </p>

              <div className="contact-detail-row">
                <span className="contact-detail-label">Export Desk:</span>
                <a href="mailto:export@delminsfoods.com" className="contact-link">export@delminsfoods.com</a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Commercial Phone:</span>
                <a href="tel:+919876543210" className="contact-link">+91 98765 43210 / WhatsApp</a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Accreditations:</span>
                <span className="contact-tag-pill">APEDA</span>
                <span className="contact-tag-pill">FIEO</span>
                <span className="contact-tag-pill">FSSAI Central</span>
              </div>
            </div>

            {/* Card 2: Registered Headquarters */}
            <div className="contact-card">
              <span className="contact-card-corner tl" aria-hidden="true" />
              <span className="contact-card-corner tr" aria-hidden="true" />
              <span className="contact-card-corner bl" aria-hidden="true" />
              <span className="contact-card-corner br" aria-hidden="true" />

              <div className="contact-card-head">
                <span className="contact-card-icon">🏛️</span>
                <div>
                  <span className="contact-card-eyebrow">HEADQUARTERS &amp; FACILITY</span>
                  <h3 className="contact-card-h3">Delmins Food Private Limited</h3>
                </div>
              </div>

              <p className="contact-card-p">
                State-of-the-art automated, touchless puri extrusion and moisture-sealed packaging plant
                operating under stringent FSDA Uttar Pradesh safety protocols.
              </p>

              <div className="contact-detail-row">
                <span className="contact-detail-label">General Desk:</span>
                <a href="mailto:namaste@delminsfoods.com" className="contact-link">namaste@delminsfoods.com</a>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Location:</span>
                <span className="contact-plain-val">Uttar Pradesh, India (Pin 208001)</span>
              </div>
              <div className="contact-detail-row">
                <span className="contact-detail-label">Central Lic:</span>
                <span className="contact-plain-val">FSSAI 1002401100018</span>
              </div>
            </div>

            {/* Card 3: Quick Personal Delivery Notice */}
            <div className="contact-blinkit-callout">
              <div className="cb-icon">⚡</div>
              <div className="cb-text">
                <b>Craving pani puri right now?</b>
                <p>Delmins ready-to-fill and fry-at-home packs are delivered in 10 minutes on Blinkit.</p>
              </div>
              <a
                href="https://blinkit.com/s/?q=delmins"
                target="_blank"
                rel="noreferrer"
                className="btn btn-saffron btn-sm"
              >
                Open Blinkit →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Archival Inquiry Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="contact-form-ledger">
              {/* Corner Ornaments */}
              <span className="ledger-corner tl" aria-hidden="true" />
              <span className="ledger-corner tr" aria-hidden="true" />
              <span className="ledger-corner bl" aria-hidden="true" />
              <span className="ledger-corner br" aria-hidden="true" />

              <div className="ledger-header">
                <div className="ledger-stamp-box">
                  <span className="ledger-stamp-star">★</span>
                  <span>DELMINS OFFICIAL DISPATCH</span>
                  <span className="ledger-stamp-star">★</span>
                </div>
                <h2 className="ledger-title">Trade &amp; General Inquiry Form</h2>
                <p className="ledger-subtitle">Fill in your requirements. Our trade desk will respond within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="ledger-success">
                  <div className="ledger-success-seal">
                    <span>✦</span>
                    <b>INQUIRY RECORDED</b>
                    <span>✦</span>
                  </div>
                  <h3> Thank you, {formData.name}.</h3>
                  <p>
                    Your dispatch note has been successfully entered into our trade register.
                    Our representative will get in touch with you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'export',
                        cityCountry: '',
                        message: '',
                      })
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="ledger-form" onSubmit={handleSubmit}>
                  {/* Inquiry Type Radio / Pill Selector */}
                  <div className="form-group">
                    <label className="form-label">Nature of Inquiry</label>
                    <div className="inquiry-type-grid">
                      {[
                        { id: 'export', label: 'Export / Worldwide Consignment' },
                        { id: 'distro', label: 'Domestic Stockist & Retail' },
                        { id: 'bulk', label: 'Catering & Bulk Celebrations' },
                        { id: 'general', label: 'General & Customer Feedback' },
                      ].map((t) => (
                        <label
                          key={t.id}
                          className={`inquiry-pill ${formData.inquiryType === t.id ? 'active' : ''}`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={t.id}
                            checked={formData.inquiryType === t.id}
                            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          />
                          <span>{t.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Your Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. vikram@importgulf.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone & City/Country */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +91 98234 56789"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cityCountry">
                        City &amp; Country
                      </label>
                      <input
                        id="cityCountry"
                        type="text"
                        placeholder="e.g. Dubai, UAE / Toronto, CA"
                        className="form-input"
                        value={formData.cityCountry}
                        onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Details / Order Specifications
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your distribution footprint, required container volume, or the event date..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Form Footer */}
                  <div className="ledger-footer">
                    <p className="ledger-disclaimer">
                      🔒 Your commercial details are held strictly confidential. No marketing spam.
                    </p>
                    <button type="submit" className="btn btn-saffron ledger-submit">
                      <span>Send Official Dispatch</span>
                      <span className="arrow">✦</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trade FAQ Strip */}
      <section className="contact-faq-strip container">
        <div className="c-faq-box">
          <span className="c-faq-tag">QUICK TRADE FAQ</span>
          <h3 className="c-faq-title">Frequently Asked Commercial Questions</h3>
          <div className="c-faq-grid">
            <div className="c-faq-item">
              <b>What is the typical shelf life of export shipments?</b>
              <p>Delmins puris feature a moisture-barrier nitrogen-sealed foil pouch providing an unbroken 9-month shelf life without chemical preservatives.</p>
            </div>
            <div className="c-faq-item">
              <b>Do you support private labeling or custom language packaging?</b>
              <p>Yes. For multi-container consignments, we provide bilingual nutrition panels complying with US FDA, CFIA (Canada), and Gulf GSO standards.</p>
            </div>
            <div className="c-faq-item">
              <b>How are samples dispatched to prospective international buyers?</b>
              <p>Sample testing cartons can be couriered via DHL/FedEx with full phytosanitary and batch test certificates upon request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="container contact-bottom-nav">
        <button className="btn btn-dark" onClick={onBackHome}>
          ← Back to Homepage
        </button>
      </section>
    </article>
  )
}

