
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="waitlist" className="py-20 px-6 bg-spopeer-lightgray">
      <div className="container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-semibold mb-4">"Your game, your network, your future!"</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Join the Future of Sports?</h2>
          
          <Button className="cta-button text-lg px-10 py-6">
            Join our waiting list
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
