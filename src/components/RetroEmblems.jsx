import React from 'react'

/**
 * RetroCornerBracket
 * Ornamental vintage filigree corner bracket for authentic certificate & tin styling.
 */
export function RetroCornerBracket({ position = 'top-left', className = '' }) {
  const transformMap = {
    'top-left': 'scale(1, 1)',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  }

  return (
    <svg
      viewBox="0 0 44 44"
      width="38"
      height="38"
      className={`vm-corner-bracket vm-corner-${position} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: transformMap[position] || 'none' }}
    >
      {/* Outer corner lines */}
      <path
        d="M2 28 V8 C2 4.686 4.686 2 8 2 H28"
        stroke="#B4823E"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Inner fine ornamental accent */}
      <path
        d="M7 26 V12 C7 9.239 9.239 7 12 7 H26"
        stroke="#D9A85F"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      {/* Corner Rosette / Diamond Star */}
      <path
        d="M10 10 L12 6 L14 10 L18 12 L14 14 L12 18 L10 14 L6 12 Z"
        fill="#A46D32"
      />
      <circle cx="12" cy="12" r="1.5" fill="#FFE5A3" />
      {/* Delicate scroll flourish */}
      <circle cx="28" cy="2" r="2.2" fill="#B4823E" />
      <circle cx="2" cy="28" r="2.2" fill="#B4823E" />
    </svg>
  )
}

/**
 * VisionStampSvg
 * Vintage scalloped postmark stamp for "Our Vision".
 */
export function VisionStampSvg({ className = '', size = 84 }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`vm-vintage-stamp ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`${id}-stampGrad`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="85%" stopColor="#FAF0DD" />
          <stop offset="100%" stopColor="#EEDBB7" />
        </radialGradient>
      </defs>

      {/* Scalloped outer edge (classic postage stamp serration) */}
      <circle cx="50" cy="50" r="46" fill={`url(#${id}-stampGrad)`} stroke="#B4823E" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="42" stroke="#8F2F18" strokeWidth="1.2" strokeDasharray="2.5 2" />
      <circle cx="50" cy="50" r="39" stroke="#B4823E" strokeWidth="0.8" />

      {/* Central circular medallion */}
      <circle cx="50" cy="50" r="24" fill="#154530" />
      <circle cx="50" cy="50" r="21" stroke="#FDE047" strokeWidth="0.8" strokeDasharray="1.5 1.5" />

      {/* Radiant Sun & Mountain / Wheat Emblem */}
      <path
        d="M42 54 L50 42 L58 54 Z"
        fill="#FFEBA8"
      />
      <circle cx="50" cy="38" r="3.5" fill="#FBBF24" />
      {/* Sun rays */}
      <path d="M50 31 V33 M44 33 L45.5 34.5 M56 33 L54.5 34.5" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />

      {/* Circular text simulation / dots */}
      <text
        x="50"
        y="19"
        textAnchor="middle"
        fontSize="5"
        fontWeight="800"
        fill="#8F2F18"
        letterSpacing="0.16em"
        fontFamily="serif"
      >
        DELMINS · VISION
      </text>
      <text
        x="50"
        y="86"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="700"
        fill="#8F2F18"
        letterSpacing="0.2em"
        fontFamily="sans-serif"
      >
        ESTD · 2024
      </text>

      {/* Little stars flanking */}
      <path d="M18 50 L19 47 L20 50 L23 51 L20 52 L19 55 L18 52 L15 51 Z" fill="#B4823E" />
      <path d="M82 50 L83 47 L84 50 L87 51 L84 52 L83 55 L82 52 L79 51 Z" fill="#B4823E" />
    </svg>
  )
}

/**
 * MissionStampSvg
 * Vintage royal assurance wax seal / pledge stamp for "Our Mission".
 */
export function MissionStampSvg({ className = '', size = 84 }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`vm-vintage-stamp ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`${id}-missionStamp`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="85%" stopColor="#FAF0DD" />
          <stop offset="100%" stopColor="#EEDBB7" />
        </radialGradient>
      </defs>

      {/* Scalloped outer edge */}
      <circle cx="50" cy="50" r="46" fill={`url(#${id}-missionStamp)`} stroke="#8F2F18" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="42" stroke="#B4823E" strokeWidth="1.2" strokeDasharray="2.5 2" />
      <circle cx="50" cy="50" r="39" stroke="#8F2F18" strokeWidth="0.8" />

      {/* Central medallion */}
      <circle cx="50" cy="50" r="24" fill="#8F2F18" />
      <circle cx="50" cy="50" r="21" stroke="#FDE047" strokeWidth="0.8" strokeDasharray="1.5 1.5" />

      {/* Shield & Star Emblem */}
      <path
        d="M44 40 H56 C56 48 50 54 50 54 C50 54 44 48 44 40 Z"
        fill="#FFEBA8"
      />
      <path
        d="M50 42 L51.2 45.5 L55 45.5 L52 47.8 L53.2 51.5 L50 49 L46.8 51.5 L48 47.8 L45 45.5 L48.8 45.5 Z"
        fill="#8F2F18"
      />

      {/* Circular text */}
      <text
        x="50"
        y="19"
        textAnchor="middle"
        fontSize="5"
        fontWeight="800"
        fill="#154530"
        letterSpacing="0.16em"
        fontFamily="serif"
      >
        SACRED PLEDGE
      </text>
      <text
        x="50"
        y="86"
        textAnchor="middle"
        fontSize="4.5"
        fontWeight="700"
        fill="#154530"
        letterSpacing="0.18em"
        fontFamily="sans-serif"
      >
        PURE &amp; HONEST
      </text>

      {/* Side stars */}
      <path d="M18 50 L19 47 L20 50 L23 51 L20 52 L19 55 L18 52 L15 51 Z" fill="#8F2F18" />
      <path d="M82 50 L83 47 L84 50 L87 51 L84 52 L83 55 L82 52 L79 51 Z" fill="#8F2F18" />
    </svg>
  )
}

/**
 * Custom Vintage Medallion Icons for the 5 Commitments
 */
export function IconNaturalRetro({ size = 32 }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" className="vm-medallion-icon">
      <circle cx="18" cy="18" r="16.5" fill="#EBF7EE" stroke="#15803D" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="13.5" stroke="#86EFAC" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
      {/* Twin botanical leaves */}
      <path
        d="M12 23 C12 15 17 11 24 11 C24 18 19 23 12 23 Z"
        fill="#16A34A"
      />
      <path
        d="M12 23 C16 20 20 16 24 11"
        stroke="#DCFCE7"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M15 22 C13 18 15 14 18 13"
        stroke="#15803D"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconQualityRetro({ size = 32 }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" className="vm-medallion-icon">
      <circle cx="18" cy="18" r="16.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="13.5" stroke="#FDE68A" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
      {/* Heraldic Shield */}
      <path
        d="M13 11 H23 C23 19 18 25 18 25 C18 25 13 19 13 11 Z"
        fill="#D97706"
      />
      {/* Check / Star inside shield */}
      <path
        d="M18 13.5 L19 15.5 L21.5 15.5 L19.5 17 L20.5 19.5 L18 18 L15.5 19.5 L16.5 17 L14.5 15.5 L17 15.5 Z"
        fill="#FFFBEB"
      />
    </svg>
  )
}

export function IconInnovationRetro({ size = 32 }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" className="vm-medallion-icon">
      <circle cx="18" cy="18" r="16.5" fill="#FFEDD5" stroke="#C2410C" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="13.5" stroke="#FED7AA" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
      {/* Traditional Indian Diya / Flame of Innovation */}
      <path
        d="M11 21 C11 24.5 14 26 18 26 C22 26 25 24.5 25 21 H11 Z"
        fill="#9A3412"
      />
      {/* Oil lamp base rim */}
      <path d="M15 26 H21 V27.5 H15 Z" fill="#7C2D12" />
      {/* Glowing Flame */}
      <path
        d="M18 10 C18 10 14 15 14 18 C14 20 16 21 18 21 C20 21 22 20 22 18 C22 15 18 10 18 10 Z"
        fill="#EA580C"
      />
      <circle cx="18" cy="18" r="2" fill="#FEF08A" />
    </svg>
  )
}

