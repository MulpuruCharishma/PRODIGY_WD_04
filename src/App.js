import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <header className="app-header">
            <h1>My Portfolio</h1>
            <nav className="app-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
              </ul>
            </nav>
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </main>

          <footer className="app-footer"></footer>
        </div>
      </Router>
    );
  }
}

export default App;
