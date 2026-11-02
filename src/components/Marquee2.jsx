const words = [
  'Crispy',
  'Chatpata',
  'Masaledaar',
  'Zesty',
  'Minty Fresh',
  'Desi Delight',
  'Street Food Love'
]

function Row({ reverse }) {
  const items = [...words, ...words]
  return (
    <div className={`marquee-row ${reverse ? 'reverse' : ''}`}>
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k} aria-hidden={k === 1}>
            {items.map((w, i) => (
              <span key={i}>
                {w} <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="marquee">
      <div className="marquee-band band-a"><Row /></div>
      <div className="marquee-band band-b"><Row reverse /></div>
    </section>
  )
}
