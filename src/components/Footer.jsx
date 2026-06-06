import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-dark-900 mt-auto">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arcangellmar. Desarrollo de software a medida, sistemas web y apps móviles.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/Arcangellmar" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arcangellmar/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-500 hover:bg-white/5 rounded-full transition-all">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
