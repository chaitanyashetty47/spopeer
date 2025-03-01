
import { motion } from "framer-motion";
import { Globe, ShoppingBag, Lock, BarChart3, TrendingUp, Bot } from "lucide-react";

const features = [
  {
    title: "Global Network",
    description: "Connect across 1,500+ sports and 200+ countries.",
    icon: Globe,
  },
  {
    title: "Sports Marketplace",
    description: "Buy/sell gear, training, and services.",
    icon: ShoppingBag,
  },
  {
    title: "AI Matchmaking",
    description: "Find your perfect coach, athlete, or sponsor.",
    icon: Bot,
  },
  {
    title: "Secure & Transparent",
    description: "Blockchain backed contracts and payments.",
    icon: Lock,
  },
  {
    title: "Sports Stock Exchange",
    description: "Invest in sports.",
    icon: TrendingUp,
  },
  {
    title: "Specialized Tools",
    description: "Sport-focused analytics and fan engagement.",
    icon: BarChart3,
  },
];

const KeyFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-spopeer-blue bg-opacity-10 rounded-md">
                  <feature.icon className="w-6 h-6 text-spopeer-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
