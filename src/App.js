import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Races from './components/pages/Races'
import Footer from './components/layout/Footer'
import NotFound from './components/pages/NotFound'
import { Provider } from './context'


function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/races' component={Races} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
