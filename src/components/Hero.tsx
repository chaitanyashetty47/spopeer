import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";

const Hero = () => {
  const { openWaitlist } = useWaitlist();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section className="hero-section min-h-[100svh] flex items-center pt-16 px-4 sm:px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div 
          className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="mb-8">
            <h1 className="font-bold mb-4 text-5xl">
              <span className="text-spopeer-blue text-5xl">Bringing </span>
              <span className="text-gray-900">Athletes, Coaches & Clubs</span>
              <div className="flex justify-center md:justify-start">
                <span className="text-[#0070FF] text-5xl font-bold">TOGETHER - </span>
              </div>
              <div className="mt-2">
                <span className="text-red-500">Anytime, Anywhere!</span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-spopeer-darkgray mt-4 mb-3">
              "Your game, your network, your future!"
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              The ultimate sports networking platform designed to unite athletes, coaches, clubs, and sports professionals worldwide.
            </p>
          </div>
          
          <Button 
            onClick={openWaitlist} 
            className="cta-button text-lg sm:text-xl px-8 py-5 mb-6 w-auto shadow-lg hover:shadow-xl transition-all"
          >
            Join our waiting list
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-xs md:text-sm text-gray-600 mt-3">
            *Supportive Profession includes all sports enthusiasts who are not athletes, coaches, or clubs.
          </p>
        </motion.div>
        
        <motion.div
          className="hidden md:block"
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/794e9ab1-0b6d-4175-9187-cfbabd425cc1.png" 
                alt="Basketball team huddle" 
                className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-spopeer-blue opacity-10 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


         