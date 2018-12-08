import React from 'react'
// import '../styles/main.scss'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import headshot from '../images/headshot1.jpg'
import githubIcon from '../images/SVG/github.svg'
import linkedinIcon from '../images/SVG/linkedin.svg'
import twitterIcon from '../images/SVG/twitter.svg'
import mediumIcon from '../images/SVG/medium.svg'

const IndexPage = () => (
  <Layout>
    <div className="user">
      <img src={headshot} alt="Avatar" className="user__picture" />
      <div className="media">
        <ul className="media__list">
          <li className="media__item">
            <a
              href="https://github.com/sperkn"
              target="_blank"
              class="media__link"
            >
              <img src={githubIcon} alt="Github Icon" className="" />
            </a>
          </li>
          <li className="media__item">
            <a
              href="https://www.linkedin.com/in/nicholaskreps/"
              target="_blank"
              class="media__link"
            >
              <img src={linkedinIcon} alt="Linkedin Icon" className="" />
            </a>
          </li>
          <li className="media__item">
            <a
              href="https://twitter.com/NicholasKreps"
              target="_blank"
              class="media__link"
            >
              <img src={twitterIcon} alt="Twitter Icon" className="" />
            </a>
          </li>
          <li className="media__item">
            <a
              href="https://medium.com/@nicholaskreps"
              target="_blank"
              class="media__link"
            >
              <img src={mediumIcon} alt="Medium Icon" className="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
