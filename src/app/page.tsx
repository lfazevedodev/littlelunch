import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <HowItWorks />
        <Plans />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
