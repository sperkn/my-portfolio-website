import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="name">
          <Link to="/" className="name__link">
            <span className="name__text">Nicholas Kreps</span>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
