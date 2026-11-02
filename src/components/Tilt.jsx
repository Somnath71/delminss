import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Card that leans toward the pointer and carries a moving spotlight.
export default function Tilt({ children, className = '', max = 12, ...props }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 20 })
  const gx = useTransform(mx, (v) => `${v * 100}%`)
  const gy = useTransform(my, (v) => `${v * 100}%`)
  const glow = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,.22), transparent 55%)`

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const leave = () => { mx.set(0.5); my.set(0.5) }

  return (
    <motion.div
      className={`tilt ${className}`}
      onPointerMove={move}
      onPointerLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      {...props}
    >
      {children}
      <motion.span className="tilt-glow" style={{ background: glow }} />
    </motion.div>
  )
}
