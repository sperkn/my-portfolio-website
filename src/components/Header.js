import React, { Component } from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/about" className="header__link">
          <h1 className="header__name">Nicholas Kreps</h1>
          <ul className="header__description"><li className="header__titles header__titles--1">ideate</li>  •  <li className="header__titles header__titles--2">create</li> •  <li className="header__titles header__titles--3">repeat</li></ul>
        </Link>
        <Navbar />
      </header>
    )
  }
}

export default Header;
