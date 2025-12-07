import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
