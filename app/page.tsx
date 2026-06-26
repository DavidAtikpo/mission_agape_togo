import Hero from '@/components/hero'
import TextSlider from '@/components/TextSlider'
import About from '@/components/about'
import Schools from '@/components/schools'
import HomeCtaSection from '@/components/HomeCtaSection'
import TeamSection from '@/components/TeamSection'
import EditionsTeaser from '@/components/EditionsTeaser'
import ActualiteBanner from '@/components/ActualiteBanner'
import { getPublishedActualite } from '@/lib/actualites'

export default async function Home() {
  const actualite = await getPublishedActualite()

  return (
    <>
      {actualite ? (
        <ActualiteBanner
          titre={actualite.titre}
          contenu={actualite.contenu}
          imageUrl={actualite.imageUrl}
          lienLabel={actualite.lienLabel}
          lienUrl={actualite.lienUrl}
        />
      ) : null}
      {/* <TextSlider /> */}
      <Hero />
      <About />
      <Schools />
      <HomeCtaSection />
      <TeamSection />
      <EditionsTeaser />
    </>
  )
}
