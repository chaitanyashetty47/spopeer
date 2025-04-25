import { motion } from "framer-motion";
import { 
  UserCircle2, Users, Trophy, Rocket,  // Athletes icons
  Building2, Search, DollarSign, GraduationCap,  // Coaches icons
  Globe, Target, MessageSquare, Calendar,  // Clubs icons
  Briefcase, ListChecks, Network, TrendingUp  // Professionals icons
} from "lucide-react";

const categories = [
  {
    title: "Athletes",
    shortTitle: "Athletes",
    icon: "/lovable-uploads/running.png",
    color: "bg-orange-100",
    textColor: "text-orange-600",
    primaryColor: "from-orange-500 to-orange-600",
    steps: [
      { 
        title: "Create Profile", 
        description: "Showcase your skills & achievements",
        icon: UserCircle2
      },
      { 
        title: "Promote Skills", 
        description: "Get discovered by clubs & coaches",
        icon: Trophy
      },
      { 
        title: "Network", 
        description: "Build relationships in your sport",
        icon: Users
      },
      { 
        title: "Get Matched", 
        description: "Find opportunities that fit your profile",
        icon: Rocket
      }
    ]
  },
  {
    title: "Coaches & Managers",
    shortTitle: "Coaches",
    icon: "/lovable-uploads/coach1.png",
    color: "bg-purple-100",
    textColor: "text-purple-600",
    primaryColor: "from-purple-500 to-purple-600",
    steps: [
      { 
        title: "Build Your Brand", 
        description: "Establish your coaching credentials",
        icon: Building2
      },
      { 
        title: "Scout Efficiently", 
        description: "Find athletes that match your needs",
        icon: Search
      },
      { 
        title: "Collaborate & Earn", 
        description: "Create new revenue streams",
        icon: DollarSign
      },
      { 
        title: "Develop Career", 
        description: "Connect with clubs and opportunities",
        icon: GraduationCap
      }
    ]
  },
  {
    title: "Sports Clubs",
    shortTitle: "Clubs",
    icon: "/lovable-uploads/football-club.png",
    color: "bg-green-100",
    textColor: "text-green-600",
    primaryColor: "from-green-500 to-green-600",
    steps: [
      { 
        title: "Launch Club", 
        description: "Create a digital presence",
        icon: Globe
      },
      { 
        title: "Recruit with AI", 
        description: "Find the perfect talent match",
        icon: Target
      },
      { 
        title: "Engage Community", 
        description: "Build a loyal fanbase",
        icon: MessageSquare
      },
      { 
        title: "Promote Events", 
        description: "Maximize attendance and reach",
        icon: Calendar
      }
    ]
  },
  {
    title: "Supportive Profession",
    shortTitle: "Supportive Profession",
    icon: "/lovable-uploads/suitcase.png",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    primaryColor: "from-blue-500 to-blue-600",
    steps: [
      { 
        title: "Create Profile", 
        description: "Highlight your expertise",
        icon: Briefcase
      },
      { 
        title: "List Services", 
        description: "Showcase what you offer",
        icon: ListChecks
      },
      { 
        title: "Connect Globally", 
        description: "Reach clients worldwide",
        icon: Network
      },
      { 
        title: "Scale Business", 
        description: "Grow through the sports ecosystem",
        icon: TrendingUp
      }
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
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            How Spopeer Works
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Our platform makes it easy for everyone in the sports ecosystem to connect,
            collaborate, and grow together.
          </p>
        </motion.div>
        
        {/* Updated tabs with hover effects */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-3"
          variants={headingVariants}
        >
          {categories.map((category, index) => (
            <a 
              key={index}
              href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${category.color} ${category.textColor} px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:shadow-lg transition-all hover:scale-105 hover:bg-opacity-80`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img 
                  src={category.icon} 
                  alt={category.shortTitle}
                  className="w-4 h-4 object-contain"
                />
              </div>
              {category.shortTitle}
            </a>
          ))}
        </motion.div>
        
        {/* Updated cards with better contrast and icons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
              variants={itemVariants}
            >
              <div className={`bg-gradient-to-r ${category.primaryColor} py-6 px-6 text-white`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <img 
                      src={category.icon} 
                      alt={category.shortTitle}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-extrabold">{category.shortTitle}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-5">
                  {category.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${category.color}`}>
                          <step.icon className={`w-4 h-4 ${category.textColor}`} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-700 mt-1">{step.description}</p>
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