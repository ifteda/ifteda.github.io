import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home, Education, Experience, Projects, Skills, More, NotFoundPage} from './pages';
import useGATracker from './useGATracker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useGATracker();

  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash === "#/education") {
      navigate('/education');
    } else if (window.location.hash === "#/experience") {
      navigate('/experience');
    } else if (window.location.hash === "#/projects") {
      navigate('/projects');
    } else if (window.location.hash === "#/skills") {
      navigate('/skills');
    } else if (window.location.hash === "#/more") {
      navigate('/more');
    }
  }, [navigate]);


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