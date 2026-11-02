import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ease, reveal } from './ease.js'

const interests = ['Kiosk partnership', 'Export / distribution', 'Retail listing', 'Bulk & corporate gifting']

export default function Kiosk() {
  const [interest, setInterest] = useState(interests[0])
  const [sent, setSent] = useState(false)

  // TODO: connect to the client's enquiry inbox / CRM once details are shared.
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="kiosk" id="contact">
      <div className="kiosk-blob b1" />
      <div className="kiosk-blob b2" />
      <div className="container kiosk-grid">
        <div>
          <motion.p className="eyebrow dark" {...reveal}>Grow with Delmins</motion.p>
          <motion.h2 className="h2 kiosk-title" {...reveal}>
            Bring the burst <em>to your city.</em>
          </motion.h2>
          <motion.p className="lede" {...reveal}>
            Open a Delmins kiosk, stock us on your shelves, or import us into your market. Tell us a little about you
            and our team will get back within two working days.
          </motion.p>
        </div>

        <motion.form className="enquiry" onSubmit={submit} {...reveal}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="ok" className="sent" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease }}>
                <span className="sent-burst">✦</span>
                <h3>Thank you!</h3>
                <p>Your enquiry is in. We’ll be in touch soon.</p>
              </motion.div>
            ) : (
              <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                <div className="chips">
                  {interests.map((t) => (
                    <button type="button" key={t} className={interest === t ? 'on' : ''} onClick={() => setInterest(t)}>
                      {t}
                    </button>
                  ))}
                </div>
                <label><span>Name</span><input required name="name" placeholder="Your full name" /></label>
                <div className="two">
                  <label><span>Company</span><input name="company" placeholder="Business name" /></label>
                  <label><span>City / Country</span><input required name="city" placeholder="e.g. Dubai, UAE" /></label>
                </div>
                <label><span>Email or phone</span><input required name="contact" placeholder="How do we reach you?" /></label>
                <label><span>Message</span><textarea name="message" rows={3} placeholder={`Tell us about your ${interest.toLowerCase()} plans`} /></label>
                <button className="btn btn-dark full" type="submit" data-cursor="Send">Send enquiry <span className="arrow">→</span></button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}
