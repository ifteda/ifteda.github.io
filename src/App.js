import { Routes, Route } from 'react-router-dom';
import { Home, Education, Experience, Projects } from './pages';
import useGATracker from './useGATracker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useGATracker();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  );
}

export default App;