import { motion } from "framer-motion";

const features = [
  {
    title: "Our Mission:",
    description: "Empower every sports enthusiast to Connect, Share, and Play—no matter the sport or location.",
    image: "/lovable-uploads/mission.png"
  },
  {
    title: "Athletes",
    description: "Athletes unlock their full potential with AI-driven growth tools.",
    image: "/lovable-uploads/running.png"
  },
  {
    title: "Coaches",
    description: "Coaches discover athletes, clubs, and monetize their expertise.",
    image: "/lovable-uploads/coach1.png"
  },
  {
    title: "Clubs",
    description: "Clubs recruit talent, engage fans, and trade assets on the blockchain.",
    image: "/lovable-uploads/football-club.png"
  },
  {
    title: "Professionals",
    description: "Professionals connect with global opportunities.",
    image: "/lovable-uploads/suitcase.png"
  },
  {
    title: "Fans",
    description: "Fans invest in sports careers, join communities, and promote niche sports.",
    image: "/lovable-uploads/fans.png"
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
  
  return (
    <section className="section-padding px-4 sm:px-6 bg-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl">
          <h2 className="mb-6">Revolutionizing how the world <br/> engages with sports</h2>
          <p className="text-base sm:text-lg text-gray-700">
            We're building a global ecosystem where athletes, coaches, clubs, and fans connect and thrive together.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-spopeer-lightgray p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="p-3 bg-spopeer-blue bg-opacity-10 rounded-full mb-4 w-20 h-20 flex items-center justify-center">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
