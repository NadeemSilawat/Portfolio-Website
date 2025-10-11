import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Eye, Star, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`card group cursor-pointer hover:scale-105 transition-all duration-300 ${
        inView ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center">
          <div className="text-center">
            <Eye size={48} className="mx-auto text-primary-500 dark:text-primary-400 mb-2" />
            <p className="text-primary-600 dark:text-primary-400 font-medium">Project Preview</p>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <button 
              className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.demoUrl, '_blank');
              }}
            >
              <ExternalLink size={20} />
            </button>
            <button 
              className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
            >
              <Github size={20} />
            </button>
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
            <Star size={12} className="mr-1" />
            Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Project Info */}
      <div>
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-secondary-500 dark:text-secondary-400 rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-3">
          <button 
            className="flex-1 btn-primary text-sm py-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(project);
            }}
          >
            View Details
          </button>
          <button 
            className="btn-secondary text-sm py-2 px-4"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.demoUrl, '_blank');
            }}
          >
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
            {project.title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Project Image */}
          <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Eye size={64} className="mx-auto text-primary-500 dark:text-primary-400 mb-4" />
              <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">Project Preview</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
              About this project
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-secondary-200 dark:border-secondary-700">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
          <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and creativity
            </p>
          </div>

          {/* Featured Projects Highlight */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6 flex items-center">
              <Star size={24} className="text-yellow-500 mr-2" />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-600 shadow-md hover:shadow-lg'
                }`}
              >
                <Filter size={16} />
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <button className="btn-secondary">
              View More Projects
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
