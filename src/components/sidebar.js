import React from 'react'
import { Link } from 'gatsby'

import userIcon from '../images/SVG/user.svg'
import laptopIcon from '../images/SVG/laptop.svg'
import resourceIcon from '../images/SVG/list.svg'
import mailIcon from '../images/SVG/mail.svg'

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="nav">
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              <img src={userIcon} alt="About Icon" className="nav__icon"/>
              <span className="nav__text">About</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/projects" className="nav__link">
              <img src={laptopIcon} alt="Projects Icon" className="nav__icon"/>
              <span className="nav__text">Projects</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/picks" className="nav__link">
              <img src={resourceIcon} alt="Resources Icon" className="nav__icon"/>
              <span className="nav__text">Picks</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              <img src={mailIcon} alt="Contact Me Icon" className="nav__icon"/>
              <span className="nav__text">Contact</span>
            </Link>
          </li>
        </ul>

        <div className="legal">
          &copy; 2018 by Nicholas Kreps. All rights reserved.
        </div>
      </nav>
    )
  }
}

export default Sidebar
