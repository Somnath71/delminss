import { useEffect, useMemo } from 'react'
import { ContactShadows, Float, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'
import Studio from './Studio.jsx'

const W = 2, H = 2.75, D = 0.7
const PX = 300 // pixels per unit

function canvasFor(w, h) {
  const c = document.createElement('canvas')
  c.width = Math.round(w * PX)
  c.height = Math.round(h * PX)
  return c
}

function drawPuri(x, cx, cy, r) {
  const g = x.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r)
  g.addColorStop(0, '#ffd98a'); g.addColorStop(0.6, '#e5a043'); g.addColorStop(1, '#9c5216')
  x.fillStyle = g
  x.beginPath(); x.ellipse(cx, cy, r, r * 0.82, 0, 0, Math.PI * 2); x.fill()
  x.fillStyle = '#3cbf68'
  x.beginPath(); x.ellipse(cx, cy - r * 0.55, r * 0.45, r * 0.14, 0, 0, Math.PI * 2); x.fill()
  x.strokeStyle = '#f3c46f'; x.lineWidth = r * 0.05; x.stroke()
}

function base(x, w, h) {
  const g = x.createLinearGradient(0, 0, 0, h)
  g.addColorStop(0, '#11523a'); g.addColorStop(1, '#05231a')
  x.fillStyle = g; x.fillRect(0, 0, w, h)
  x.fillStyle = 'rgba(255,244,222,.06)'
  for (let i = 14; i < w; i += 30) for (let j = 14; j < h; j += 30) { x.beginPath(); x.arc(i, j, 2.2, 0, 7); x.fill() }
}

function drawFront(c, logo) {
  const x = c.getContext('2d'), w = c.width, h = c.height
  base(x, w, h)
  x.fillStyle = '#ffb321'
  x.beginPath(); x.arc(w / 2, h * 0.8, w * 0.44, 0, Math.PI * 2); x.fill()
  if (logo) { const lw = w * 0.6, lh = (lw * logo.height) / logo.width; x.drawImage(logo, (w - lw) / 2, h * 0.07, lw, lh) }
  x.textAlign = 'center'
  x.fillStyle = '#fff4de'; x.font = `900 ${w * 0.17}px Fraunces`; x.fillText('PANI PURI', w / 2, h * 0.36)
  x.fillStyle = '#ffb321'; x.font = `600 ${w * 0.04}px Outfit`; x.fillText('CRISP SHELLS · SPICED FILLING · TANGY PANI', w / 2, h * 0.42)
  drawPuri(x, w * 0.27, h * 0.7, w * 0.12); drawPuri(x, w * 0.73, h * 0.7, w * 0.12); drawPuri(x, w * 0.5, h * 0.66, w * 0.19)
  x.fillStyle = '#e8452c'; x.fillRect(0, h * 0.9, w, h * 0.1)
  x.fillStyle = '#fff4de'; x.font = `700 ${w * 0.042}px Outfit`; x.fillText('READY-TO-EAT KIT  ·  EXPORT QUALITY', w / 2, h * 0.963)
}

