import React, { Component } from 'react';
import { Link } from 'gatsby'
import Icon from './Icon';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item nav__item--1">
            <a
              href="https://twitter.com/NicholasKreps"
              className="nav__link"
            >
              <Icon class={'nav__icon'} name={'icon-twitter'} />
            </a>
          </li>
          <li className="nav__item nav__item--2">
            <a
              href="https://www.linkedin.com/in/nicholaskreps/"
              className="nav__link"
            >
              <Icon class={'nav__icon'} name={'icon-linkedin'} />
            </a>
          </li>
          <li className="nav__item nav__item--3">
            <a
              href="https://github.com/sperkn"
              className="nav__link"
            >
              <Icon class={'nav__icon'} name={'icon-github'} />
            </a>
          </li>
          <li className="nav__item nav__item--4">
            <Link to="/contact" className="nav__link">
              <Icon class={'nav__icon'} name={'icon-mail'} />
            </Link>
          </li>
        </ul>
      </nav >
    );
  }
}

export default Navbar;