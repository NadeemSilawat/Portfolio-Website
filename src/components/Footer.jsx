import { Github, Linkedin, Twitter, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: personalInfo.social.github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: personalInfo.social.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: personalInfo.social.twitter,
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: personalInfo.social.instagram,
      color: 'hover:text-pink-600'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary-400 mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  {personalInfo.description}
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  {personalInfo.email}
                </a>
                <p className="text-secondary-400 text-sm">
                  {personalInfo.location}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-secondary-800 dark:bg-secondary-900 rounded-lg text-secondary-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-secondary-300 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <div className="space-y-3">
                <p className="text-secondary-300">Web Development</p>
                <p className="text-secondary-300">UI/UX Design</p>
                <p className="text-secondary-300">API Development</p>
                <p className="text-secondary-300">Consulting</p>
                <p className="text-secondary-300">Code Review</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-secondary-400 text-sm flex items-center justify-center md:justify-start">
                © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
                <Heart size={14} className="mx-1 text-red-500" />
                and React
              </p>
              <p className="text-secondary-500 text-xs mt-1">
                All rights reserved.
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
