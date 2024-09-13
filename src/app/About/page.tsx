import Link from 'next/link';
import { FaYoutube , FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-4/5 max-w-xl text-center">
        {/* Thank You Section */}
        <h1 className="text-4xl font-bold mb-6">Thank You for Visiting!</h1>
        <p className="text-lg text-gray-700 mb-6">
          We appreciate your time exploring our blog. Your support encourages us to share more valuable content.
        </p>

        {/* About Us Section */}
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          This blog is run by a team of passionate web developers who enjoy sharing knowledge about programming, technology, and life in the tech industry. Stay tuned for more insightful articles!
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="https://www.youtube.com/@thisisMrAdeeel" target="_blank" className="text-gray-500 hover:text-blue-500" passHref>
            
              <FaYoutube size={30} />
            
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-adeel-aa29a923a/" target="_blank" className="text-gray-500 hover:text-blue-600" passHref>
            
              <FaLinkedin size={30} />
            
          </Link>
          <Link href="https://github.com/amAdeel" target="_blank" className="text-gray-500 hover:text-black" passHref>
          <FaGithub size={30} />
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
