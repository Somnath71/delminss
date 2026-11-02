import { useEffect, useRef, useState, memo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/* ═══════════════════════════════════════════
   PANI PURI  — photorealistic golden sphere
═══════════════════════════════════════════ */
function PaniPuri({ size = 130 }) {
  const id = 'pp'
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden>
      <defs>
        <radialGradient id={`${id}body`} cx="36%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#ffd370" />
          <stop offset="18%" stopColor="#f0a832" />
          <stop offset="42%" stopColor="#c97c10" />
          <stop offset="68%" stopColor="#8b4d08" />
          <stop offset="100%" stopColor="#4a2504" />
        </radialGradient>
        <radialGradient id={`${id}hi`} cx="28%" cy="22%" r="42%">
          <stop offset="0%" stopColor="#fff9e8" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#fce57a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f0a832" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}shadow`} cx="50%" cy="82%" r="52%">
          <stop offset="0%" stopColor="#200c00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#200c00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}pani`} cx="45%" cy="35%" r="62%">
          <stop offset="0%" stopColor="#6ee87a" />
          <stop offset="45%" stopColor="#1caa40" />
          <stop offset="100%" stopColor="#075e1a" />
        </radialGradient>
        <radialGradient id={`${id}pea`} cx="32%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#f0de78" />
          <stop offset="100%" stopColor="#9a8010" />
        </radialGradient>
        <filter id={`${id}ds`}>
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#1a0800" floodOpacity="0.5" />
        </filter>
        <filter id={`${id}tex`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="7" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.55  0 0 0 0 0.28  0 0 0 0 0.03  0 0 0 0.18 0" />
          <feBlend in="SourceGraphic" mode="multiply" result="blend" />
        </filter>
      </defs>

      {/* drop shadow disc */}
      <ellipse cx="100" cy="196" rx="58" ry="8" fill="#200c00" opacity="0.28" />

      {/* main sphere */}
      <circle cx="100" cy="98" r="88" fill={`url(#${id}body)`} filter={`url(#${id}ds)`} />
      {/* texture overlay */}
      <circle cx="100" cy="98" r="88" filter={`url(#${id}tex)`} />
      {/* shadow underside */}
      <circle cx="100" cy="98" r="88" fill={`url(#${id}shadow)`} />
      {/* primary highlight */}
      <ellipse cx="68" cy="58" rx="42" ry="28" fill={`url(#${id}hi)`} />
      {/* secondary specular */}
      <ellipse cx="52" cy="46" rx="16" ry="10" fill="#fffde8" opacity="0.5" />

      {/* top hole (dark inside) */}
      <ellipse cx="100" cy="64" rx="32" ry="23" fill="#0f0800" opacity="0.9" />
      {/* green pani inside */}
      <ellipse cx="100" cy="68" rx="27" ry="18" fill={`url(#${id}pani)`} />
      <ellipse cx="100" cy="65" rx="20" ry="12" fill="#6ee87a" opacity="0.35" />

      {/* peas */}
      {[[90, 66, 6.5], [103, 62, 5.5], [113, 68, 6], [84, 72, 5]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={`url(#${id}pea)`} opacity={0.85 + i * 0.04} />
      ))}
      {/* masala bits */}
      <ellipse cx="100" cy="76" rx="11" ry="4.5" fill="#6a3d10" opacity="0.55" />

      {/* rim */}
      <ellipse cx="100" cy="64" rx="32" ry="23" fill="none" stroke="#b86c0a" strokeWidth="2" opacity="0.65" />
      {/* inner glow rim */}
      <ellipse cx="100" cy="64" rx="30" ry="21" fill="none" stroke="#6ee87a" strokeWidth="1.2" opacity="0.5" />

      {/* surface crinkle texture */}
      <path d="M36,82 Q52,64 68,78" stroke="#7a4208" strokeWidth="1.6" fill="none" opacity="0.3" />
      <path d="M132,78 Q150,65 162,80" stroke="#7a4208" strokeWidth="1.4" fill="none" opacity="0.28" />
      <path d="M48,128 Q65,148 82,134" stroke="#7a4208" strokeWidth="1.2" fill="none" opacity="0.22" />
      <path d="M120,132 Q140,150 158,136" stroke="#7a4208" strokeWidth="1.2" fill="none" opacity="0.2" />
    </svg>
  )
}

