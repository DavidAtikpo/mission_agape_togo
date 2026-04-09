import Hero from "@/components/hero"
// import Testimonials from "@/components/Testimonials"
import About from "@/components/about"
import Schools from "@/components/schools"
import TextSlider from "@/components/TextSlider"
import TeamSection from "@/components/TeamSection"
import GallerySection from "@/components/GallerySection"

export default function Home() {
  return (
    <>
      <TextSlider />
      <Hero />
      <About />
      <TeamSection />
      <Schools />
      {/* <Testimonials /> */}
      <GallerySection />
    </>
  )
}
