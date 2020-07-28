import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MainNav} from './components/MainNav';
import {Footer} from './components/Footer';
// import { ScrollToTop } from './components/ScrollToTop';
import {Home} from './pages/Home';
import {Education} from './pages/Education';
import {Experience} from './pages/Experience';
import {Projects} from './pages/Projects';
import {Other} from './pages/Other';

const App = () => {
  return (
    <BrowserRouter>
      <MainNav />
      {/* FIXME <ScrollToTop />*/}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/education" component={Education}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route path="/other" component={Other}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isNavHidden: false
//     };
//   }
//   render () {
//     return (
//       <BrowserRouter>
//         {this.state.isNavHidden ? null : <MainNav/>}
//         {/* FIXME <ScrollToTop />*/}
//         <Switch>
//           <Route exact path="/" component={Home}/>
//           <Route path="/education" component={Education}/>
//           <Route exact path="/experience" component={Experience}/>
//           <Route exact path="/projects" component={Projects}/>
//           <Route path="/other" component={Other}/>
//         </Switch>
//         <Footer/>
//       </BrowserRouter>
//     );
//   }
// }
