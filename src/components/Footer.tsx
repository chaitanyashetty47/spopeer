
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-spopeer-blue">
              Spopeer<span className="text-white">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Connecting the global sports community
            </p>
          </div>
          
          <ul className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <li>
              <a href="#" className="text-gray-300 hover:text-spopeer-blue transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-spopeer-blue transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-spopeer-blue transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
          
          <div className="flex items-center space-x-4">
            <a href="#waitlist" className="text-sm font-medium bg-spopeer-blue px-4 py-2 rounded-full flex items-center hover:bg-opacity-90 transition-colors">
              Join Waitlist
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Spopeer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
