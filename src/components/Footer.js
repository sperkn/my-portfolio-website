import React, { Component } from 'react';
import Inspiration from './Inspiration';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Inspiration class={"footer__button"}>Site Inspo</Inspiration>
        <span className="footer__legal">&copy; 2019 by Nicholas Kreps. All rights reserved.</span>
      </footer>
    );
  }
}

export default Footer;