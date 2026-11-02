import { useEffect, useState } from 'react'
import { animate, motion } from 'framer-motion'

export default function Loader({ onDone }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    const ctl = animate(0, 100, {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setTimeout(onDone, 250),
    })
    return () => ctl.stop()
  }, [])

  return (
    <motion.div
      className="loader"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.img
        src="/logo-light.png"
        alt="Delmins"
        className="loader-logo"
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="loader-bar"><span style={{ transform: `scaleX(${n / 100})` }} /></div>
      <div className="loader-meta">
        <span>Preparing the perfect burst</span>
        <span className="loader-count">{String(n).padStart(3, '0')}</span>
      </div>
    </motion.div>
  )
}
