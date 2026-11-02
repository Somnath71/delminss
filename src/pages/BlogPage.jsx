import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ease, reveal } from '../components/ease.js'

export const ARTICLES = [
  {
    id: 'delmins-prep-guide',
    category: 'How-to Guide',
    categoryHi: '',
    readTime: '10 min prep',
    date: 'OCT 28, 2024',
    title: 'How to Prepare the Delmins Pani Puri Kit: Step-by-Step Guide',
    subtitle: 'Make your pani, rehydrate the white peas and enjoy crispy puris at home in about 10 minutes. Here is exactly how.',
    image: '/panipuribox.png',
    leadQuote: '“No complicated preparation. Just a few simple steps to bring together the flavours and crunch you love.”',
    author: 'How-to Guide · Delmins',
    prepTime: 'Approximately 10 minutes',
    intro: 'Enjoy the authentic pleasure of pani puri at home with the Delmins Pani Puri Kit. Follow these simple steps to prepare your flavourful pani, rehydrate the white peas and enjoy crispy puris.',
    steps: [
      {
        title: 'Step 1: Prepare the Pani',
        instructions: [
          'Open the Pani Masala & Mint Mix sachet.',
          'Pour the entire contents into the provided 500 ml container.',
          'Add cold water or room-temperature water, filling the container to the top.',
          'Close the lid and mix well to combine the ingredients.',
          'Your refreshing pani is ready to serve.',
        ],
      },
      {
        title: 'Step 2: Prepare the White Peas',
        instructions: [
          'Open the white-peas sachet.',
          'Pour the contents into the provided 300 ml container.',
          'Carefully pour hot, boiling water into the container until the water level is slightly above the white peas. Do not fill the container completely.',
          'Close the lid immediately after adding the water.',
          'Allow the white peas to rehydrate for 10 minutes with the lid closed.',
          'Once the 10 minutes are complete, your white peas are ready to enjoy with the pani puri.',
        ],
        important: 'Handle boiling water carefully while pouring it into the container.',
      },
      {
        title: 'Step 3: Make Your Puris Extra Crispy (Optional)',
        instructions: [
          'For an extra-crispy experience, you can warm the puris in a microwave oven.',
          'Arrange the puris in a suitable microwave-safe dish.',
          'Heat them in the microwave for 15 seconds.',
          'Allow the puris to cool before serving.',
          'This step is optional. You can enjoy the puris without heating them, but warming them as directed can help enhance their crispiness.',
        ],
        important: 'Use only microwave-safe utensils and follow the heating instructions on the product packaging.',
      },
      {
        title: 'Step 4: Assemble and Enjoy',
        instructions: [
          'Now everything is ready!',
          'Carefully make a small opening in a puri.',
          'Add the prepared white peas.',
          'Pour in the pani prepared with the Pani Masala & Mint Mix.',
          'Enjoy immediately for the best crunch and flavour.',
          'Repeat, share and enjoy your favourite pani puri moments with family and friends.',
        ],
      },
    ],
    conclusionTitle: 'Enjoy Pani Puri the Delmins Way',
    conclusionText: [
      'No complicated preparation. Just a few simple steps to bring together the flavours and crunch you love.',
      'With the Delmins Pani Puri Kit, enjoying this iconic Indian favourite at home becomes a convenient and delightful experience.',
    ],
    motto: 'Delmins Pani Puri — The Crunch That Defines India.',
    tag: 'FEATURED DISPATCH '
  },
  {
    id: 'home-vs-street-vendors',
    category: 'Food Stories',
    categoryHi: '',
    readTime: '5 min read',
    date: 'OCT 20, 2024',
    title: 'Pani Puri at Home vs Street Vendors: Taste, Hygiene and Convenience',
    subtitle: 'Street-style flavour or the comfort of home? We compare taste, hygiene and convenience so you can enjoy pani puri your way.',
    image: '/panipurikit.png',
    leadQuote: '“Street vendors offer the atmosphere and spontaneity. Enjoying at home offers convenience, control and freedom on your own schedule.”',
    author: 'Food Stories · Delmins',
    intro: [
      'Pani puri is more than just a popular Indian street food. It is an experience filled with crispy puris, tangy and spicy pani, and flavourful fillings that make every bite memorable. Whether you call it pani puri, golgappa or puchka, this much-loved snack has a special place in Indian food culture.',
      'But what if you could enjoy this familiar street-food experience at home, without having to step out every time you crave it?',
      "Let's explore the differences between enjoying pani puri from street vendors and enjoying it at home."
    ],
    sections: [
      {
        title: '1. The Taste of Traditional Street-Style Pani Puri',
        paragraphs: [
          'One of the biggest reasons people love pani puri is its distinctive combination of flavours and textures. The crispness of the puri, the tanginess of the water, the spice of the masala and the filling come together to create a unique experience.',
          'Street vendors often have their own signature recipes, which is why the taste can vary from one location to another. For many people, discovering a favourite pani puri vendor is part of the enjoyment.',
          'However, enjoying the same experience at home offers an opportunity to savour this favourite snack in a more familiar setting.'
        ]
      },
      {
        title: '2. Hygiene: An Important Consideration',
        paragraphs: [
          "Street food is an essential part of India's culinary culture, and many vendors serve delicious food every day. However, hygiene practices can differ between vendors and locations.",
          'When choosing where to eat, consumers may consider how ingredients are stored, the cleanliness of utensils, the quality of the water used and how the food is handled.',
          'At home, you have greater control over your surroundings, the water you use and the way you serve your food. For families, this can make enjoying pani puri at home a convenient alternative.',
          'The goal is not to replace the joy of street food, but to make it easier to enjoy a favourite snack in a setting that suits you.'
        ]
      },
      {
        title: '3. Convenience: Enjoy Pani Puri on Your Own Terms',
        paragraphs: [
          'Craving pani puri after a long day? Planning a family get-together? Or simply looking for something different to serve your guests?',
          'Going out for a quick snack is not always convenient. Preparing every ingredient from scratch at home can also take time.',
          'A ready-to-eat pani puri kit offers another option. With the key components conveniently packed together, you can enjoy pani puri at home without having to source and prepare every ingredient separately.',
          'It is also a practical option for small gatherings, weekend treats and those spontaneous moments when the craving strikes.'
        ]
      },
      {
        title: '4. Meet the Delmins Pani Puri Kit',
        paragraphs: [
          'At Delmins, we believe that enjoying your favourite Indian snacks should be simple, convenient and enjoyable.',
          'The Delmins Pani Puri Kit brings the familiar pleasure of pani puri into your home, combining convenience with the flavours associated with this much-loved Indian snack.',
          'Designed for people who want to enjoy pani puri without the usual preparation from scratch, it offers an easy way to bring the experience to your dining table.',
          "Delmins is built around a simple idea: India's first preservative-free pani puri kit, so you can enjoy your favourite snack wherever you are.",
          'Whether it is a family evening, a get-together with friends or a personal craving, Delmins makes it easier to bring pani puri into the moment.'
        ]
      },
      {
        title: '5. So, Which Is Better: Street Vendors or Pani Puri at Home?',
        paragraphs: [
          'There is no single answer. Street vendors offer the atmosphere, spontaneity and local flavours that make Indian street food special. Enjoying pani puri at home offers convenience, control over serving conditions and the freedom to enjoy it on your own schedule.',
          'The right choice depends on your mood, occasion and preferences.',
          'And when you want the convenience of enjoying pani puri at home, a ready-to-eat kit can be a welcome addition to your pantry.'
        ]
      }
    ],
    conclusionTitle: 'Bring Home the Joy of Pani Puri',
    conclusionText: [
      "You do not always need to step out to enjoy one of India's most loved snacks. With the Delmins Pani Puri Kit, you can bring the familiar experience of golgappa to your home and enjoy it with family and friends.",
      'Explore the Delmins Pani Puri Kit and discover a convenient way to enjoy pani puri, wherever you are.'
    ],
    motto: 'Delmins — The Crunch That Defines India.'
  },
]

