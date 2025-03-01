import { motion } from "framer-motion";
import { Globe, ShoppingBag, Lock, BarChart3, TrendingUp, Bot } from "lucide-react";

const features = [
  {
    title: "Global Network",
    description: "Connect across 1,500+ sports and 200+ countries.",
    icon: Globe,
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Sports Marketplace",
    description: "Buy/sell gear, training, and services.",
    icon: ShoppingBag,
    color: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    title: "AI Matchmaking",
    description: "Find your perfect coach, athlete, or sponsor.",
    icon: Bot,
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Secure & Transparent",
    description: "Blockchain backed contracts and payments.",
    icon: Lock,
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Sports Stock Exchange",
    description: "Invest in sports careers and organizations.",
    icon: TrendingUp,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    title: "Specialized Tools",
    description: "Sport-focused analytics and fan engagement.",
    icon: BarChart3,
    color: "bg-red-100",
    iconColor: "text-red-600"
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
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Succeed</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our comprehensive suite of features empowers sports professionals to connect, 
            grow, and succeed in the global sports ecosystem.
          </p>
        </motion.div>
        
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
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all group"
              variants={itemVariants}
            >
              <div className={`${feature.color} p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
