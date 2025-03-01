
import { motion } from "framer-motion";
import { User, Users, Building2, Briefcase } from "lucide-react";

const categories = [
  {
    title: "Athletes",
    icon: User,
    steps: [
      "Register & Create Your Profile",
      "Promote Your Skills",
      "Get Selected",
      "Get AI-Powered Matches"
    ]
  },
  {
    title: "Coaches & Managers",
    icon: Users,
    steps: [
      "Register & Build Your Brand",
      "Scout Smarter",
      "Collaborate & Earn",
      "Promote your career"
    ]
  },
  {
    title: "Sports Clubs",
    icon: Building2,
    steps: [
      "Register & Launch Your Club",
      "Recruit with AI",
      "Engage Fans",
      "Promote sports event"
    ]
  },
  {
    title: "Supportive Professionals",
    icon: Briefcase,
    steps: [
      "Register & Create Your Profile",
      "List Your Services",
      "Connect Globally",
      "Sell & Scale"
    ]
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="how-it-works" className="py-20 px-6 bg-spopeer-lightgray">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="p-3 bg-spopeer-blue bg-opacity-10 rounded-full mb-4">
                <category.icon className="w-8 h-8 text-spopeer-blue" />
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4 w-full">
                {category.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <span className="font-semibold text-spopeer-blue mr-2">{stepIndex + 1}.</span>
                    <span className="text-left">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
