import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MobileApplicationHome from './components/pages/MobileApplicationHome';
import GenericProjectsPage from './components/pages/GenericProjectsPage';
import WebApplicationHome from './components/pages/WebApplicationHome';
import WebApplicationDemo from './components/pages/WebApplicationDemo';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mobile-applications-home' exact component={MobileApplicationHome} />
          <Route path='/web-applications-home' exact component={WebApplicationHome} />
          <Route path='/web-applications-demo' exact component={WebApplicationDemo} />
          <Route path='/projects' exact component={GenericProjectsPage} />
          <Route path='/contact' exact component={ContactPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
