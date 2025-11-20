import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full Stack Developer',
    'React Specialist',
    'Problem Solver',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900/20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-secondary-100 dark:bg-secondary-700/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-800/30 rounded-full blur-2xl opacity-50"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-secondary-700 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 border-4 border-white dark:border-secondary-800 rounded-full animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                {personalInfo.name}
              </span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-secondary-600 dark:text-secondary-300 font-medium h-12">
              I'm a{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary flex items-center gap-2 group"
            >
              <Mail size={18} />
              Get In Touch
            </button>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-2xl mx-auto">
            {[
              { number: '5+', label: 'Projects' },
              { number: '1', label: 'Years Exp' },
              { number: '3', label: 'Happy Clients' },
              { number: '100%', label: 'Dedication' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.number}
                </div>
                <div className="text-sm text-secondary-500 dark:text-secondary-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-secondary-400 dark:text-secondary-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
