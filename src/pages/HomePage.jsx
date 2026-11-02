import Hero2 from '../components/Hero2.jsx'
import Marquee from '../components/Marquee.jsx'
import Marquee2 from '../components/Marquee2.jsx'

import HeritageStory from '../components/HeritageStory.jsx'
import HeritageStory2 from '../components/HeritageStory2.jsx'

import Craft from '../components/Craft.jsx'
import Global from '../components/Global.jsx'
import HandCheers from '../components/HandCheers.jsx'
import Certificates from '../components/Certificates.jsx'
import ReviewsCarousel from '../components/ReviewsCarousel.jsx'
import Faq from '../components/Faq.jsx'
import OneMorePlate from '../components/OneMorePlate.jsx'

export default function HomePage({ ready, onOpenStory }) {
  return (
    <>
      <Hero2 ready={ready} />
      <Marquee />
      <HeritageStory onOpenStory={onOpenStory} />
      <Craft />
      <HeritageStory2 onOpenStory={onOpenStory} />

      <Global />
      <HandCheers />
      <Marquee2 />

      <Certificates />
      <ReviewsCarousel />
      <Faq />
      <OneMorePlate />
    </>
  )
}

