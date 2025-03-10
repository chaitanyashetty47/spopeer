import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";
import { useState, useEffect, useRef } from "react";
import { getApiUrl } from "@/utils/api";

const Hero = () => {
  const { openWaitlist } = useWaitlist();
  const [waitlistCount, setWaitlistCount] = useState(2500);
  const [displayCount, setDisplayCount] = useState(2500); // Start with default value
  const [isLoading, setIsLoading] = useState(true);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Start animation immediately with default value
  useEffect(() => {
    startCountAnimation(2500);
    
    // Fetch actual count
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch(`${getApiUrl()}/api/waitlist/count`);
        if (response.ok) {
          const data = await response.json();
          const actualCount = data.count + 2500 || 2500; // Fallback to 2500 if count is 0 or null
          setWaitlistCount(actualCount);
          
          // Restart animation with actual count when data arrives
          if (actualCount !== 2500) {
            // Clear previous animation if it exists
            if (animationRef.current) {
              clearInterval(animationRef.current);
            }
            startCountAnimation(actualCount);
          }
        }
      } catch (error) {
        console.error("Error fetching waitlist count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWaitlistCount();
    
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);
  
  // Function to start count animation
  const startCountAnimation = (targetCount: number) => {
    // Start with a random higher number and count down to actual
    const startingCount = Math.floor(targetCount * 1.5);
    setDisplayCount(startingCount);
    
    const duration = 1500; // 1.5 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let currentFrame = 0;
    animationRef.current = setInterval(() => {
      currentFrame++;
      const progress = easeOutQuad(currentFrame / totalFrames);
      const currentCount = Math.floor(startingCount - (startingCount - targetCount) * progress);
      
      setDisplayCount(currentCount);
      
      if (currentFrame === totalFrames) {
        if (animationRef.current) {
          clearInterval(animationRef.current);
        }
        setDisplayCount(targetCount);
      }
    }, frameDuration);
  };
  
  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t);
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 min-h-[100svh] flex items-center pt-16 px-4 sm:px-6">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="max-w-xl mx-auto md:mx-0 text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-2">
            <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Global Sports Network
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeUp} 
            className="font-bold text-4xl md:text-5xl lg:text-[3.57rem] tracking-tight mb-6"
          >
            {/* <span className="text-blue-600">Connect</span> with the global sports community */}
            From Local Fields To Global Networks 
            <br/> <span className="text-blue-600 text-lg md:text-2xl lg:text-3xl">Your Game, Your Network, Your Future</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-gray-700 text-lg mb-8"
          >
            A unified platform where athletes, coaches, and clubs collaborate to 
            elevate sports performance and build meaningful connections anytime, anywhere.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={openWaitlist}
              data-youform-open="jvxfwdwr" data-youform-position="center"
              className="text-base px-8 py-6 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-200 transition-all rounded-xl"
            >
              Join the Waiting List
              <ChevronRight className="ml-2 h-5 w-5"/>
            </Button>
            
            
            <Button
            variant="outline"
            className="text-base px-8 py-6 border-blue-200 text-blue-600 hover:bg-blue-50 transition-all rounded-xl"
            onClick={() => window.location.href = '/#how-it-works'}
          >
            Learn How It Works
          </Button>
          </motion.div>
          
          <motion.p 
            variants={fadeUp}
            className="text-sm text-gray-500 mt-6"
          >
            Join over <span className="font-semibold">{displayCount.toLocaleString()}+</span> sports professionals already on the waitlist
          </motion.p>
        </motion.div>
        
        <motion.div
          className="hidden md:block relative"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <div className="relative">
            {/* Main image with overlay gradient */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent z-10 rounded-2xl"></div>
              <img
                src="/lovable-uploads/794e9ab1-0b6d-4175-9187-cfbabd425cc1.png"
                alt="Athletes connecting through Spopeer"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Interactive elements on top of the image */}
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">{displayCount.toLocaleString()}+ Active Users</span>
              </div>
            </div>
            
            <div className="absolute top-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium">50+ Countries</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;