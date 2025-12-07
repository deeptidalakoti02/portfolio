# Deepti Dalakoti - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at [http://localhost:5173/](http://localhost:5173/)

## 📁 Project Structure

```
react-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # Fixed navigation bar with logo and menu
│   │   ├── Navigation.css
│   │   ├── HeroSection.tsx         # Hero section with intro card and CTA
│   │   ├── HeroSection.css
│   │   ├── ProjectsSection.tsx     # Featured projects section
│   │   ├── ProjectsSection.css
│   │   ├── ProjectCard.tsx         # Individual project card component
│   │   └── ProjectCard.css
│   ├── data/
│   │   └── projects.ts             # Project data (titles, descriptions, links)
│   ├── styles/
│   │   ├── variables.css           # CSS custom properties (colors, etc.)
│   │   └── animations.css          # Keyframe animations
│   ├── assets/
│   │   ├── icons/                  # SVG icons
│   │   └── images/                 # Project images and photos
│   ├── App.tsx                     # Main app component
│   ├── App.css
│   ├── index.css                   # Global styles
│   └── main.tsx                    # App entry point
├── public/                         # Static assets
└── package.json
```

## 🎨 Component Breakdown

### Navigation
- Fixed navigation bar with smooth slide-down animation
- Logo with hover effects
- Navigation links (Work, About, Blogs, Resume)
- Email button with icon
- Responsive mobile menu

### HeroSection
- Animated grain texture background
- Floating gradient decorations
- Intro card with profile image
- Hero text with custom typography
- Call-to-action buttons
- Scroll indicator

### ProjectsSection
- Featured projects heading
- Grid layout (2 columns on desktop, 1 on mobile)
- Animated blue circle decoration
- Project cards with hover effects

### ProjectCard
- Project title and description
- "View Case Study" button
- Placeholder for project illustrations
- Smooth hover animations

## 🎯 Key Features

- **Modern Design**: Dark theme with cream text and pink accents
- **Animations**: Smooth fade-in, slide-up, and float animations
- **Responsive**: Mobile-first design with breakpoints at 640px, 768px, and 1024px
- **Performance**: Built with Vite for fast development and optimized builds
- **Type Safety**: Full TypeScript support
- **Clean Code**: Component-based architecture with separated concerns

## 🎨 Design System

### Colors
- `--bg-dark`: #1C1C1C (Main background)
- `--text-muted`: #9F9790 (Secondary text)
- `--button-bg`: #EAEAEA (Button background)
- `--button-text`: #222222 (Button text)
- `--accent-pink`: #E91E63 (Primary accent)
- `--bright-pink`: #FF006E (Bright accent)
- `--cream`: #FFEBDA (Hero text)
- `--blue-accent`: #0F2BCF (Decorative)
- `--card-bg`: #2A2A2A (Project cards)

### Typography
- Font Family: Poppins (weights: 300, 400, 500, 600, 700)
- Logo Font: Rouge Script

### Breakpoints
- Small mobile: 640px
- Tablet: 768px
- Desktop: 1024px
- Max width: 1400px

## 📝 Customization Guide

### Update Projects
Edit [src/data/projects.ts](src/data/projects.ts) to add/modify projects:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    caseStudyLink: "/case-study-url"
  }
];
```

### Add Project Images
1. Add images to `src/assets/images/`
2. Import in `ProjectCard.tsx`
3. Replace the placeholder SVG

### Update Personal Info
- Navigation email: Edit [src/components/Navigation.tsx](src/components/Navigation.tsx)
- Profile image: Replace in [src/components/HeroSection.tsx](src/components/HeroSection.tsx)
- Hero text: Edit [src/components/HeroSection.tsx](src/components/HeroSection.tsx)

### Modify Colors
Update CSS variables in [src/styles/variables.css](src/styles/variables.css)

## 🔧 Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Styling with custom properties and animations
- **Google Fonts** - Poppins and Rouge Script

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

---

Built with ❤️ using React and Vite
