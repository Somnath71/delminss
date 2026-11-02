import { motion } from 'framer-motion'
import { ease, reveal } from '../components/ease.js'
import LeadershipCards from '../components/LeadershipCards.jsx'
import {
  RetroCornerBracket,
  VisionStampSvg,
  MissionStampSvg,
  IconNaturalRetro,
  IconQualityRetro,
  IconInnovationRetro,
  IconTrustRetro,
  IconGrowthRetro,
} from '../components/RetroEmblems.jsx'

export default function OurStoryPage({ onBackHome }) {
  return (
    <article className="our-story-page">
      {/* ─── 1. The Genesis: It Started with a Thought ─── */}
      <section className="bazaar-heritage-section container">
        {/* Top Ornament / Subheading */}
        <div className="bazaar-heritage-header">
          <div className="bazaar-ornament">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
          <p className="bazaar-hindi-tag">OUR HERITAGE · OUR STORY</p>
          <h1 className="bazaar-title">It Started with a Thought.<br />To Build Something Pure. Something Real.</h1>
          <p className="bazaar-subtitle">
            Every meaningful journey begins with a belief. At Delmins, ours began with a simple thought: food should be made with care, and people should feel confident about what they bring into their homes.
          </p>
        </div>

        {/* Feature Story Card */}
        <div className="bazaar-story-card">
          <div className="bazaar-image-wrap">
            <img
              src="/street-thela.png"
              alt="Delmins Food Story"
              className="bazaar-image"
            />
          </div>

          <div className="bazaar-content">
            <span className="bazaar-meta-tag">THE FOUNDING VISION</span>
            <h3 className="bazaar-content-title">Inspired by Nature, Guided by Honesty</h3>
            <p className="bazaar-content-p">
              Inspired by her childhood memories of farms and gardens, Sangita Seth developed a deep appreciation for nature and the food it provides. As concerns about food adulteration and unnecessary additives grew, so did her desire to build something different — a food business guided by honesty, quality, and respect for what we eat.
            </p>
            <p className="bazaar-content-p">
              Together with Atul Seth and Akshat Seth, she turned that thought into Delmins — combining over 45 years of industrial and operational discipline with an unwavering commitment to 100% natural, preservative-free Indian foods.
            </p>

            <div className="bazaar-quote-box">
              <p>
                “Food should be made with care, and people should feel confident about what they bring into their homes.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. The Delmins Journey Timeline: Experience That Builds Confidence ─── */}
      <section className="timeline-journey-section">
        <div className="container timeline-journey-inner">
          <div className="timeline-journey-header">
            <span className="timeline-journey-tag">OUR STRENGTH · THE DELMINS JOURNEY</span>
            <h2 className="timeline-journey-title">Experience That Builds Confidence</h2>
            <p className="timeline-header-sub">
              Building a lasting business takes more than an idea. It takes experience, discipline, and the determination to turn a vision into reality.
            </p>
          </div>

          <div className="timeline-track-wrap">
            <div className="timeline-vertical-line" />

            <div className="timeline-steps">
              {/* Chapter 1 */}
              <div className="timeline-step">
                <div className="timeline-node" />
                <div className="timeline-step-content">
                  <span className="timeline-hindi-label">THE FOUNDING THOUGHT</span>
                  <h3 className="timeline-step-title">The Founding Thought</h3>
                  <p className="timeline-step-desc">
                    At Delmins, ours began with a simple thought: food should be made with care, and people should feel confident about what they bring into their homes. Inspired by childhood memories of farms and gardens, Sangita Seth set out to build a food business guided by honesty, quality, and zero compromises on ingredients.
                  </p>
                </div>
              </div>

              {/* Chapter 2 */}
              <div className="timeline-step">
                <div className="timeline-node" />
                <div className="timeline-step-content">
                  <span className="timeline-hindi-label">45+ YEARS OF EXPERIENCE</span>
                  <h3 className="timeline-step-title">45+ Years of Manufacturing Mastery</h3>
                  <p className="timeline-step-desc">
                    Atul Seth brings over 45 years of experience across diverse industries, including pharmaceuticals, plastics, and foam manufacturing. His journey has shaped a deep understanding of manufacturing operations, hygiene protocols, and the discipline required to build and sustain an enterprise that stands the test of time.
                  </p>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="timeline-step">
                <div className="timeline-node" />
                <div className="timeline-step-content">
                  <span className="timeline-hindi-label">TASTE &amp; CONVENIENCE</span>
                  <h3 className="timeline-step-title">Good Food. Thoughtfully Made.</h3>
                  <p className="timeline-step-desc">
                    We believe food should be enjoyable, convenient, and made with care. Our pani puri kit brings the familiar taste of UP-style golgappa into the home — 100% natural, without preservatives or added chemicals — making it easier to enjoy a much-loved street-food favourite whenever the craving strikes.
                  </p>
                </div>
              </div>

              {/* Chapter 4 */}
              <div className="timeline-step">
                <div className="timeline-node" />
                <div className="timeline-step-content">
                  <span className="timeline-hindi-label">LOOKING TO THE FUTURE</span>
                  <h3 className="timeline-step-title">Forward-Looking Global Growth</h3>
                  <p className="timeline-step-desc">
                    Sangita's founding vision gives Delmins its purpose, while Akshat Seth brings an entrepreneurial spirit and a forward-looking perspective to the family's ambition. Together, we combine experience, purpose, and fresh thinking to build a trusted consumer food company expanding to homes across India and international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Milestone Metrics */}
          <div className="timeline-stats-row">
            <div className="t-stat-card">
              <span className="t-stat-num">45+</span>
              <span className="t-stat-label">Years of Industry Experience</span>
            </div>
            <div className="t-stat-card">
              <span className="t-stat-num">100%</span>
              <span className="t-stat-label">Natural Ingredients</span>
            </div>
            <div className="t-stat-card">
              <span className="t-stat-num">0</span>
              <span className="t-stat-label">Preservatives or Added Chemicals</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Directors Message Section: Built on Experience. Guided by Purpose. ─── */}
      <section className="directors-message-section container">
        <div className="directors-message-header">
          <div className="dm-ornament">
            <span className="dm-line"></span>
            <span className="dm-tag">A MESSAGE FROM THE DIRECTORS</span>
            <span className="dm-line"></span>
          </div>
          <h2 className="dm-title">Built on Experience. Guided by Purpose.</h2>
        </div>

        <div className="directors-card">
          <div className="directors-card-quote-mark" aria-hidden="true">“</div>

          <div className="directors-card-body">
            <p>
              Delmins began with a belief that has remained at the heart of our journey: food should be made with care, and the people who enjoy it should feel confident in their choices.
            </p>
            <p>
              As a family, we bring together different experiences, perspectives, and strengths, united by the ambition to build something meaningful and lasting.
            </p>
            <p>
              Our professional journeys have taught us the importance of discipline, consistency, and the patience required to build a business that stands the test of time. We bring this understanding to Delmins, alongside a genuine commitment to developing food products that reflect our values and respond to the needs of modern consumers.
            </p>
            <p>
              We recognise that trust cannot be built through promises alone. It must be earned through the quality of our products, the responsibility with which we operate, and our willingness to keep improving.
            </p>
            <p>
              As we look ahead, our ambition is to build Delmins into an enduring enterprise — one that grows with purpose, creates lasting relationships, and remains true to the principles that inspired its beginning.
            </p>
            <p>
              We are proud of the foundation we are building and approach the future with the determination to keep learning, innovating, and earning the confidence of the people we serve.
            </p>
          </div>

          <div className="directors-card-divider" />

          <div className="directors-card-signoff">
            <h3 className="directors-signoff-title">The Directors</h3>
            <p className="directors-signoff-company">DELMINS FOOD PRIVATE LIMITED</p>
          </div>
        </div>
      </section>

      {/* ─── 4. Retro Leadership Cards Section: Meet Our Directors ─── */}
      <LeadershipCards />

      {/* ─── 5. What Drives Us: Vision & Mission Section ─── */}
      <section className="vision-mission-section container">
        <div className="vision-mission-header">
          <div className="vm-ornament">
            <span></span>
            <span className="vm-tag">✦ WHAT DRIVES US ✦</span>
            <span></span>
          </div>
          <h2 className="vm-main-title">Our Vision &amp; Mission</h2>
          <p className="vm-main-subtitle">
            The enduring principles and sacred commitments that guide every recipe, batch, and promise we craft.
          </p>
        </div>

        <div className="vm-cards-grid">
          {/* Card 1: Vision */}
          <div className="vm-card vm-vision-card">
            {/* 4 Ornamental Retro Corner Brackets */}
            <RetroCornerBracket position="top-left" />
            <RetroCornerBracket position="top-right" />
            <RetroCornerBracket position="bottom-left" />
            <RetroCornerBracket position="bottom-right" />

            {/* Vintage Postmark Stamp Badge */}
            <div className="vm-stamp-wrapper" aria-hidden="true">
              <VisionStampSvg size={82} />
            </div>

            {/* Vintage Tag Eyebrow */}
            <div className="vm-card-eyebrow">
              <span className="vm-eyebrow-star">✦</span>
              <span className="vm-eyebrow-text">दृष्टिकोण · THE GUIDING NORTH STAR</span>
              <span className="vm-eyebrow-star">✦</span>
            </div>

            <h3 className="vm-card-title">Our Vision</h3>

            {/* Ornate Flourish Divider */}
            <div className="vm-card-flourish" aria-hidden="true">
              <span className="vm-flourish-line"></span>
              <span className="vm-flourish-symbol">❖</span>
              <span className="vm-flourish-line"></span>
            </div>

            {/* Lead Manifesto with Vintage Illuminated Quote Frame */}
            <div className="vm-quote-frame">
              <span className="vm-quote-mark" aria-hidden="true">“</span>
              <p className="vm-card-lead">
                To build Delmins into a trusted and respected name in Indian households, known for quality, natural ingredients, and thoughtful food innovation.
              </p>
            </div>

            <p className="vm-card-body">
              We aspire to create a lasting food business that brings together the richness of Indian food traditions and the needs of modern consumers, growing across products and markets while remaining true to our founding values.
            </p>

            {/* Three Retro Vision Pillars to balance the card height beautifully */}
            <div className="vm-vision-pillars">
              <div className="vm-pillar-item">
                <div className="vm-pillar-icon-box">🏛️</div>
                <div className="vm-pillar-info">
                  <h5 className="vm-pillar-title">Authentic Heritage</h5>
                  <p className="vm-pillar-desc">Reviving centuries-old street recipes with reverence and pride.</p>
                </div>
              </div>

              <div className="vm-pillar-item">
                <div className="vm-pillar-icon-box">🌾</div>
                <div className="vm-pillar-info">
                  <h5 className="vm-pillar-title">Honest Purity</h5>
                  <p className="vm-pillar-desc">100% natural, clean labels with zero artificial preservatives.</p>
                </div>
              </div>

              <div className="vm-pillar-item">
                <div className="vm-pillar-icon-box">🌍</div>
                <div className="vm-pillar-info">
                  <h5 className="vm-pillar-title">Global Distinction</h5>
                  <p className="vm-pillar-desc">Export-grade ISO &amp; HACCP certified manufacturing protocols.</p>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="vm-vision-footer-banner">
              <span>✦</span>
              <span>ROOTED IN TRADITION · CRAFTED FOR GENERATIONS</span>
              <span>✦</span>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="vm-card vm-mission-card">
            {/* 4 Ornamental Retro Corner Brackets */}
            <RetroCornerBracket position="top-left" />
            <RetroCornerBracket position="top-right" />
            <RetroCornerBracket position="bottom-left" />
            <RetroCornerBracket position="bottom-right" />

            {/* Vintage Postmark Stamp Badge */}
            <div className="vm-stamp-wrapper" aria-hidden="true">
              <MissionStampSvg size={82} />
            </div>

            {/* Vintage Tag Eyebrow */}
            <div className="vm-card-eyebrow">
              <span className="vm-eyebrow-star">✦</span>
              <span className="vm-eyebrow-text">संकल्प · OUR SACRED PLEDGE</span>
              <span className="vm-eyebrow-star">✦</span>
            </div>

            <h3 className="vm-card-title">Our Mission</h3>

            {/* Ornate Flourish Divider */}
            <div className="vm-card-flourish" aria-hidden="true">
              <span className="vm-flourish-line"></span>
              <span className="vm-flourish-symbol">❖</span>
              <span className="vm-flourish-line"></span>
            </div>

            {/* Lead Manifesto Quote */}
            <div className="vm-quote-frame">
              <span className="vm-quote-mark" aria-hidden="true">“</span>
              <p className="vm-card-lead">
                To make everyday food experiences more enjoyable and convenient through thoughtfully developed products and an unwavering commitment to quality.
              </p>
            </div>

            {/* Retro Ribbon / Commitment Callout */}
            <div className="vm-commit-banner">
              <span className="vm-commit-banner-text">✦ OUR FIVE GUIDING COMMITMENTS ✦</span>
            </div>

            <ul className="vm-commit-list">
              <li className="vm-commit-ticket">
                <div className="vm-ticket-medallion">
                  <IconNaturalRetro size={34} />
                </div>
                <div className="vm-ticket-content">
                  <strong className="vm-ticket-title">Natural Ingredients</strong>
                  <p className="vm-ticket-desc">Creating products aligned with our commitment to natural food, without preservatives or added chemicals.</p>
                </div>
              </li>

              <li className="vm-commit-ticket">
                <div className="vm-ticket-medallion">
                  <IconQualityRetro size={34} />
                </div>
                <div className="vm-ticket-content">
                  <strong className="vm-ticket-title">Consistent Quality</strong>
                  <p className="vm-ticket-desc">Maintaining disciplined manufacturing practices and uncompromising attention to detail.</p>
                </div>
              </li>

              <li className="vm-commit-ticket">
                <div className="vm-ticket-medallion">
                  <IconInnovationRetro size={34} />
                </div>
                <div className="vm-ticket-content">
                  <strong className="vm-ticket-title">Thoughtful Innovation</strong>
                  <p className="vm-ticket-desc">Developing products inspired by the authentic street tastes and dining experiences people cherish.</p>
                </div>
              </li>

              <li className="vm-commit-ticket">
                <div className="vm-ticket-medallion">
                  <IconTrustRetro size={34} />
                </div>
                <div className="vm-ticket-content">
                  <strong className="vm-ticket-title">Consumer Trust</strong>
                  <p className="vm-ticket-desc">Being responsible in our choices, honest in our labeling, and transparent in our communication.</p>
                </div>
              </li>

              <li className="vm-commit-ticket">
                <div className="vm-ticket-medallion">
                  <IconGrowthRetro size={34} />
                </div>
                <div className="vm-ticket-content">
                  <strong className="vm-ticket-title">Sustainable Growth</strong>
                  <p className="vm-ticket-desc">Expanding our product range thoughtfully while preserving the timeless values on which Delmins was founded.</p>
                </div>
              </li>
            </ul>

            {/* Vintage Artisan Pledge Footer Note with Wax Seal touch */}
            <div className="vm-card-footer-note">
              <div className="vm-footer-seal" aria-hidden="true">✦</div>
              <p className="vm-footer-quote">
                “We believe a trusted food company is built not only on what it promises, but on how consistently it delivers.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Our Commitment Section: Building Something That Lasts ─── */}
      <section className="commitment-section">
        <div className="commitment-ring commitment-ring-tl" aria-hidden="true" />
        <div className="commitment-ring commitment-ring-br" aria-hidden="true" />

        <div className="container commitment-inner">
          <div className="commitment-tag-wrap">
            <span className="commitment-line" />
            <span className="commitment-tag">OUR COMMITMENT</span>
            <span className="commitment-line" />
          </div>

          <h2 className="commitment-title">Building Something That Lasts</h2>

          <div className="commitment-body">
            <p>
              We see Delmins as more than a business. It is a long-term commitment to creating products people value and a company they can trust.
            </p>
            <p>
              We understand that trust is earned through consistent quality, responsible choices, and the promises we keep. That belief guides us as we grow, innovate, and bring new products to more households.
            </p>
            <p>
              Our ambition is to build an enduring food company that combines the strength of experience with the courage to think differently — creating something meaningful for today's consumers and future generations.
            </p>
          </div>

          <p className="commitment-brand-motto">
            Delmins — Delicacies Served in Minutes.
          </p>
        </div>
      </section>

      {/* ─── 7. Call To Action at Bottom of Page ─── */}
      <section className="container">
        <div className="story-cta-box">
          <h2>Ready to taste the legacy?</h2>
          <p>Order a Delmins pack on Blinkit or reach out for international export partnerships.</p>
          <div className="story-cta-buttons">
            <a className="btn btn-saffron" href="https://blinkit.com/s/?q=delmins" target="_blank" rel="noreferrer">
              Order on Blinkit <span className="arrow">→</span>
            </a>
            <button className="btn btn-dark" onClick={onBackHome}>
              Back to Explore Home
            </button>
          </div>
        </div>
      </section>
    </article>
  )
}
