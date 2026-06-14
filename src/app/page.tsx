import { GoogleReviews } from "@/components/GoogleReviews";
import { BrandMarquee } from "@/components/BrandMarquee";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { VideoHub } from "@/components/VideoHub";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <WhyUs />
        <Services />
        <VideoHub />
        <Gallery />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
