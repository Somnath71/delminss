import { useEffect, useRef, useState, Suspense } from 'react'
import { useInView } from 'framer-motion'
import { Canvas } from '@react-three/fiber'

// Mounts the WebGL canvas only once it nears the viewport, and pauses rendering when off-screen.
export default function LazyCanvas({ children, className, ...props }) {
  const ref = useRef()
  const inView = useInView(ref, { margin: '300px 0px' })
  const [seen, setSeen] = useState(false)
  useEffect(() => { if (inView) setSeen(true) }, [inView])

  return (
    <div ref={ref} className={className}>
      {seen && (
        <Canvas dpr={[1, 1.75]} frameloop={inView ? 'always' : 'never'} gl={{ antialias: true, alpha: true }} {...props}>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
