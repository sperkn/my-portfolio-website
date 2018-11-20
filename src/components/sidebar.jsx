import React from 'react'
// import { Link } from 'gatsby'
import '../styles/main.scss'

class Sidebar extends React.Component {
  render() {
    return (
      /* <Link to="/" className="logo__link">
            <svg class="logo__icon">
              <use xlink:href="img/sprite.svg#icon-home" />
            </svg>
          </Link> */
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">About</li>
          <li className="nav__item">Projects</li>
          <li className="nav__item">Blog</li>
          <li className="nav__item">Contact</li>
        </ul>
      </nav>
    )
  }
}

export default Sidebar
