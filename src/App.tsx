import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsStrip from './components/SkillsStrip';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsStrip />
        <AboutSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
