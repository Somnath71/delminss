import { motion } from 'framer-motion'
import { reveal } from '../components/ease.js'

export default function TermsPage({ onBackHome }) {
  return (
    <article className="legal-page">
      <div className="container">
        {/* Header */}
        <div className="legal-hero-header">
          <motion.div className="legal-ornament" {...reveal}>
            <span className="legal-ornament-line" />
            <span className="legal-hindi-tag">Terms and Conditions</span>
            <span className="legal-ornament-line" />
          </motion.div>
          <motion.h1 className="legal-title" {...reveal}>
            Terms and Conditions
          </motion.h1>
          <motion.div className="legal-divider" aria-hidden="true" {...reveal}>
            <span className="legal-divider-line" />
            <svg className="legal-divider-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
            <span className="legal-divider-line" />
          </motion.div>
        </div>

        {/* Archival Document Container */}
        <div className="legal-document-card">
          <span className="legal-corner tl" aria-hidden="true" />
          <span className="legal-corner tr" aria-hidden="true" />
          <span className="legal-corner bl" aria-hidden="true" />
          <span className="legal-corner br" aria-hidden="true" />

          <div className="legal-body">
            <p className="legal-lead">
              Welcome to DelminsFood. Please read these Terms and Conditions carefully before accessing or using our website and services.
            </p>

            <h2 className="legal-h2">1. Overview</h2>
            <p>
              This website is operated by Delmins Food. Throughout the site, the terms "we", "us" and "our" refer to Delmins Food. Delmins Food offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>

            <h2 className="legal-h2">2. Online Store Terms</h2>
            <p>
              By agreeing to these Terms and Conditions, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.
            </p>

            <h2 className="legal-h2">3. General Conditions</h2>
            <p>
              We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.
            </p>

            <h2 className="legal-h2">4. Accuracy, Completeness and Timeliness of Information</h2>
            <p>
              We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions.
            </p>

            <h2 className="legal-h2">5. Modifications to the Service and Prices</h2>
            <p>
              Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </p>

            <h2 className="legal-h2">6. Products and Services</h2>
            <p>
              Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
            </p>

            <h2 className="legal-h2">7. Accuracy of Billing and Account Information</h2>
            <p>
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.
            </p>

            <h2 className="legal-h2">8. Governing Law</h2>
            <p>
              These Terms and Conditions and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India.
            </p>

            <h2 className="legal-h2">9. Contact Information</h2>
            <p>
              Questions about the Terms and Conditions should be sent to us at <a href="mailto:info@delminsfood.com" className="legal-link">info@delminsfood.com</a> or <a href="mailto:delminsfood@gmail.com" className="legal-link">delminsfood@gmail.com</a>.
            </p>
            <div className="legal-address-box">
              <p>
                <strong>Delmins Food Private Limited</strong><br />
                Sarvodaya Nagar, near Deoki Chauraha, Moti Vihar Society Rawat Pur,<br />
                Kanpur, Uttar Pradesh – 208025, India.<br />
                Phone: +91 84 0022 2224
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="legal-bottom-nav">
          <button className="btn btn-dark" onClick={onBackHome}>
            ← Back to Homepage
          </button>
        </div>
      </div>
    </article>
  )
}

