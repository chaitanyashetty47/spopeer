import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useWaitlist } from "@/contexts/WaitlistContext";

const CTA = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section id="waitlist" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-30 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-30 filter blur-3xl"></div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1 bg-blue-500 bg-opacity-30 text-white rounded-full text-sm font-medium">
            Join Our Community
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Sports Journey?
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of sports professionals already building their future on Spopeer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={openWaitlist} 
              className="text-base px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-lg transition-all rounded-xl"
            >
              Join the Waiting List
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="text-base px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-lg transition-all rounded-xl"
              onClick={() => window.location.href = '/#features'}
            >
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { number: "50+", label: "Countries" },
              { number: "15K+", label: "Sports Pros" },
              { number: "92%", label: "User Growth" },
              { number: "4.9/5", label: "User Rating" }
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/10">
                <p className="text-2xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-blue-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
