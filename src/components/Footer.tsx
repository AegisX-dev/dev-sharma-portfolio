import SocialLinks from '@/components/SocialLinks';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 mt-24 py-12 bg-linear-to-t from-gray-900/50 to-transparent">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          {/* About Section */}
          <div>
            <h3 className="text-gray-100 text-base font-semibold mb-4">Dev Sharma</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              AI Application Developer & Full-Stack Developer passionate about creating intelligent solutions and seamless user experiences.
            </p>
            <p className="text-gray-500 text-xs italic">
              "Building the future, one line of code at a time"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-100 text-base font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-gray-400 text-sm hover:text-gray-100 transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-400 text-sm hover:text-gray-100 transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 text-sm hover:text-gray-100 transition-colors">
                Projects
              </a>
              <a href="#certifications" className="text-gray-400 text-sm hover:text-gray-100 transition-colors">
                Certifications
              </a>
              <a href="#contact" className="text-gray-400 text-sm hover:text-gray-100 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-100 text-base font-semibold mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>devsh0801@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Dev Sharma. All rights reserved.
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
