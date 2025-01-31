import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import SkillsShowcase from './components/SkillsShowcase';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  return (
    <div className="App">
      <AnimatedBackground animationName="matrixRain"
        blendMode="hard-light"
        style={{ opacity: 0.9 }}
      />

      <HeroBanner />
      <SkillsShowcase />
    </div>
  );
}

export default App;
