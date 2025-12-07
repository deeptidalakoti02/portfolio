import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsStrip from './components/SkillsStrip';
import AboutSection from './components/AboutSection';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsStrip />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
