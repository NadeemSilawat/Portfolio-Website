# Modern Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features dark mode, smooth animations, and a beautiful UI design.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Dark/Light Mode**: Toggle between dark and light themes with persistence
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Elegant scroll animations and transitions
- **Interactive Components**: Hover effects, modal views, and dynamic content
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimizations
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠 Technologies Used

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: CSS animations and transitions
- **Intersection Observer**: react-intersection-observer

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your.email@example.com",
  // ... other personal info
};
```

### Projects
Add your projects to the `projects` array in `src/data/portfolio.js`

### Skills
Update your skills in the `skills` object in `src/data/portfolio.js`

## 📱 Sections

- **Hero**: Eye-catching introduction with typing animation
- **About**: Personal story and key highlights
- **Skills**: Technical skills with animated progress bars
- **Projects**: Portfolio showcase with filtering and modal views
- **Contact**: Contact form with validation and social links
- **Footer**: Additional links and information

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Preview build locally:
```bash
npm run preview
```

Made with ❤️ and React

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