export default function BlogPage({ onBackHome }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [readingArticle, setReadingArticle] = useState(null)

  const categories = ['All', 'How-to Guide', 'Food Stories']

  const filteredArticles = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  return (
    <article className="blog-page">
      {/* Blog Hero Header */}
      <section className="blog-hero container">
        <div className="blog-hero-header">
          <motion.div className="blog-ornament" {...reveal}>
            <span className="blog-ornament-line" />
            <span className="blog-hindi-tag">Blogs</span>
            <span className="blog-ornament-line" />
          </motion.div>
          <motion.h1 className="blog-title" {...reveal}>
            The Delmins Chronicles
          </motion.h1>
          <motion.div className="blog-divider" aria-hidden="true" {...reveal}>
            <span className="blog-divider-line" />
            <svg className="blog-divider-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
            <span className="blog-divider-line" />
          </motion.div>
          <motion.p className="blog-subtitle" {...reveal}>
            Dispatches from Indian bazaars, step-by-step preparation guides, food stories,
            and the craft behind the crunch.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="blog-category-bar">
          {categories.map((c) => (
            <button
              key={c}
              className={`blog-cat-pill ${activeCategory === c ? 'active' : ''}`}
              onClick={() => setActiveCategory(c)}
            >
              <span>{c}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Lead Editorial Banner */}
      {(activeCategory === 'All' || activeCategory === 'How-to Guide') && (
        <section className="container blog-featured-section">
          <div className="blog-featured-card" onClick={() => setReadingArticle(ARTICLES[0])}>
            <span className="bf-corner tl" aria-hidden="true" />
            <span className="bf-corner tr" aria-hidden="true" />
            <span className="bf-corner bl" aria-hidden="true" />
            <span className="bf-corner br" aria-hidden="true" />

            <div className="blog-featured-grid">
              <div className="blog-featured-media">
                <img
                  src={ARTICLES[0].image}
                  alt={ARTICLES[0].title}
                  className="blog-featured-img"
                />
                <span className="blog-featured-badge">FEATURED DISPATCH </span>
              </div>
              <div className="blog-featured-content">
                <div className="bf-meta">
                  <span className="bf-cat">{ARTICLES[0].category}</span>
                  <span className="bf-sep">·</span>
                  <span className="bf-time">{ARTICLES[0].readTime}</span>
                  <span className="bf-sep">·</span>
                  <span className="bf-date">{ARTICLES[0].date}</span>
                </div>
                <h2 className="bf-title">{ARTICLES[0].title}</h2>
                <p className="bf-sub">{ARTICLES[0].subtitle}</p>
                <div className="bf-quote-box">
                  <p>{ARTICLES[0].leadQuote}</p>
                </div>
                <div className="bf-read-btn">
                  <span>Read Full Chronicle</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid (Retro Cards with Brass Corners) */}
      <section className="container blog-grid-section">
        <div
          className="blog-grid"
          style={{
            gridTemplateColumns: filteredArticles.length === 1 ? '1fr' : 'repeat(2, 1fr)',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {filteredArticles.map((art, idx) => (
            <motion.article
              key={art.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease }}
              onClick={() => setReadingArticle(art)}
            >
              <span className="bc-corner tl" aria-hidden="true" />
              <span className="bc-corner tr" aria-hidden="true" />
              <span className="bc-corner bl" aria-hidden="true" />
              <span className="bc-corner br" aria-hidden="true" />

              {art.image && (
                <div className="blog-card-img-wrap">
                  <img src={art.image} alt={art.title} className="blog-card-img" />
                </div>
              )}

              <div className="blog-card-body">
                <div className="bc-meta">
                  <span className="bc-cat">{art.category}</span>
                  <span className="bc-sep">·</span>
                  <span className="bc-time">{art.readTime}</span>
                </div>

                <h3 className="bc-title">{art.title}</h3>
                <p className="bc-desc">{art.subtitle}</p>

                <div className="bc-footer">
                  <span className="bc-date">{art.date}</span>
                  <span className="bc-read-link">
                    Read Story <span className="arrow">→</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Article Reader Modal / Drawer */}
      <AnimatePresence>
        {readingArticle && (
          <div className="article-modal-backdrop" onClick={() => setReadingArticle(null)}>
            <motion.div
              className="article-modal-panel"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.4, ease }}
            >
              {/* Modal Close Button */}
              <button
                className="article-modal-close"
                onClick={() => setReadingArticle(null)}
                aria-label="Close story"
              >
                ✕ Close
              </button>

              <div className="article-modal-inner">
                {/* Breadcrumbs / Tag */}
                <div className="am-breadcrumbs">
                  <button className="am-crumb-link" onClick={() => setReadingArticle(null)}>
                    Blog
                  </button>
                  <span className="am-crumb-sep">/</span>
                  <span className="am-crumb-current">{readingArticle.category}</span>
                </div>

                <div className="am-header">
                  <h1 className="am-title">{readingArticle.title}</h1>
                  {readingArticle.author && (
                    <p className="am-author-line">{readingArticle.author}</p>
                  )}
                  {readingArticle.subtitle && !readingArticle.steps && !readingArticle.sections && (
                    <p className="am-subtitle">{readingArticle.subtitle}</p>
                  )}
                </div>

                {readingArticle.image && (
                  <div className="am-image-wrap">
                    <img src={readingArticle.image} alt={readingArticle.title} className="am-img" />
                  </div>
                )}

                {/* 1. Step-by-Step Guide Layout (Article 1) */}
                {readingArticle.steps && (
                  <div className="am-guide-body">
                    {readingArticle.intro && (
                      <p className="am-guide-intro">{readingArticle.intro}</p>
                    )}

                    {readingArticle.prepTime && (
                      <div className="am-prep-badge">
                        <span className="am-prep-icon">⏱</span>
                        <span>Preparation time: <strong>{readingArticle.prepTime}</strong></span>
                      </div>
                    )}

                    <div className="am-steps-list">
                      {readingArticle.steps.map((st, sIdx) => (
                        <div className="am-step-card" key={sIdx}>
                          <h3 className="am-step-title">{st.title}</h3>
                          <ul className="am-step-ul">
                            {st.instructions.map((ins, iIdx) => (
                              <li key={iIdx}>{ins}</li>
                            ))}
                          </ul>
                          {st.important && (
                            <div className="am-step-important">
                              <strong>Important:</strong> {st.important}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {readingArticle.conclusionTitle && (
                      <div className="am-guide-conclusion">
                        <h3 className="am-conclusion-title">{readingArticle.conclusionTitle}</h3>
                        {readingArticle.conclusionText?.map((t, idx) => (
                          <p key={idx}>{t}</p>
                        ))}
                        {readingArticle.motto && (
                          <p className="am-conclusion-motto">
                            <strong>{readingArticle.motto}</strong>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* 2. Structured Sectioned Layout (Article 2: Food Stories) */}
                {readingArticle.sections && (
                  <div className="am-story-body">
                    {Array.isArray(readingArticle.intro) ? (
                      readingArticle.intro.map((p, idx) => (
                        <p key={idx} className={idx === 0 ? 'am-lead-p am-dropcap' : 'am-lead-p'}>
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="am-lead-p">{readingArticle.intro}</p>
                    )}

                    <div className="am-sections-list">
                      {readingArticle.sections.map((sec, sIdx) => (
                        <div className="am-section-block" key={sIdx}>
                          <h3 className="am-section-h3">{sec.title}</h3>
                          {sec.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      ))}
                    </div>

                    {readingArticle.conclusionTitle && (
                      <div className="am-guide-conclusion">
                        <h3 className="am-conclusion-title">{readingArticle.conclusionTitle}</h3>
                        {readingArticle.conclusionText?.map((t, idx) => (
                          <p key={idx}>{t}</p>
                        ))}
                        {readingArticle.motto && (
                          <p className="am-conclusion-motto">
                            <strong>{readingArticle.motto}</strong>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Modal Footer Actions */}
                <div className="am-footer-cta">
                  <div className="am-cta-seal">
                    <span>★ DELMINS HERITAGE ARCHIVES ★</span>
                  </div>
                  <p>Ready to experience authentic street flavour with guaranteed purity?</p>
                  <div className="am-cta-btns">
                    <a
                      href="https://blinkit.com/s/?q=delmins"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-saffron"
                    >
                      Explore the Delmins Pani Puri Kit →
                    </a>
                    <button className="btn btn-dark" onClick={() => setReadingArticle(null)}>
                      Back to all articles
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter / Dispatch Signup Box */}
      <section className="container blog-dispatch-section">
        <div className="blog-dispatch-box">
          <span className="bd-corner tl" aria-hidden="true" />
          <span className="bd-corner tr" aria-hidden="true" />
          <span className="bd-corner bl" aria-hidden="true" />
          <span className="bd-corner br" aria-hidden="true" />

          <div className="bd-inner">
            <span className="bd-star">★</span>
            <h3 className="bd-title">The Delmins Chaat Dispatch</h3>
            <p className="bd-sub">
              Delivered once a month: traditional Indian recipes, folklore from historic sweetmeat makers, and export announcements.
            </p>
            <form className="bd-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to the Delmins Chaat Dispatch!') }}>
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="bd-input"
              />
              <button type="submit" className="btn btn-saffron">
                Subscribe ✦
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="container blog-bottom-nav">
        <button className="btn btn-dark" onClick={onBackHome}>
          ← Back to Homepage
        </button>
      </section>
    </article>
  )
}
