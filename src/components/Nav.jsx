import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'

const links = [
  ['Home', '#top', 'home'],
  ['Our Story', '#our-story', 'story'],
  ['Blog', '#blog', 'blog'],
  ['Contact Us', '#contact', 'contact'],
]

export default function Nav({ currentView, navigate }) {
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(v > prev && v > 400 && !open)
  })

  const handleNav = (targetView, hash) => {
    setOpen(false)
    if (navigate) {
      navigate(targetView)
    } else {
      window.location.hash = hash.replace('#', '')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        className="nav"
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="#top"
          className="nav-logo"
          aria-label="Delmins home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('home', '#top')
          }}
        >
          <img src="/logo-dark.png" alt="Delmins" />
        </a>
        <nav className="nav-links">
          {links.map(([l, h, view]) => (
            <a
              key={h}
              href={h}
              className={currentView === view ? 'nav-active-link' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleNav(view, h)
              }}
            >
              <span className="roll"><span data-text={l}>{l}</span></span>
            </a>
          ))}
        </nav>
        <a
          href="https://blinkit.com/s/?q=delmins"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark nav-cta"
        >
          Order Now
        </a>
        <button className={`burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <i /><i />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at 92% 6%)' }}
            animate={{ clipPath: 'circle(150% at 92% 6%)' }}
            exit={{ clipPath: 'circle(0% at 92% 6%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map(([l, h, view], i) => (
              <motion.a
                key={h}
                href={h}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(view, h)
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
