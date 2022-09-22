import * as React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar.js';
import { Home } from './pages/Home.js';
import { Benefits } from './pages/Benefits.js';
import { Videos } from './pages/Videos.js';
import { Links } from './pages/Links.js';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App-container">
        <Switch>
          <Route exact path="/Meditation-React-Deploy/">
            <Home />
          </Route>
          <Route path="/Meditation-React-Deploy/benefits">
            <Benefits />
          </Route>
          <Route path="/Meditation-React-Deploy/videos">
            <Videos />
          </Route>
          <Route path="/Meditation-React-Deploy/links">
            <Links />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>  
    
  );
}
