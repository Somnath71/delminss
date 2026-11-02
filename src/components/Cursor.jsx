import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 350, damping: 30 })
  const sy = useSpring(y, { stiffness: 350, damping: 30 })
  const [label, setLabel] = useState('')
  const [hover, setHover] = useState(false)
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches)

  useEffect(() => {
    if (!enabled) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target.closest?.('[data-cursor], a, button, summary')
      setHover(!!el)
      setLabel(el?.dataset?.cursor || '')
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className={`cursor-ring ${label ? 'has-label' : ''}`}
        style={{ x: sx, y: sy }}
        animate={{ scale: label ? 2.6 : hover ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        {label && <span>{label}</span>}
      </motion.div>
    </>
  )
}
