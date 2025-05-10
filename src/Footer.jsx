import { FaGithub, FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rgb(16, 25, 46) text-white py-4 text-center shadow-lg w-full">
      <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center">EchoAI</h1>
        
        <div className="flex justify-center space-x-4 mb-3">
          <a
            href="https://github.com/teenagoyal21"
            className="text-pink-400 hover:text-white transform hover:scale-110 transition duration-300 flex items-center"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://www.linkedin.com/in/teenagoyal/"
            className="text-pink-400 hover:text-white transform hover:scale-110 transition duration-300 flex items-center"
          >
            <FaRocket className="mr-1" /> Contact Now
          </a>
        </div>
        <p className="text-xs text-gray-500">&copy; 2025 EchoAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;