/* ═══════════════════════════════════════════
   LEFT ARM SVG
   – arm enters from lower-left
   – palm faces slightly upward
   – we see the back/top of the hand
═══════════════════════════════════════════ */
function LeftArm({ scale = 1 }) {
  const W = 320, H = 520
  return (
    <svg
      width={W * scale} height={H * scale}
      viewBox={`0 0 ${W} ${H}`}
      overflow="visible"
      aria-hidden
      style={{ display: 'block', filter: 'drop-shadow(6px 18px 28px rgba(10,4,0,0.52))' }}
    >
      <defs>
        {/* Forearm gradient */}
        <linearGradient id="laFg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b86838" />
          <stop offset="40%" stopColor="#d9915a" />
          <stop offset="75%" stopColor="#c87848" />
          <stop offset="100%" stopColor="#9a5228" />
        </linearGradient>
        {/* Palm gradient */}
        <radialGradient id="laPg" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#e8a268" />
          <stop offset="50%" stopColor="#cd8448" />
          <stop offset="100%" stopColor="#a06030" />
        </radialGradient>
        {/* Finger base gradient */}
        <linearGradient id="laFing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#edb07a" />
          <stop offset="55%" stopColor="#d08850" />
          <stop offset="100%" stopColor="#aa6030" />
        </linearGradient>
        {/* Fingertip highlight */}
        <radialGradient id="laFtip" cx="45%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#f8c898" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c87848" stopOpacity="0" />
        </radialGradient>
        {/* Nail */}
        <linearGradient id="laNail" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8e0cc" />
          <stop offset="100%" stopColor="#ddb090" />
        </linearGradient>
        {/* Inner palm crease highlight */}
        <radialGradient id="laPalm2" cx="55%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#b86030" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#b86030" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Forearm ── tapered cylinder from bottom-left */}
      <path
        d="M10,520 C10,480 20,440 42,400 L80,340 C92,322 110,315 132,316
           L188,318 C210,320 228,330 236,350 L258,400 C274,440 278,480 278,520 Z"
        fill="url(#laFg)"
      />
      {/* forearm highlight edge */}
      <path
        d="M42,400 C55,375 72,355 90,342"
        stroke="#e8a870" strokeWidth="18" strokeLinecap="round" fill="none" opacity="0.25"
      />
      {/* forearm shadow edge */}
      <path
        d="M236,350 C248,368 260,390 270,415"
        stroke="#7a3c18" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.4"
      />
      {/* wrist joint shadow */}
      <ellipse cx="160" cy="330" rx="58" ry="16" fill="#8a4820" opacity="0.3" transform="rotate(-2 160 330)" />

      {/* ── Palm ── */}
      <path
        d="M82,322 C68,300 72,268 88,250 C102,234 122,230 145,232
           C168,234 188,242 198,260 C210,280 208,310 198,328
           L188,340 C175,352 148,356 125,354
           C102,352 86,342 82,322 Z"
        fill="url(#laPg)"
      />
      {/* palm crease 1 */}
      <path d="M92,305 Q145,295 200,308" stroke="#9a5228" strokeWidth="2.2" fill="none" opacity="0.4" strokeLinecap="round" />
      {/* palm crease 2 */}
      <path d="M88,326 Q142,316 198,328" stroke="#9a5228" strokeWidth="1.6" fill="none" opacity="0.28" strokeLinecap="round" />
      {/* palm inner shadow */}
      <ellipse cx="145" cy="310" rx="52" ry="40" fill="url(#laPalm2)" />
      {/* knuckle bumps */}
      {[[108, 240], [142, 234], [174, 240], [200, 252]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="9" ry="5.5" fill="#d08850" opacity="0.4" transform={`rotate(-8 ${x} ${y})`} />
      ))}

      {/* ── Thumb ── curls from left side */}
      <path
        d="M92,316 C72,310 52,302 38,284 C24,266 26,244 42,230
           C56,218 78,220 90,236 C102,252 100,280 96,304 Z"
        fill="url(#laFing)"
      />
      <path d="M48,270 Q62,255 78,262" stroke="#c07840" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round" />
      {/* thumb nail */}
      <path d="M36,248 Q44,232 60,228 Q72,226 76,238 Q72,246 60,250 Q46,252 36,248 Z"
        fill="url(#laNail)" opacity="0.75" />
      <path d="M52,263 Q66,267 76,280" stroke="#e0a870" strokeWidth="8" fill="none" opacity="0.15" strokeLinecap="round" />

      {/* ── Index finger ── */}
      <path
        d="M96,242 C94,210 98,180 106,158 C114,136 130,126 146,130
           C162,134 168,152 164,174 C160,196 150,220 142,242 Z"
        fill="url(#laFing)"
      />
      <path d="M100,218 Q122,212 158,218" stroke="#b06830" strokeWidth="1.8" fill="none" opacity="0.38" strokeLinecap="round" />
      <path d="M100,196 Q122,190 158,196" stroke="#b06830" strokeWidth="1.4" fill="none" opacity="0.28" strokeLinecap="round" />
      <ellipse cx="130" cy="150" rx="18" ry="14" fill="url(#laFtip)" />
      <path d="M116,140 Q130,132 148,138 Q154,148 148,156 Q130,162 116,156 Q110,148 116,140 Z"
        fill="url(#laNail)" opacity="0.72" />

      {/* ── Middle finger (tallest) ── */}
      <path
        d="M140,240 C140,206 145,172 154,148 C163,124 180,114 196,118
           C212,122 218,142 214,166 C210,190 198,218 192,242 Z"
        fill="url(#laFing)"
      />
      <path d="M144,216 Q168,210 206,216" stroke="#b06830" strokeWidth="1.8" fill="none" opacity="0.38" strokeLinecap="round" />
      <path d="M145,192 Q170,186 208,192" stroke="#b06830" strokeWidth="1.4" fill="none" opacity="0.26" strokeLinecap="round" />
      <ellipse cx="178" cy="132" rx="18" ry="15" fill="url(#laFtip)" />
      <path d="M163,122 Q178,114 196,120 Q202,130 196,140 Q178,146 163,140 Q157,130 163,122 Z"
        fill="url(#laNail)" opacity="0.72" />

      {/* ── Ring finger ── */}
      <path
        d="M188,242 C190,212 196,182 205,160 C214,138 230,130 244,136
           C258,142 260,162 256,184 C252,206 242,228 236,244 Z"
        fill="url(#laFing)"
      />
      <path d="M193,220 Q218,214 252,220" stroke="#b06830" strokeWidth="1.6" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M194,198 Q220,192 254,198" stroke="#b06830" strokeWidth="1.2" fill="none" opacity="0.25" strokeLinecap="round" />
      <ellipse cx="224" cy="150" rx="16" ry="13" fill="url(#laFtip)" />
      <path d="M211,142 Q224,134 240,140 Q246,150 240,158 Q224,164 211,158 Q205,148 211,142 Z"
        fill="url(#laNail)" opacity="0.7" />

      {/* ── Pinky ── */}
      <path
        d="M232,246 C235,220 240,196 248,178 C256,160 268,154 280,160
           C292,166 292,186 288,206 C284,224 275,240 268,250 Z"
        fill="url(#laFing)"
      />
      <path d="M236,228 Q256,222 286,228" stroke="#b06830" strokeWidth="1.4" fill="none" opacity="0.3" strokeLinecap="round" />
      <ellipse cx="262" cy="173" rx="13" ry="11" fill="url(#laFtip)" />
      <path d="M252,166 Q262,160 274,166 Q278,174 274,180 Q262,186 252,180 Q248,172 252,166 Z"
        fill="url(#laNail)" opacity="0.68" />

      {/* overall arm highlight edge left side */}
      <path
        d="M82,322 C72,295 70,260 80,234 C90,210 108,196 130,186"
        stroke="#f0b878" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.12"
      />
    </svg>
  )
}

