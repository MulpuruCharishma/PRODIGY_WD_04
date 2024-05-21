// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="section">
      <h2>Welcome to My Portfolio</h2>
      <p>Explore my skills, projects, and accomplishments as a web developer.</p>
      <Link to="/about" className="abt">Know More About Me </Link>
    </div>
  );
}

export default Home;
