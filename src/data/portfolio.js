export const personalInfo = {
  name: "Nadeem Silawat",
  title: "Full Stack Developer",
  description: "Passionate developer creating digital experiences that matter",
  email: "im.nadeem.silawat@gmail.com",
  phone: "7424898859",
  location: "Pali",
  resume: "public/Nadeem-Silawat-Resume_.pdf",
  social: {
    github: "https://github.com/nadeemsilawat",
    linkedin: "https://linkedin.com/in/nadeemsilawat",
    instagram: "https://instagram.com/iamnadeemsilawat"
  }
};

export const about = {
  bio: "I'm a passionate full-stack developer creating beautiful, functional, and user-centered digital experiences. I specialize in modern JavaScript frameworks and have a strong background in both frontend and backend technologies.",
  highlights: [
    // "5+ years of professional development experience",
    "Expert in React, Node.js, and modern web technologies",
    "Strong focus on clean code and best practices",
    // "Experience with cloud platforms and DevOps"
  ],
  stats: [
    { label: "Projects Completed", value: "5+" },
    // { label: "Happy Clients", value: "30+" },
    { label: "Lines of Code", value: "100K+" },
    { label: "Cups of Coffee", value: "∞" }
  ]
};

export const skills = {
  technical: [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express", level: 75, category: "Backend" },
    { name: "MongoDB", level: 80, category: "Database" },
    // { name: "Vue.js", level: 80, category: "Frontend" },
    { name: "TypeScript", level: 65, category: "Frontend" },
    { name: "Next.js", level: 50, category: "Frontend" },
    { name: "AWS", level: 75, category: "Cloud" },
    // { name: "Python", level: 85, category: "Backend" },
    // { name: "PostgreSQL", level: 80, category: "Database" },
    // { name: "Docker", level: 80, category: "DevOps" }
  ],
  tools: [
    "VS Code", "Git", "GitHub", "Figma", "Postman", "Linux", // "Jira", "Slack"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Event Booking System",
    description: "A event reservation system with online booking, menu management, and customer feedback features.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "Express.js", "Event API", "MongoDB"],
    category: "Full Stack",
    demoUrl: "https://event-booking.example.com",
    githubUrl: "https://github.com/NadeemSilawat/Event-Booking-System",
    featured: false
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Full Stack",
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    category: "Frontend",
    demoUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/johndoe/taskapp",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather and forecasts using OpenWeather API with location-based services.",
    image: "/api/placeholder/400/300",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    category: "Frontend",
    demoUrl: "https://weather-dashboard.example.com",
    githubUrl: "https://github.com/johndoe/weather",
    featured: false
  },
  {
    id: 5,
    title: "Blog CMS",
    description: "A headless CMS for blog management with markdown support, SEO optimization, and multi-author capabilities.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "Contentful", "Vercel"],
    category: "Frontend",
    demoUrl: "https://blog-cms.example.com",
    githubUrl: "https://github.com/johndoe/blog-cms",
    featured: false
  },
  {
    id: 6,
    title: "Data Analytics API",
    description: "A RESTful API for data analytics with real-time processing, data visualization endpoints, and comprehensive documentation.",
    image: "/api/placeholder/400/300",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    demoUrl: "https://analytics-api.example.com/docs",
    githubUrl: "https://github.com/johndoe/analytics-api",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "Zeetron Network PVT.LTD",
    location: "Jaipur",
    duration: "June 2025 - Augast 2025",
    description: [
      "Lead development of client-facing web applications using React and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Architected scalable solutions serving 100K+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    duration: "2020 - 2022",
    description: [
      "Motivated MCA student with a strong foundation in web development and hands-on internship",
      "experience at Zeetron. Skilled in ReactJS, JavaScript, HTML, CSS, and API integration, with a proven",
      "ability to build responsive, user-friendly applications. Quick learner with strong problem-solving skills,",
      "eager to contribute to dynamic development teams and grow in the software industry."
    ]
  },
//   {
//     id: 3,
//     title: "Frontend Developer",
//     company: "Digital Agency",
//     location: "Los Angeles, CA",
//     duration: "2019 - 2020",
//     description: [
//       "Created responsive websites for various clients",
//       "Worked with WordPress and custom CMS solutions",
//       "Implemented modern JavaScript frameworks",
//       "Ensured cross-browser compatibility and accessibility"
//     ]
//   }
];

export const navigation = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" }
];
