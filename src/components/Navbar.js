import React, { Component } from 'react';
import { Link } from 'gatsby';
import TwitterIcon from '../images/SVG/twitter.svg';
import LinkedinIcon from '../images/SVG/linkedin.svg';
import GithubIcon from '../images/SVG/github.svg';
import MailIcon from '../images/SVG/mail.svg';

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
              <img src={TwitterIcon} alt="Twitter logo" className="nav__icon" />
            </a>
          </li>
          <li className="nav__item nav__item--2">
            <a
              href="https://www.linkedin.com/in/nicholaskreps/"
              className="nav__link"
            >
              <img src={LinkedinIcon} alt="Linkedin logo" className="nav__icon" />
            </a>
          </li>
          <li className="nav__item nav__item--3">
            <a
              href="https://github.com/sperkn"
              className="nav__link"
            >
              <img src={GithubIcon} alt="Github logo" className="nav__icon" />
            </a>
          </li>
          <li className="nav__item nav__item--4">
            <Link to="/contact" className="nav__link">
              <img src={MailIcon} alt="Mail Icon" className="nav__icon" />
            </Link>
          </li>
        </ul>
      </nav >
    );
  }
}

export default Navbar;