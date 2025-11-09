import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Settings, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud'];
  
  const categoryIcons = {
    Frontend: Code,
    Backend: Settings,
    Database: Database,
    Cloud: Cloud,
    // DevOps: Wrench
  };

  const filteredSkills = activeCategory === 'All' 
    ? skills.technical 
    : skills.technical.filter(skill => skill.category === activeCategory);

  const ProgressBar = ({ skill, delay }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setProgress(skill.level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [skill.level, delay]);

    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-secondary-900 dark:text-white">
            {skill.name}
          </h4>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {skill.level}%
          </span>
        </div>
        <div className="relative">
          <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              Skills & <span className="text-primary-600 dark:text-primary-400">Expertise</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category];
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {IconComponent && <IconComponent size={18} />}
                  {category}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="card hover:scale-105 transition-transform"
              >
                <ProgressBar skill={skill} delay={index * 100} />
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white dark:bg-secondary-700 rounded-lg shadow-md text-secondary-700 dark:text-secondary-300 font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Skill Categories Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                category: 'Frontend',
                icon: Code,
                color: 'from-blue-500 to-blue-600',
                count: skills.technical.filter(s => s.category === 'Frontend').length
              },
              {
                category: 'Backend',
                icon: Settings,
                color: 'from-green-500 to-green-600',
                count: skills.technical.filter(s => s.category === 'Backend').length
              },
              {
                category: 'Database',
                icon: Database,
                color: 'from-purple-500 to-purple-600',
                count: skills.technical.filter(s => s.category === 'Database').length
              },
              {
                category: 'Cloud & DevOps',
                icon: Cloud,
                color: 'from-orange-500 to-orange-600',
                count: skills.technical.filter(s => ['Cloud', 'DevOps'].includes(s.category)).length
              }
            ].map((item) => (
              <div 
                key={item.category}
                className="card text-center hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setActiveCategory(item.category.split(' ')[0])}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  {item.category}
                </h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {item.count}
                </p>
                <p className="text-sm text-secondary-500 dark:text-secondary-400">
                  Technologies
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
