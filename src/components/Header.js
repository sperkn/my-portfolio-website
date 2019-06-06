import React, { Component } from 'react'
import { Link } from 'gatsby'
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/about" className="header__link">
          <h1 className="header__name">Nicholas Kreps</h1>
        </Link>
        <ul className="header__description"><li className="header__titles">Engineer</li>  •  <li className="header__titles">Code</li> •  <li className="header__titles">Create</li></ul>
        <Navbar />
      </header>
    )
  }
}

export default Header;
