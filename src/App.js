import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Education, Experience, Projects, Skills, More, NotFoundPage} from './pages';
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
      <Route path="skills" element={<Skills />} />
      <Route path="more" element={<More />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;