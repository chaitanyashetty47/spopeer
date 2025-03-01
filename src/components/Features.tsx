import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Our Mission",
    description: "Empower every sports enthusiast to Connect, Share, and Play—no matter the sport or location.",
    image: "/lovable-uploads/mission.png",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Athletes",
    description: "Unlock your full potential with AI-driven tools for performance tracking, skill development, and networking.",
    image: "/lovable-uploads/running.png",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500"
  },
  {
    title: "Coaches",
    description: "Discover promising athletes, connect with clubs, and create new revenue streams with your expertise.",
    image: "/lovable-uploads/coach1.png",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Clubs",
    description: "Recruit exceptional talent, build an engaged fan community, and manage digital assets securely.",
    image: "/lovable-uploads/football-club.png",
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Professionals",
    description: "Access global opportunities in the sports industry and expand your professional network.",
    image: "/lovable-uploads/suitcase.png",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    title: "Fans",
    description: "Invest in emerging sports careers, join passionate communities, and help promote niche sports.",
    image: "/lovable-uploads/fans.png",
    iconBg: "bg-red-100",
    iconColor: "text-red-500"
  }
];

const Features = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="features" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            The Spopeer Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Revolutionizing how the world <br className="hidden sm:block"/> engages with sports
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're building a global ecosystem where athletes, coaches, clubs, and fans connect and thrive together through innovative technology.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all group"
              variants={itemVariants}
            >
              <div className={`p-4 ${feature.iconBg} rounded-2xl mb-6 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              
              <h3 className="font-bold text-xl mb-3 flex items-center">
                {feature.title}
                {index === 0 && <span className="ml-2 text-sm bg-blue-600 text-white px-2 py-0.5 rounded-full">Core</span>}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group-hover:underline">
                Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Added testimonial/stats section */}
        <motion.div 
          className="mt-20 bg-blue-600 text-white rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left md:col-span-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Join a growing community</h3>
              <p className="text-blue-100">Our platform connects sports enthusiasts worldwide every day</p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-xl">
                <p className="text-3xl font-bold mb-1">50+</p>
                <p className="text-sm text-blue-100">Countries</p>
              </div>
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-xl">
                <p className="text-3xl font-bold mb-1">15K+</p>
                <p className="text-sm text-blue-100">Sports pros</p>
              </div>
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-xl">
                <p className="text-3xl font-bold mb-1">92%</p>
                <p className="text-sm text-blue-100">User growth</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;