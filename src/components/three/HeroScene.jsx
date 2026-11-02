import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { Puri, Leaf, Droplet } from './Puri.jsx'
import Studio from './Studio.jsx'

const BURST_N = 70

function Burst({ trigger, origin }) {
  const mesh = useRef()
  const last = useRef(0)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const parts = useMemo(
    () => Array.from({ length: BURST_N }, () => ({ p: new THREE.Vector3(), v: new THREE.Vector3(), life: 0, s: 0 })),
    []
  )

  useFrame((_, dt) => {
    dt = Math.min(dt, 0.05)
    if (trigger.current !== last.current) {
      last.current = trigger.current
      parts.forEach((d) => {
        const a = Math.random() * Math.PI * 2
        const r = 1 + Math.random() * 2.6
        d.p.copy(origin.current)
        d.v.set(Math.cos(a) * r, 2.5 + Math.random() * 4, Math.sin(a) * r)
        d.life = 1
        d.s = 0.03 + Math.random() * 0.09
      })
    }
    parts.forEach((d, i) => {
      if (d.life > 0) {
        d.v.y -= 9.5 * dt
        d.p.addScaledVector(d.v, dt)
        d.life -= dt * 0.75
      }
      dummy.position.copy(d.p)
      dummy.scale.setScalar(Math.max(d.life, 0) * d.s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, BURST_N]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshPhysicalMaterial color="#4fd683" emissive="#0b4d22" emissiveIntensity={0.4} roughness={0.02} clearcoat={1} />
    </instancedMesh>
  )
}

function HeroPuri({ scroll }) {
  const group = useRef()
  const spin = useRef()
  const punch = useRef(0)
  const trigger = useRef(0)
  const origin = useRef(new THREE.Vector3())
  const tmp = useMemo(() => new THREE.Vector3(), [])
  const { viewport } = useThree()
  const wide = viewport.aspect > 1.05
  const baseX = wide ? viewport.width * 0.2 : 0
  const baseY = wide ? -0.1 : -viewport.height * 0.36
  const baseS = wide ? 1.55 : 1

  useFrame((state, dt) => {
    const p = scroll?.get() ?? 0
    const { pointer } = state
    punch.current = THREE.MathUtils.damp(punch.current, 0, 6, dt)
    const g = group.current
    g.position.x = THREE.MathUtils.damp(g.position.x, baseX + pointer.x * 0.25, 4, dt)
    g.position.y = THREE.MathUtils.damp(g.position.y, baseY + pointer.y * 0.2 + p * 3.2, 4, dt)
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, 0.35 - pointer.y * 0.35 + p * 1.2, 4, dt)
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, -pointer.x * 0.2, 4, dt)
    g.scale.setScalar(baseS * (1 + punch.current * 0.18))
    spin.current.rotation.y += dt * 0.35
    origin.current.copy(g.localToWorld(tmp.set(0, 0.6, 0)))
  })

  const burst = (e) => {
    e.stopPropagation()
    trigger.current += 1
    punch.current = 1
  }

  return (
    <>
      <group ref={group}>
        <group ref={spin}>
          <Puri
            open
            seed={1.3}
            onClick={burst}
            onPointerOver={() => (document.body.style.cursor = 'pointer')}
            onPointerOut={() => (document.body.style.cursor = '')}
          />
          {Array.from({ length: 7 }).map((_, i) => {
            const a = (i / 7) * Math.PI * 2
            return (
              <Float key={i} speed={2 + i * 0.3} floatIntensity={1.2} rotationIntensity={0.6}>
                <Droplet position={[Math.cos(a) * 1.55, 0.2 + Math.sin(i * 2.1) * 0.5, Math.sin(a) * 1.55]} scale={[0.07, 0.095, 0.07].map((s) => s * (0.8 + (i % 3) * 0.35))} />
              </Float>
            )
          })}
        </group>
      </group>
      <Burst trigger={trigger} origin={origin} />
    </>
  )
}

const satellites = [
  { pos: [-4.6, 2.2, -2.5], s: 0.55, open: false, seed: 4 },
  { pos: [-2.6, -2.3, -1.5], s: 0.42, open: true, seed: 7 },
  { pos: [5.4, 2.6, -3], s: 0.5, open: false, seed: 2 },
  { pos: [6.3, -2.4, -2.2], s: 0.62, open: true, seed: 9 },
  { pos: [0.6, 3.2, -4], s: 0.4, open: false, seed: 5 },
  { pos: [-6.2, -0.6, -4], s: 0.5, open: true, seed: 3 },
]

function Scatter({ scroll }) {
  const ref = useRef()
  useFrame((state, dt) => {
    const p = scroll?.get() ?? 0
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, p * 1.6, 4, dt)
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, state.pointer.x * 0.12, 3, dt)
  })
  return (
    <group ref={ref}>
      {satellites.map((s, i) => (
        <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={1.4} floatIntensity={1.6}>
          <Puri open={s.open} seed={s.seed} position={s.pos} scale={s.s} rotation={[0.5 * i, i, 0.3]} />
        </Float>
      ))}
      {[[-3.4, 0.6, -1], [3.2, -1.6, 0.5], [-1.4, 2.6, -2], [2.6, 2.9, -1], [-5, -2.4, -2]].map((p, i) => (
        <Float key={'l' + i} speed={2} rotationIntensity={2.5} floatIntensity={2}>
          <Leaf position={p} scale={0.35 + (i % 2) * 0.12} rotation={[i, i * 0.7, i * 1.3]} />
        </Float>
      ))}
    </group>
  )
}

export default function HeroScene({ scroll }) {
  return (
    <>
      <Studio />
      <HeroPuri scroll={scroll} />
      <Scatter scroll={scroll} />
      <Sparkles count={80} scale={[14, 8, 6]} size={3} speed={0.35} color="#ffb321" opacity={0.7} />
    </>
  )
}
