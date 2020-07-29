import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Footer} from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import {Education} from './pages/Education';
import {Experience} from './pages/Experience';
import {Home} from './pages/Home';
import {Other} from './pages/Other';
import {Projects} from './pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/education" component={Education}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/other" component={Other}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;