function drawBack(c, logo) {
  const x = c.getContext('2d'), w = c.width, h = c.height
  base(x, w, h)
  if (logo) { const lw = w * 0.45, lh = (lw * logo.height) / logo.width; x.drawImage(logo, w * 0.08, h * 0.07, lw, lh) }
  x.fillStyle = '#ffb321'; x.font = `italic 800 ${w * 0.1}px Fraunces`; x.textAlign = 'left'
  x.fillText('How to burst', w * 0.08, h * 0.25)
  const lines = ['Tap the top of a puri', 'Add the spiced filling', 'Pour the chilled pani', 'One bite. Burst!']
  lines.forEach((l, i) => {
    x.fillStyle = '#ffb321'; x.beginPath(); x.arc(w * 0.13, h * (0.34 + i * 0.1), w * 0.045, 0, 7); x.fill()
    x.fillStyle = '#0b3b2a'; x.font = `800 ${w * 0.05}px Outfit`; x.textAlign = 'center'; x.fillText(i + 1, w * 0.13, h * (0.34 + i * 0.1) + w * 0.018)
    x.fillStyle = '#fff4de'; x.font = `500 ${w * 0.05}px Outfit`; x.textAlign = 'left'; x.fillText(l, w * 0.22, h * (0.34 + i * 0.1) + w * 0.018)
  })
  x.strokeStyle = 'rgba(255,244,222,.3)'; x.lineWidth = 2; x.strokeRect(w * 0.08, h * 0.76, w * 0.84, h * 0.12)
  x.fillStyle = '#fff4de'; x.font = `600 ${w * 0.038}px Outfit`; x.textAlign = 'center'
  x.fillText('PRESERVATIVE-FREE  ·  HYGIENICALLY PACKED', w / 2, h * 0.83)
  x.fillStyle = '#e8452c'; x.fillRect(0, h * 0.92, w, h * 0.08)
}

function drawSide(c, label) {
  const x = c.getContext('2d'), w = c.width, h = c.height
  base(x, w, h)
  x.save(); x.translate(w / 2, h / 2); x.rotate(-Math.PI / 2)
  x.fillStyle = '#ffb321'; x.font = `900 ${w * 0.42}px Fraunces`; x.textAlign = 'center'
  x.fillText(label, 0, w * 0.15); x.restore()
}

function drawTop(c) {
  const x = c.getContext('2d'), w = c.width, h = c.height
  x.fillStyle = '#e8452c'; x.fillRect(0, 0, w, h)
  x.fillStyle = '#fff4de'; x.font = `800 ${h * 0.32}px Outfit`; x.textAlign = 'center'
  x.fillText('OPEN · POUR · BURST', w / 2, h * 0.62)
}

function useLabels() {
  const set = useMemo(() => {
    const front = canvasFor(W, H), back = canvasFor(W, H)
    const right = canvasFor(D, H), left = canvasFor(D, H)
    const top = canvasFor(W, D), bottom = canvasFor(W, D)
    const textures = [right, left, top, bottom, front, back].map((cv) => {
      const t = new THREE.CanvasTexture(cv)
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = 8
      return t
    })
    return { front, back, right, left, top, bottom, textures }
  }, [])

  useEffect(() => {
    let alive = true
    const logo = new Image()
    logo.src = '/logo-light.png'
    Promise.all([
      document.fonts.load('900 60px Fraunces'),
      document.fonts.load('italic 800 60px Fraunces'),
      document.fonts.load('600 30px Outfit'),
      new Promise((r) => { logo.onload = r; logo.onerror = r }),
    ]).then(() => {
      if (!alive) return
      drawFront(set.front, logo); drawBack(set.back, logo)
      drawSide(set.right, 'PANI PURI'); drawSide(set.left, 'DELMINS')
      drawTop(set.top); drawTop(set.bottom)
      set.textures.forEach((t) => (t.needsUpdate = true))
    })
    return () => { alive = false }
  }, [set])

  return set.textures
}

export default function PackScene() {
  const textures = useLabels()
  return (
    <>
      <Studio />
      <PresentationControls global snap rotation={[0.05, -0.45, 0]} polar={[-0.3, 0.3]} azimuth={[-Infinity, Infinity]} config={{ mass: 1, tension: 170 }}>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
          <mesh>
            <boxGeometry args={[W, H, D]} />
            {textures.map((t, i) => (
              <meshStandardMaterial key={i} attach={`material-${i}`} map={t} roughness={0.35} metalness={0.05} />
            ))}
          </mesh>
        </Float>
      </PresentationControls>
      <ContactShadows position={[0, -2, 0]} opacity={0.45} scale={8} blur={2.6} far={4} color="#000" />
    </>
  )
}
