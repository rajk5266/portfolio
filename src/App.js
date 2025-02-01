import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import SkillsShowcase from './components/SkillsShowcase';
import { AnimatedBackground } from 'animated-backgrounds';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <AnimatedBackground animationName="matrixRain"
        blendMode="hard-light"
        // style={{ opacity: 0.9 }}
      />

      <HeroBanner />
      <SkillsShowcase />
      <Projects/>
      <ContactForm/>
    </div>
  );
}

export default App;
