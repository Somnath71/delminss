import { useMemo } from 'react'
import * as THREE from 'three'

const OPEN_AT = 0.62

function noise(x, y, z) {
  return (
    Math.sin(x * 5.1 + y * 1.7) * Math.cos(y * 4.3 + z * 2.1) * 0.5 +
    Math.sin(z * 7.7 + x * 3.3) * 0.3 +
    Math.sin((x + y + z) * 11.0) * 0.2
  )
}

// A puffed, slightly squashed, blistered shell. `open` cracks the top so the pani shows.
function makePuriGeometry(open, seed) {
  const g = new THREE.SphereGeometry(1, 96, 64, 0, Math.PI * 2, open ? OPEN_AT : 0, open ? Math.PI - OPEN_AT : Math.PI)
  const pos = g.attributes.position
  const colors = []
  const v = new THREE.Vector3()
  const light = new THREE.Color('#f3c46f')
  const dark = new THREE.Color('#b0601b')
  const c = new THREE.Color()
  const rimY = Math.cos(OPEN_AT)

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i)
    const n = noise(v.x + seed, v.y, v.z - seed)
    if (open && v.y > rimY - 0.04) {
      const ang = Math.atan2(v.z, v.x)
      v.y -= (Math.sin(ang * 9 + seed) * 0.5 + 0.5) * 0.07 + Math.abs(Math.sin(ang * 23 + seed * 3)) * 0.03
    }
    v.multiplyScalar(1 + n * 0.035)
    v.y *= 0.8
    pos.setXYZ(i, v.x, v.y, v.z)
    const t = THREE.MathUtils.clamp(0.3 + n * 0.55 + (v.y < -0.45 ? 0.25 : 0), 0, 1)
    c.copy(light).lerp(dark, t)
    colors.push(c.r, c.g, c.b)
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  g.computeVertexNormals()
  return g
}

export function Puri({ open = false, seed = 0, ...props }) {
  const geo = useMemo(() => makePuriGeometry(open, seed), [open, seed])
  return (
    <group {...props}>
      <mesh geometry={geo}>
        <meshStandardMaterial vertexColors roughness={0.6} metalness={0.04} side={THREE.DoubleSide} />
      </mesh>
      {open && (
        <group position={[0, 0.44, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.76, 48]} />
            <meshPhysicalMaterial color="#3cbf68" emissive="#0e5a2a" emissiveIntensity={0.35} roughness={0.06} clearcoat={1} />
          </mesh>
          {[[0.2, 0.04, 0.1], [-0.18, 0.05, -0.14], [0.02, 0.06, -0.3], [-0.28, 0.04, 0.2]].map((p, i) => (
            <mesh key={i} position={p} scale={[1, 0.85, 1]}>
              <sphereGeometry args={[0.1, 20, 20]} />
              <meshStandardMaterial color={i % 2 ? '#d8b276' : '#e7c98d'} roughness={0.8} />
            </mesh>
          ))}
          <mesh position={[0.06, 0.05, 0.28]} rotation={[0.4, 0.6, 0.2]}>
            <boxGeometry args={[0.18, 0.12, 0.16]} />
            <meshStandardMaterial color="#e9c46a" roughness={0.9} />
          </mesh>
        </group>
      )}
    </group>
  )
}

const leafShape = (() => {
  const s = new THREE.Shape()
  s.moveTo(0, 0)
  s.bezierCurveTo(0.35, 0.2, 0.4, 0.75, 0, 1.1)
  s.bezierCurveTo(-0.4, 0.75, -0.35, 0.2, 0, 0)
  return s
})()

export function Leaf(props) {
  return (
    <mesh {...props}>
      <extrudeGeometry args={[leafShape, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.02, bevelSegments: 2 }]} />
      <meshStandardMaterial color="#2f9e4f" roughness={0.5} side={THREE.DoubleSide} />
    </mesh>
  )
}

export function Droplet(props) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial color="#4fd683" emissive="#0b4d22" emissiveIntensity={0.3} roughness={0.02} clearcoat={1} transparent opacity={0.9} />
    </mesh>
  )
}
