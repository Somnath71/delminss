import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import OurStoryPage from './pages/OurStoryPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'

export default function App() {
  const [ready, setReady] = useState(false)

  const getViewFromHash = () => {
    const hash = window.location.hash
    if (hash === '#our-story') return 'story'
    if (hash === '#contact') return 'contact'
    if (hash === '#blog') return 'blog'
    if (hash === '#privacy-policy' || hash === '#privacy') return 'privacy'
    if (hash === '#terms-and-conditions' || hash === '#terms') return 'terms'
    return 'home'
  }

  const [currentView, setCurrentView] = useState(getViewFromHash)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const handleHash = () => {
      setCurrentView(getViewFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
  }, [ready])

  const navigate = (view) => {
    setCurrentView(view)
    let targetHash = ''
    if (view === 'story') targetHash = 'our-story'
    else if (view === 'privacy') targetHash = 'privacy-policy'
    else if (view === 'terms') targetHash = 'terms-and-conditions'
    else if (view !== 'home') targetHash = view

    if (window.location.hash !== (targetHash ? `#${targetHash}` : '')) {
      window.location.hash = targetHash
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>{!ready && <Loader key="loader" onDone={() => setReady(true)} />}</AnimatePresence>
      <motion.div className="scroll-bar" style={{ scaleX: progress }} />
      <div className="grain" aria-hidden />
      <Nav currentView={currentView} navigate={navigate} />
      <main>
        {currentView === 'story' && <OurStoryPage onBackHome={() => navigate('home')} />}
        {currentView === 'contact' && <ContactPage onBackHome={() => navigate('home')} />}
        {currentView === 'blog' && <BlogPage onBackHome={() => navigate('home')} />}
        {currentView === 'privacy' && <PrivacyPolicyPage onBackHome={() => navigate('home')} />}
        {currentView === 'terms' && <TermsPage onBackHome={() => navigate('home')} />}
        {currentView === 'home' && (
          <HomePage ready={ready} onOpenStory={() => navigate('story')} />
        )}
      </main>
      <Footer navigate={navigate} />
    </>
  )
}