/* ═══════════════════════════════════════════
   RIGHT ARM — scaleX mirror of left
═══════════════════════════════════════════ */
function RightArm({ scale = 1 }) {
  return (
    <div style={{ transform: 'scaleX(-1)', display: 'inline-block' }}>
      <LeftArm scale={scale} />
    </div>
  )
}

/* ═══════════════════════════════════════════
   FX  — drips, splash rings, flash, cheers
═══════════════════════════════════════════ */
const DripLine = memo(({ x = 0, delay = 0, active }) => (
  <motion.div
    initial={{ scaleY: 0, opacity: 0 }}
    animate={active
      ? { scaleY: [0, 1, 1, 1], opacity: [0, 1, 1, 0], y: [0, 0, 56, 84] }
      : { scaleY: 0, opacity: 0, y: 0 }}
    transition={{ duration: 1.05, delay, ease: [0.4, 0, 0.2, 1] }}
    style={{
      position: 'absolute', left: '50%', top: 0,
      marginLeft: x, width: 4, height: 44,
      borderRadius: '0 0 50% 50%',
      background: 'linear-gradient(180deg,#a8e030 0%,#52b818 55%,#2a7800 100%)',
      transformOrigin: 'top center', pointerEvents: 'none',
    }}
  />
))

const DripDrop = memo(({ x = 0, delay = 0, active }) => (
  <motion.div
    initial={{ opacity: 0, y: 44, scale: 0.5 }}
    animate={active
      ? { opacity: [0, 1, 1, 0], y: [44, 70, 106, 140], scale: [0.5, 1, 0.75, 0.2] }
      : { opacity: 0, y: 44, scale: 0.5 }}
    transition={{ duration: 0.88, delay: delay + 0.48, ease: [0.4, 0, 0.6, 1] }}
    style={{
      position: 'absolute', left: '50%', top: 0,
      marginLeft: x - 5, width: 10, height: 14,
      borderRadius: '50% 50% 50% 50%/35% 35% 65% 65%',
      background: 'radial-gradient(ellipse at 35% 30%, #c8e860, #46a012)',
      pointerEvents: 'none',
      filter: 'drop-shadow(0 3px 5px #2e7c0055)',
    }}
  />
))

