import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const R = 1.6
const D2R = Math.PI / 180

function latLon(lat, lon, r = R) {
  const phi = (90 - lat) * D2R
  const th = (lon + 180) * D2R
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th))
}

const HOME = { name: 'India', lat: 28.6, lon: 77.2 }
export const DESTINATIONS = [
  { name: 'Dubai', lat: 25.2, lon: 55.3, color: '#ffb321' },
  { name: 'Scotland', lat: 55.95, lon: -3.19, color: '#e8452c' },
  { name: 'Canada', lat: 43.65, lon: -79.38, color: '#7fe3a6' },
]

function Atmosphere() {
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        uniforms: { c: { value: new THREE.Color('#3cbf68') } },
        vertexShader: `varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `uniform vec3 c; varying vec3 vN; void main(){ float i = pow(0.72 - dot(vN, vec3(0.,0.,1.)), 3.0); gl_FragColor = vec4(c, 1.0) * i; }`,
      }),
    []
  )
  return (
    <mesh scale={1.16} material={mat}>
      <sphereGeometry args={[R, 64, 64]} />
    </mesh>
  )
}

function Marker({ pos, color, label, home, occlude }) {
  const ring = useRef()
  const out = useMemo(() => pos.clone().multiplyScalar(2), [pos])
  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * 0.8) % 1
    ring.current.scale.setScalar(1 + t * 2.4)
    ring.current.material.opacity = 1 - t
  })
  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[home ? 0.045 : 0.032, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh ref={ring} onUpdate={(m) => m.lookAt(out)}>
        <ringGeometry args={[0.05, 0.065, 32]} />
        <meshBasicMaterial color={color} transparent side={THREE.DoubleSide} />
      </mesh>
      <Html center occlude={occlude} distanceFactor={6} zIndexRange={[10, 0]}>
        <div className={`globe-label ${home ? 'home' : ''}`} style={{ '--c': color }}>
          {home && <span className="globe-label-star">★</span>}
          {label}
          {home && <span className="globe-label-star">★</span>}
        </div>
      </Html>
    </group>
  )
}

// Plane geometry built from Three.js primitives — top-down silhouette
function PlaneModel({ color }) {
  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#fff8ee', roughness: 0.35, metalness: 0.55 }), [])
  const wingMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#f0e8d0', roughness: 0.4, metalness: 0.45 }), [])
  const accentMat = useMemo(() => new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.6, emissive: color, emissiveIntensity: 0.35 }), [color])

  return (
    <group>
      {/* Fuselage */}
      <mesh material={bodyMat}>
        <boxGeometry args={[0.014, 0.008, 0.08]} />
      </mesh>
      {/* Nose cone */}
      <mesh material={accentMat} position={[0, 0, 0.046]}>
        <coneGeometry args={[0.007, 0.022, 8]} />
        <primitive object={new THREE.Matrix4().makeRotationX(-Math.PI / 2)} attach="matrix" />
      </mesh>
      {/* Main wings */}
      <mesh material={wingMat} position={[0, 0, -0.005]}>
        <boxGeometry args={[0.1, 0.004, 0.026]} />
      </mesh>
      {/* Left engine nacelle */}
      <mesh material={accentMat} position={[-0.028, -0.004, 0.005]}>
        <cylinderGeometry args={[0.004, 0.005, 0.022, 8]} />
        <primitive object={new THREE.Matrix4().makeRotationX(-Math.PI / 2)} attach="matrix" />
      </mesh>
      {/* Right engine nacelle */}
      <mesh material={accentMat} position={[0.028, -0.004, 0.005]}>
        <cylinderGeometry args={[0.004, 0.005, 0.022, 8]} />
        <primitive object={new THREE.Matrix4().makeRotationX(-Math.PI / 2)} attach="matrix" />
      </mesh>
      {/* Horizontal stabilizer (tail) */}
      <mesh material={wingMat} position={[0, 0, -0.038]}>
        <boxGeometry args={[0.042, 0.003, 0.014]} />
      </mesh>
      {/* Vertical stabilizer */}
      <mesh material={accentMat} position={[0, 0.012, -0.038]}>
        <boxGeometry args={[0.004, 0.016, 0.018]} />
      </mesh>
      {/* Windows strip */}
      <mesh material={accentMat} position={[0, 0.005, 0.01]}>
        <boxGeometry args={[0.013, 0.002, 0.038]} />
      </mesh>
    </group>
  )
}

// Condensation trail (contrail) — fading white streak behind plane
function Contrail({ curve, t }) {
  const trailRef = useRef()
  const STEPS = 12

  useFrame(() => {
    if (!trailRef.current) return
    const positions = trailRef.current.geometry.attributes.position
    for (let i = 0; i < STEPS; i++) {
      const past = Math.max(0, t.current - i * 0.018)
      const p = curve.getPoint(past)
      positions.setXYZ(i, p.x, p.y, p.z)
    }
    positions.needsUpdate = true
  })

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(STEPS * 3), 3))
    return g
  }, [])

  return (
    <points ref={trailRef} geometry={geo}>
      <pointsMaterial color="#ffffff" size={0.012} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function Arc({ from, to, color, offset }) {
  const planeGroup = useRef()
  const tRef = useRef(0)

  const curve = useMemo(() => {
    const mid = from.clone().add(to).multiplyScalar(0.5)
    const lift = R + from.distanceTo(to) * 0.42
    mid.normalize().multiplyScalar(lift)
    return new THREE.QuadraticBezierCurve3(from, mid, to)
  }, [from, to])

  const points = useMemo(() => curve.getPoints(100), [curve])

  // Reusable vectors for orientation
  const _pos = useMemo(() => new THREE.Vector3(), [])
  const _tan = useMemo(() => new THREE.Vector3(), [])
  const _up = useMemo(() => new THREE.Vector3(), [])
  const _quat = useMemo(() => new THREE.Quaternion(), [])
  const _mat = useMemo(() => new THREE.Matrix4(), [])

  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * 0.26 + offset) % 1
    tRef.current = t

    if (!planeGroup.current) return

    // Position
    curve.getPoint(t, _pos)
    planeGroup.current.position.copy(_pos)

    // Tangent direction → orient plane nose-first
    curve.getTangent(t, _tan)
    _tan.normalize()

    // "Up" = outward from globe center
    _up.copy(_pos).normalize()

    // Build rotation: forward = _tan, up = _up
    _mat.lookAt(new THREE.Vector3(0, 0, 0), _tan, _up)
    _quat.setFromRotationMatrix(_mat)
    planeGroup.current.quaternion.copy(_quat)
  })

  return (
    <>
      {/* Dashed-style arc trail */}
      <Line points={points} color={color} lineWidth={1.4} transparent opacity={0.6} />

      {/* Contrail dots */}
      <Contrail curve={curve} t={tRef} />

      {/* Plane */}
      <group ref={planeGroup}>
        <PlaneModel color={color} />
      </group>
    </>
  )
}

export default function GlobeScene() {
  const spin = useRef()
  const globe = useRef()
  const home = useMemo(() => latLon(HOME.lat, HOME.lon), [])
  const dests = useMemo(() => DESTINATIONS.map((d) => ({ ...d, pos: latLon(d.lat, d.lon) })), [])

  const earthMap = useMemo(() => {
    const loader = new THREE.TextureLoader()
    const tex = loader.load('/earth-blue-marble.jpg')
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [])

  const bumpMap = useMemo(() => {
    const loader = new THREE.TextureLoader()
    return loader.load('/earth-topology.png')
  }, [])

  const startY = useMemo(() => {
    const c = latLon(0, 5)
    return Math.atan2(-c.x, c.z)
  }, [])

  useFrame(({ clock }) => {
    spin.current.rotation.y = startY + Math.sin(clock.elapsedTime * 0.18) * 0.45
  })

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 3, 5]} intensity={1.5} color="#fff4de" />
      <group rotation={[0.85, 0, 0]}>
        <group ref={spin} rotation={[0, startY, 0]}>
          <mesh ref={globe}>
            <sphereGeometry args={[R, 64, 64]} />
            <meshStandardMaterial
              map={earthMap}
              bumpMap={bumpMap}
              bumpScale={0.06}
              roughnessMap={bumpMap}
              roughness={0.72}
              metalness={0.05}
            />
          </mesh>
          <Marker pos={home} color="#ffb321" label="India · Home" home occlude={[globe]} />
          {dests.map((d, i) => (
            <group key={d.name}>
              <Marker pos={d.pos} color={d.color} label={d.name} occlude={[globe]} />
              <Arc from={home} to={d.pos} color={d.color} offset={i * 0.33} />
            </group>
          ))}
        </group>
      </group>
      <Atmosphere />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
    </>
  )
}
