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
      <nav className="sidebar">
        <ul className="nav__list">
          <li className="nav__item">
            {/* <Link to="/about" className="nav__link">
              <svg class="logo__icon">
                <use xlink:href="" />
              </svg>
              <span>About</span>
            </Link> */}
            About
          </li>
          <li className="nav__item">Projects</li>
          <li className="nav__item">Contact</li>
        </ul>

        <div class="legal">&copy; 2017 by trillo. All rights reserved.</div>
      </nav>
    )
  }
}

export default Sidebar

{
  /* <li class="side-nav__item side-nav__item--active">
<a href="#" class="side-nav__link">
    <svg class="side-nav__icon">
        <use xlink:href="img/sprite.svg#icon-home"></use>
    </svg>
    <span>Hotel</span>
</a>
</li> */
}
