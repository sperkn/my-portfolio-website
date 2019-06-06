import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <button className="footer__button">Website Inspiration</button>
        <span className="footer__legal">&copy; 2019 by Nicholas Kreps. All rights reserved.</span>
      </footer>
    );
  }
}

export default Footer;