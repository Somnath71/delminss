export default function Footer({ navigate }) {
  const handleNav = (e, view) => {
    e.preventDefault()
    if (navigate) {
      navigate(view)
    } else {
      let targetHash = ''
      if (view === 'story') targetHash = 'our-story'
      else if (view === 'privacy') targetHash = 'privacy-policy'
      else if (view === 'terms') targetHash = 'terms-and-conditions'
      else if (view !== 'home') targetHash = view
      window.location.hash = targetHash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer-retro">
      <div className="container footer-retro-inner">
        {/* Brand Logo */}
        <a
          href="#top"
          className="footer-retro-logo-wrap"
          aria-label="Delmins home"
          onClick={(e) => handleNav(e, 'home')}
        >
          <img
            src="/logo-light.png"
            alt="Delmins"
            className="footer-retro-logo"
          />
        </a>

        {/* Tagline / Subtitle */}
        <p className="footer-retro-sub">
          A love letter to India's street food tradition — the craft, the regions, the ritual and the crunch.
        </p>

        {/* Navigation Links */}
        <nav className="footer-retro-nav">
          <a href="#top" onClick={(e) => handleNav(e, 'home')}>
            Home
          </a>
          <a href="#our-story" onClick={(e) => handleNav(e, 'story')}>
            Our Story
          </a>
          <a href="#blog" onClick={(e) => handleNav(e, 'blog')}>
            Chronicles / Blog
          </a>
          <a href="#contact" onClick={(e) => handleNav(e, 'contact')}>
            Contact Us
          </a>
        </nav>

        {/* Legal Policy Links */}
        <div className="footer-retro-legal">
          <a
            href="#privacy-policy"
            className="footer-legal-link"
            onClick={(e) => handleNav(e, 'privacy')}
          >
            Privacy Policy
          </a>
          <span className="footer-legal-sep">✦</span>
          <a
            href="#terms-and-conditions"
            className="footer-legal-link"
            onClick={(e) => handleNav(e, 'terms')}
          >
            Terms &amp; Conditions
          </a>
        </div>

        {/* Divider */}
        <div className="footer-retro-line" />

        {/* Bottom Credits */}
        <div className="footer-retro-bottom">
          <span>✦ © 2026 DELMINS FOODS. All Rights Reserved ✦</span>
        </div>
      </div>
    </footer>
  )
}
