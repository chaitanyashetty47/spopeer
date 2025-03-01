
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-spopeer-blue z-50 origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <KeyFeatures />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
