import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Home, Education, Experience, Projects } from './pages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;