export function IconTrustRetro({ size = 32 }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" className="vm-medallion-icon">
      <circle cx="18" cy="18" r="16.5" fill="#FFE4E6" stroke="#9F1239" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="13.5" stroke="#FECDD3" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
      {/* Sacred Heart / Lotus of Trust */}
      <path
        d="M18 24.5 C18 24.5 11 19.5 11 15 C11 12.5 13 11 15.5 11 C17 11 18 12 18 12 C18 12 19 11 20.5 11 C23 11 25 12.5 25 15 C25 19.5 18 24.5 18 24.5 Z"
        fill="#BE123C"
      />
      <circle cx="18" cy="16" r="2.2" fill="#FFE4E6" />
    </svg>
  )
}

export function IconGrowthRetro({ size = 32 }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" className="vm-medallion-icon">
      <circle cx="18" cy="18" r="16.5" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="13.5" stroke="#99F6E4" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
      {/* Flourishing plant & rising growth bars */}
      <path
        d="M18 25 V13"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Sprouting leaves */}
      <path
        d="M18 18 C14 18 13 14 13 14 C13 14 17 14 18 18 Z"
        fill="#0D9488"
      />
      <path
        d="M18 15 C22 15 23 11 23 11 C23 11 19 11 18 15 Z"
        fill="#14B8A6"
      />
      <circle cx="18" cy="11" r="2" fill="#5EEAD4" />
    </svg>
  )
}

/**
 * Three Vintage Pillar Badges for the Vision Card
 */
export function VisionPillar({ icon, title, desc }) {
  return (
    <div className="vm-pillar-item">
      <div className="vm-pillar-icon-box">{icon}</div>
      <div className="vm-pillar-content">
        <h5 className="vm-pillar-title">{title}</h5>
        <p className="vm-pillar-desc">{desc}</p>
      </div>
    </div>
  )
}
