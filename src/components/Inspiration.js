import React, { Component } from 'react';

class Inspiration extends Component {
  openModal = () => {
    const modal = document.querySelector(".inspo");
    const hasActiveClass = modal.classList.contains("inspo-active");
    if (hasActiveClass) {
      return modal.classList.remove("inspo-active");
    }
    modal.classList.add("inspo-active");
  }

  closeModal = () => {
    const closeBtn = document.querySelector(".inspo__close");
    closeBtn.addEventListener('click', this.handleClose);
    return document.querySelector(".inspo").classList.remove("inspo-active");
  }

  render() {
    return (
      <>
        <button className={this.props.class} onClick={this.openModal}>Site Inspo</button>
        <div className="inspo">
          <div className="inspo__close">
            <span className="inspo__icon" onClick={this.closeModal}>
              &nbsp;
            </span>
          </div>

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