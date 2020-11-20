import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MobileApplicationHome from './components/pages/MobileApplicationHome';
import GenericProjectsPage from './components/pages/GenericProjectsPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mobile-applications-home' exact component={MobileApplicationHome} />
          <Route path='/projects' exact component={GenericProjectsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
