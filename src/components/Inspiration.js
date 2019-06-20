import React, { Component } from 'react';

class Inspiration extends Component {
  handleClick = () => {
    const modal = document.querySelector(".inspo");
    const hasActiveClass = modal.classList.contains("inspo-active");
    if (hasActiveClass) {
      return modal.classList.remove("inspo-active");
    }
    modal.classList.add("inspo-active");
  }

  render() {
    return (
      <>
        <button className={this.props.class} onClick={this.handleClick}>Site Inspo</button>
        <div className="inspo">
          <ul className="inspo__list">
            <li className="inspo__item">
              <a
                href="https://html5up.net/aerial"
                className="inspo__link"
              >
                HTML5 UP!
            </a>
            </li>
            <li className="inspo__item">
              <a
                href="https://kentcdodds.com/"
                className="inspo__link"
              >
                Kent C. Dodds
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Inspiration;