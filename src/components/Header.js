import React from 'react';

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-title">
        <img
          src="../images/troll-face.png"
          alt="icon"
          className="nav-logo"
        />
        <h3>Meme Generator</h3>
      </div>
      <p>React Course - Project 3</p>
    </nav>
  );
}
