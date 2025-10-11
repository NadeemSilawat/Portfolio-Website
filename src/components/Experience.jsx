import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-primary-200 dark:bg-primary-800"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-800 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-secondary-700"
                  >
                    {/* Company and Duration */}
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <Building className="w-5 h-5 text-primary-600" />
                        <span className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                        >
                          <ChevronRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional stats or call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-secondary-900 rounded-full px-6 py-3 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">2+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Months Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;