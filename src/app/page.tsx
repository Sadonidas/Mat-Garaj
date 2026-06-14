import { BrandMarquee } from "@/components/BrandMarquee";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { VideoHub } from "@/components/VideoHub";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <Gallery />
        <Services />
        <WhyUs />
        <VideoHub />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
