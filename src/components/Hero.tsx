
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [sport, setSport] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, role, sport });
    // Here you would typically send this data to your backend
    alert("Thanks for joining our waiting list!");
  };

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
        {/* Left Column - Text & Form */}
        <motion.div 
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-spopeer-blue">Spopeer</span>: "From local fields to global networks sports reimagined!"
            </h1>
            <p className="text-2xl font-semibold text-spopeer-darkgray mt-6 mb-4">
              "Your game, your network, your future!
            </p>
            <p className="text-lg text-gray-700 mb-8">
              The ultimate sports networking platform designed to unite athletes, coaches, clubs, and sports professionals worldwide. Whether you're looking to advance your career, find new opportunities, or build strong connections in the sports industry, Spopeer provides the tools to make it happen.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">I am</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Choose your role</label>
                <Select onValueChange={setRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="athlete">Athlete</SelectItem>
                    <SelectItem value="coach">Coach</SelectItem>
                    <SelectItem value="club">Club</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Your sport</label>
                <Select onValueChange={setSport}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="running">Running</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Enter your email</label>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="cta-button w-full">
                Join our waiting list
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
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
