import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Counter({ to, from = 0, duration = 2, format = (v) => Math.round(v).toLocaleString('en-IN') }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [v, setV] = useState(from)
  useEffect(() => {
    if (!inView) return
    const c = animate(from, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: setV })
    return () => c.stop()
  }, [inView])
  return <span ref={ref}>{format(v)}</span>
}
