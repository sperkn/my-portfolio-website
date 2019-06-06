import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" className="form">
        <div className="form__layout">
          <p className="form__info">Contact me by filling out the form below:</p>
          <div className="form__field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </div>
          <div className="form__field">
            <label htmlFor="name" className="form__label">Name</label>
            <input type="text" name="name" id="name" className="form__input" required />
          </div>
          <div className="form__field">
            <label htmlFor="email" className="form__label">Email</label>
            <input type="email" name="email" id="email" className="form__input" required />
          </div>
          <div className="form__field">
            <label htmlFor="subject" className="form__label">Email Subject</label>
            <input type="text" name="subject" id="subject" className="form__input form__input--1" required />
          </div>
          <div className="form__field">
            <label htmlFor="message" className="form__label">Email Message</label>
            <textarea name="message" id="message" rows="15" cols="30" className="form__text-area" required />
          </div>
          <div className="form__field form__submit">
            <input type="submit" value="Send" className="form__button" />
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;