const SplashRings = memo(({ active }) => (
  <AnimatePresence>
    {active && [0, 1, 2].map(i => (
      <motion.div key={i}
        initial={{ scale: 0.1, opacity: 0.95 }}
        animate={{ scale: 4 + i * 0.9, opacity: 0 }}
        exit={{}}
        transition={{ duration: 0.7 + i * 0.13, delay: i * 0.09, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0, margin: 'auto',
          width: 48, height: 48, borderRadius: '50%',
          border: `${2.5 - i * 0.6}px solid`,
          borderColor: ['#88e030', '#9ed846', '#c0e860'][i],
          pointerEvents: 'none',
        }}
      />
    ))}
  </AnimatePresence>
))

const ImpactFlash = memo(({ active }) => (
  <AnimatePresence>
    {active && (
      <motion.div key="flash"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 5, opacity: 0 }}
        exit={{}}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0, margin: 'auto',
          width: 70, height: 70, borderRadius: '50%',
          background: 'radial-gradient(circle, #d4ff7888 0%, #70d82044 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    )}
  </AnimatePresence>
))

const CheersText = memo(({ active }) => (
  <AnimatePresence>
    {active && (
      <motion.div key="cheers"
        initial={{ scale: 0.2, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 1.2, opacity: 0, y: -28 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', left: '50%', bottom: '66%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontFamily: "'Yatra One', cursive, serif",
          fontSize: 'clamp(20px, 2.8vw, 32px)',
          color: '#fff8e0',
          textShadow: '0 0 28px rgba(110,220,30,0.95), 0 3px 10px rgba(0,0,0,0.8)',
          pointerEvents: 'none', zIndex: 20, letterSpacing: '0.04em',
        }}
      >
        Cheers! 🥂
      </motion.div>
    )}
  </AnimatePresence>
))

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════ */
export default function PaniPuriCheers({
  backgroundColor,
  animationDuration = 3.8,
  autoPlay = true,
  className = '',
}) {
  const prefersReduced = useReducedMotion()
  const [phase, setPhase] = useState('start')
  const [splashOn, setSplashOn] = useState(false)
  const timers = useRef([])

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const later = (fn, ms) => { const id = setTimeout(fn, ms); timers.current.push(id) }

  const runCycle = () => {
    clear()
    setPhase('start'); setSplashOn(false)

    const d = animationDuration * 1000
    later(() => setPhase('approach'), 200)
    later(() => { setPhase('impact'); setSplashOn(true) }, d * 0.62)
    later(() => { setSplashOn(false); setPhase('hold') }, d * 0.62 + 720)
    later(() => setPhase('retreat'), d * 0.62 + 1500)
    later(() => { setPhase('reset'); later(runCycle, 480) }, d * 0.90)
  }

  useEffect(() => {
    if (!autoPlay || prefersReduced) return
    runCycle()
    return clear
  }, [autoPlay, animationDuration, prefersReduced])

  /* per-phase transforms — arms enter from bottom corners */
  const LT = {
    start: { x: '-105%', y: '12%', rotate: -24 },
    approach: { x: '-14%', y: '0%', rotate: -9 },
    impact: { x: '-4%', y: '-1%', rotate: -3 },
    hold: { x: '-4%', y: '-1%', rotate: -3 },
    retreat: { x: '-16%', y: '2%', rotate: -11 },
    reset: { x: '-105%', y: '12%', rotate: -24 },
  }
  const RT = {
    start: { x: '105%', y: '12%', rotate: 24 },
    approach: { x: '14%', y: '0%', rotate: 9 },
    impact: { x: '4%', y: '-1%', rotate: 3 },
    hold: { x: '4%', y: '-1%', rotate: 3 },
    retreat: { x: '16%', y: '2%', rotate: 11 },
    reset: { x: '105%', y: '12%', rotate: 24 },
  }

  const spring = (phase === 'impact' || phase === 'retreat')
    ? { type: 'spring', stiffness: 320, damping: 24 }
    : { type: 'spring', stiffness: 80, damping: 22 }

  const isImpact = phase === 'impact' || phase === 'hold'
  const drips = [{ x: -14, delay: 0 }, { x: 10, delay: 0.16 }, { x: -2, delay: 0.07 }]

  /* Arm scale — responsive */
  const armScale = 1

  return (
    <section
      className={`ppc-root ${className}`}
      aria-label="Pani Puri Cheers"
      style={{ background: backgroundColor || 'linear-gradient(158deg,#220a02 0%,#4c1c05 50%,#220a02 100%)' }}
    >
      {/* ambient glow */}
      <motion.div className="ppc-glow"
        animate={isImpact ? { opacity: 1, scale: 1.08 } : { opacity: 0.35, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* eyebrow */}
      <p className="ppc-eyebrow">✦ THE CRUNCH THAT CONNECTS ✦</p>

      {/* ── STAGE ── */}
      <div className="ppc-stage">

        {/* LEFT arm + puri */}
        <motion.div className="ppc-arm ppc-arm-l"
          animate={LT[phase]}
          transition={spring}
          style={{ transformOrigin: 'right bottom' }}
        >
          {/* gentle float bob */}
          <motion.div
            animate={(phase === 'approach' || phase === 'start')
              ? { y: [0, -10, 0], rotate: [0, 1.5, 0] } : {}}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="ppc-puri ppc-puri-l">
              <PaniPuri size={132} />
            </div>
            <LeftArm scale={armScale} />
          </motion.div>
        </motion.div>

        {/* FX centre */}
        <div className="ppc-fx" aria-hidden>
          <SplashRings active={isImpact && splashOn} />
          <ImpactFlash active={phase === 'impact'} />
          {drips.map((d, i) => (
            <span key={i}>
              <DripLine active={isImpact} x={d.x} delay={d.delay} />
              <DripDrop active={isImpact} x={d.x} delay={d.delay} />
            </span>
          ))}
        </div>

        {/* cheers text */}
        <CheersText active={isImpact} />

        {/* RIGHT arm + puri */}
        <motion.div className="ppc-arm ppc-arm-r"
          animate={RT[phase]}
          transition={spring}
          style={{ transformOrigin: 'left bottom' }}
        >
          <motion.div
            animate={(phase === 'approach' || phase === 'start')
              ? { y: [0, -10, 0], rotate: [0, -1.5, 0] } : {}}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <div className="ppc-puri ppc-puri-r">
              <PaniPuri size={132} />
            </div>
            <RightArm scale={armScale} />
          </motion.div>
        </motion.div>

      </div>

      {/* footer */}
      <div className="ppc-footer">
        <p className="ppc-tagline">Delmins Pani Puri — The Crunch That Defines India</p>
        <p className="ppc-sub">Share the joy. One crispy puri at a time.</p>
      </div>

      <style>{`
        .ppc-root {
          position:relative; width:100%; overflow:hidden;
          display:flex; flex-direction:column; align-items:center;
          padding:52px 0 44px; isolation:isolate;
        }
        .ppc-glow {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background:
            radial-gradient(ellipse 58% 52% at 50% 56%, rgba(100,210,20,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 75% 38% at 50% 82%, rgba(255,170,28,0.09) 0%, transparent 65%);
        }
        .ppc-eyebrow {
          position:relative; z-index:5; margin:0 0 14px;
          font-family:'Cabin',system-ui,sans-serif;
          font-size:clamp(9px,1.3vw,12px); font-weight:700;
          letter-spacing:0.22em; text-transform:uppercase;
          color:#ffb321; opacity:0.8; text-align:center;
        }
        /* ── Stage ── */
        .ppc-stage {
          position:relative; width:100%; max-width:1100px;
          height:clamp(320px,48vw,520px);
          display:flex; align-items:flex-end; justify-content:center;
          z-index:2; overflow:visible;
        }
        /* ── Arms ── */
        .ppc-arm {
          position:absolute; bottom:0;
          display:flex; flex-direction:column; align-items:center;
          will-change:transform;
        }
        .ppc-arm-l { left:calc(50% - 340px); }
        .ppc-arm-r { right:calc(50% - 340px); }
        /* ── Puri sits above fingers ── */
        .ppc-puri {
          position:relative; z-index:4;
          margin-bottom:-32px;
          filter:drop-shadow(0 8px 22px rgba(14,5,0,0.55));
        }
        /* ── FX centre ── */
        .ppc-fx {
          position:absolute; left:50%; bottom:52%;
          transform:translate(-50%,50%);
          width:56px; height:56px;
          z-index:10; pointer-events:none;
        }
        /* ── Footer ── */
        .ppc-footer {
          position:relative; z-index:5;
          text-align:center; margin-top:22px;
        }
        .ppc-tagline {
          font-family:'Yatra One',cursive,serif;
          font-size:clamp(13px,2vw,18px); color:#f5c542;
          margin:0 0 4px; letter-spacing:0.04em;
        }
        .ppc-sub {
          font-family:'Cabin',system-ui,sans-serif;
          font-size:clamp(10px,1.4vw,13px);
          color:rgba(255,238,205,0.52); margin:0;
        }
        /* grain */
        .ppc-root::after {
          content:''; position:absolute; inset:0; z-index:1; pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          opacity:0.55;
        }
        /* responsive */
        @media (max-width:900px) {
          .ppc-arm-l { left:calc(50% - 260px); }
          .ppc-arm-r { right:calc(50% - 260px); }
        }
        @media (max-width:640px) {
          .ppc-stage { height:clamp(240px,52vw,360px); }
          .ppc-arm-l { left:calc(50% - 185px); }
          .ppc-arm-r { right:calc(50% - 185px); }
        }
        @media (max-width:420px) {
          .ppc-root { padding:30px 0 22px; }
          .ppc-stage { height:clamp(200px,56vw,300px); }
          .ppc-arm-l { left:calc(50% - 155px); }
          .ppc-arm-r { right:calc(50% - 155px); }
        }
        @media (prefers-reduced-motion:reduce) {
          .ppc-arm { transition:none !important; animation:none !important; }
        }
      `}</style>
    </section>
  )
}
