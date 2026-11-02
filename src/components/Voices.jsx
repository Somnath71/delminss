import { motion } from 'framer-motion'
import { reveal } from './ease.js'

const quotes = [
  ['Priya Sharma', 'Mumbai', 'The quality and authenticity of these snacks remind me of home. Every bite is a celebration of genuine flavours.'],
  ['Rajesh Kumar', 'Delhi', 'Premium ingredients and traditional recipes make these snacks truly special. A perfect blend of taste and quality.'],
  ['Anita Desai', 'Bangalore', 'These snacks bring joy to every gathering. The attention to detail and authentic taste is unmatched.'],
  ['Vikram Patel', 'Ahmedabad', 'A luxury experience in every package. The flavours are rich, authentic and absolutely delightful.'],
]

function Card({ data: [name, city, q] }) {
  return (
    <figure className="quote">
      <span className="quote-mark">“</span>
      <blockquote>{q}</blockquote>
      <figcaption>
        <span className="avatar">{name.split(' ').map((s) => s[0]).join('')}</span>
        <span><b>{name}</b><br />{city}, India</span>
      </figcaption>
    </figure>
  )
}

export default function Voices() {
  const row = [...quotes, ...quotes]
  return (
    <section className="voices">
      <div className="container section-head">
        <motion.p className="eyebrow" {...reveal}>Customer experience</motion.p>
        <motion.h2 className="h2" {...reveal}>
          Bringing people together, <em>one burst at a time.</em>
        </motion.h2>
      </div>
      <div className="voices-track">
        <div className="voices-row">{row.map((q, i) => <Card key={i} data={q} />)}</div>
      </div>
    </section>
  )
}
