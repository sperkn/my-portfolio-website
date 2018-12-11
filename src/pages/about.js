import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import aboutImage from '../images/about.jpg'
import htmlIcon from '../images/SVG/html5.svg'
import cssIcon from '../images/SVG/css3.svg'
import sassIcon from '../images/SVG/sass.svg'
import bootstrapIcon from '../images/SVG/bootstrap.svg'
import nodeIcon from '../images/SVG/node-dot-js.svg'
import jsIcon from '../images/SVG/javascript.svg'
import mongoIcon from '../images/SVG/mongodb.svg'
import angularIcon from '../images/SVG/angular.svg'
import reactIcon from '../images/SVG/react.svg'
import gatsbyIcon from '../images/SVG/gatsby.svg'

const AboutPage = () => (
  <Layout>
    <section className="about">
      <div className="bio">
        <div className="bio__heading">
          <h2 className="bio__header">A little about me...</h2>
          <img src={aboutImage} alt="Nick" className="bio__picture" />
        </div>
        <p className="bio__text">
          I'm Nicholas Kreps, a full stack web developer from Miami, Florida. As
          a life-long learner, I love pushing myself to work on projects that
          test me both logically and creatively. I embrace challenges and enjoy
          finding solutions.
        </p>
        <p className="bio__text">
          I started my career in civil engineering, working as a Project
          Engineer for construction and design firms the last 7 years. Over the
          last year, I have transitioned my focus to web development in order to
          provide a medium for me to bring my technical and creative ideas to
          life, as well as the ideas of others. If you've been wanting to start
          your own company and need a website created, or you have an idea for a
          web application that you would like prototyped, please feel free to{' '}
          <Link to="/contact" className="bio__contact-link">
            contact
          </Link>{' '}
          me. Depending on the position, I am also available for hire.
        </p>
      </div>
      <div class="skills">
        <h2 className="skills__header">Technologies</h2>
        <ul className="skills__list">
          <li className="skills__item">
            <img src={htmlIcon} alt="HTML5 Icon" className="skills__logo" />{' '}
            <span className="skills__text">HTML</span>
          </li>
          <li className="skills__item">
            <img src={cssIcon} alt="CSS3 Icon" className="skills__logo" />{' '}
            <span className="skills__text">CSS</span>
          </li>
          <li className="skills__item">
            <img src={sassIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">Sass</span>
          </li>
          <li className="skills__item">
            <img src={bootstrapIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">Bootstrap</span>
          </li>
          <li className="skills__item">
            <img src={jsIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">JavaScript</span>
          </li>
          <li className="skills__item">
            <img src={nodeIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">Node.js</span>
          </li>
          <li className="skills__item">
            <img src={mongoIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">MongoDB</span>
          </li>
          <li className="skills__item">
            <img src={angularIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">Angular</span>
          </li>
          <li className="skills__item">
            <img src={reactIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">React</span>
          </li>
          <li className="skills__item">
            <img src={gatsbyIcon} alt="" className="skills__logo" />{' '}
            <span className="skills__text">GatsbyJS</span>
          </li>
        </ul>
      </div>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </section>
  </Layout>
)

export default AboutPage
