import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="Nav-Brand">
          <h1>City Tour</h1>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/" className="is-active">Tours</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
