import React from 'react'
// import { Link } from 'gatsby'
import '../styles/main.scss'
import headshot from '../images/headshot1.jpg'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          Logo
          {/* <Link to="/" className="logo__link">
            <svg class="logo__icon">
              <use xlink:href="img/sprite.svg#icon-home" />
            </svg>
          </Link> */}
        </div>
        <div className="user">
          {/* <img
            src={headshot}
            alt="Avatar"
            className="user__picture"
          /> */}
          <span className="user__name">Nicholas Kreps</span>
        </div>
      </header>
    )
  }
}

export default Header
