import { useInView } from 'react-intersection-observer';
import { CheckCircle, User, Code, Coffee, Target } from 'lucide-react';
import { about } from '../data/portfolio';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image and Stats */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 flex items-center justify-center">
                    <img
                      src={profileImg}
                      alt="Profile Photo"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-xl shadow-lg">
                  <Code size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary-600 text-white p-3 rounded-xl shadow-lg">
                  <Coffee size={24} />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {about.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-secondary-600 dark:text-secondary-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <Target size={24} className="text-primary-600 dark:text-primary-400 mr-3" />
                  My Story
                </h3>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {about.bio}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  What I Bring to the Table
                </h3>
                <div className="space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle
                        size={20}
                        className="text-green-500 mt-1 flex-shrink-0"
                      />
                      <p className="text-secondary-600 dark:text-secondary-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-6 border-t border-secondary-200 dark:border-secondary-700">
                <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-primary"
                  >
                    Let's Connect
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('projects');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-secondary"
                  >
                    View My Work
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: Code,
                title: "Clean Code Advocate",
                description: "I believe in writing maintainable, scalable, and well-documented code that stands the test of time."
              },
              {
                icon: Target,
                title: "Problem Solver",
                description: "I enjoy tackling complex challenges and finding elegant solutions that deliver real business value."
              },
              {
                icon: Coffee,
                title: "Continuous Learner",
                description: "Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices."
              }
            ].map((item, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform">
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
