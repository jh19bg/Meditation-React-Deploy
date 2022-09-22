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
          <Route path="/">
            <Home />
          </Route>
          <Route path="/benefits">
            <Benefits />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>  
    
  );
}
