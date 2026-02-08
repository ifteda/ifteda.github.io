import React from 'react';
import Home from './pages/Home';
import useGATracker from './useGATracker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useGATracker();
  return <Home />;
}

export default App;