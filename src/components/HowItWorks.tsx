import { motion } from "framer-motion";
import { ArrowRightCircle, CheckCircle2 } from "lucide-react";

const categories = [
  {
    title: "Athletes",
    icon: "/lovable-uploads/running.png",
    color: "bg-orange-100",
    textColor: "text-orange-600",
    primaryColor: "bg-orange-500",
    steps: [
      { title: "Create Your Profile", description: "Showcase your skills & achievements" },
      { title: "Promote Your Skills", description: "Get discovered by clubs & coaches" },
      { title: "Connect & Network", description: "Build relationships in your sport" },
      { title: "Get AI-Powered Matches", description: "Find opportunities that fit your profile" }
    ]
  },
  {
    title: "Coaches & Managers",
    icon: "/lovable-uploads/coach1.png",
    color: "bg-purple-100",
    textColor: "text-purple-600",
    primaryColor: "bg-purple-500",
    steps: [
      { title: "Build Your Brand", description: "Establish your coaching credentials" },
      { title: "Scout Efficiently", description: "Find athletes that match your needs" },
      { title: "Collaborate & Earn", description: "Create new revenue streams" },
      { title: "Develop Your Career", description: "Connect with clubs and opportunities" }
    ]
  },
  {
    title: "Sports Clubs",
    icon: "/lovable-uploads/football-club.png",
    color: "bg-green-100",
    textColor: "text-green-600",
    primaryColor: "bg-green-500",
    steps: [
      { title: "Launch Your Club", description: "Create a digital presence" },
      { title: "Recruit with AI", description: "Find the perfect talent match" },
      { title: "Engage Your Community", description: "Build a loyal fanbase" },
      { title: "Promote Events", description: "Maximize attendance and reach" }
    ]
  },
  {
    title: "Supportive Professionals",
    icon: "/lovable-uploads/suitcase.png",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    primaryColor: "bg-blue-600",
    steps: [
      { title: "Create Your Profile", description: "Highlight your expertise" },
      { title: "List Your Services", description: "Showcase what you offer" },
      { title: "Connect Globally", description: "Reach clients worldwide" },
      { title: "Scale Your Business", description: "Grow through the sports ecosystem" }
    ]
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headingVariants}
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Spopeer Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform makes it easy for everyone in the sports ecosystem to connect,
            collaborate, and grow together. Here's how you can get started based on your role:
          </p>
        </motion.div>
        
        {/* Tabs navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headingVariants}
        >
          {categories.map((category, index) => (
            <a 
              key={index}
              href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${category.color} ${category.textColor} px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 hover:shadow-md transition-all`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img 
                  src={category.icon} 
                  alt={category.title}
                  className="w-4 h-4 object-contain"
                />
              </div>
              {category.title}
            </a>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              id={category.title.toLowerCase().replace(/\s+/g, '-')}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100"
              variants={itemVariants}
            >
              <div className={`${category.primaryColor} py-5 px-6 text-white`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                    <img 
                      src={category.icon} 
                      alt={category.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-5">
                  {category.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${category.color}`}>
                          <span className={`text-sm font-bold ${category.textColor}`}>{stepIndex + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{step.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      
      </div>
    </section>
  );
};

export default HowItWorks;