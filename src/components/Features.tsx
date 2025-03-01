import { motion } from "framer-motion";
import { Globe, Users, TrendingUp, Shield, Laptop, Trophy } from "lucide-react";
const features = [{
  title: "Our Mission:",
  description: "Empower every sports enthusiast to Connect, Share, and Play—no matter the sport or location.",
  icon: Trophy
}, {
  title: "Athletes",
  description: "Athletes unlock their full potential with AI-driven growth tools.",
  icon: Users
}, {
  title: "Coaches",
  description: "Coaches discover athletes, clubs, and monetize their expertise.",
  icon: Users
}, {
  title: "Clubs",
  description: "Clubs recruit talent, engage fans, and trade assets on the blockchain.",
  icon: Globe
}, {
  title: "Professionals",
  description: "Professionals connect with global opportunities.",
  icon: Laptop
}, {
  title: "Fans",
  description: "Fans invest in sports careers, join communities, and promote niche sports.",
  icon: TrendingUp
}];
const Features = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Revolutionizing how the world engages with sports
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We're building a global ecosystem where athletes, coaches, clubs, and fans connect and thrive together.
            </p>
            <a href="#waitlist" className="cta-button inline-block">
              Join our waiting list
            </a>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }}>
            {features.map((feature, index) => <motion.div key={index} className="bg-spopeer-lightgray p-6 rounded-lg border border-gray-100" variants={itemVariants}>
                <feature.icon className="text-spopeer-blue h-8 w-8 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Features;