"use client";
import Navbar from "./Navbar/page";
import DoctorSearchHero from "./DoctorSearchHero/page";
import HealthServices from "./HealthServices/page";
import SpecializedCareSection from "./SpecializedCareSection/page";
import Partners from "./NewsSection/page";
import NewsSection from "./NewsSection/page";
import Testimonials from "./Testimonials/page";
import Partnerships from "./partnerships/page";
import Features from "./Features/page";
import { Footer } from "./Footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DoctorSearchHero />
      <HealthServices />
      <SpecializedCareSection />
      <Testimonials />
      <Partnerships />
      <Features/>
      <Footer />
    </div>
  );
}
