
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
    <section className="hero-section h-screen flex items-center pt-16 pb-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Text & CTA Button */}
        <motion.div 
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-spopeer-blue">Spopeer</span>: "From local fields to global networks sports reimagined!"
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-spopeer-darkgray mt-4 mb-3">
              "Your game, your network, your future!
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              The ultimate sports networking platform designed to unite athletes, coaches, clubs, and sports professionals worldwide.
            </p>
          </div>
          
          <Button 
            onClick={openWaitlist} 
            className="cta-button text-lg px-8 py-6 mb-6"
          >
            Join our waiting list
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-xs md:text-sm text-gray-600 mt-3">
            *Supportive Profession includes all sports enthusiasts who are not athletes, coaches, or clubs (e.g. physios, scouts, journalists, photographers, and more) who want to contribute to the sports community in a meaningful capacity.
          </p>
        </motion.div>
        
        {/* Right Column - App Screenshot */}
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
