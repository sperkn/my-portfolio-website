import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <div className="about">
      <p className="about__text">
        I'm Nicholas Kreps, a full stack web developer from Miami, Florida. As a
        life-long learner, I love pushing myself to work on projects that test
        me both logically and creatively. I see all challenges as puzzles that
        have a solution.
      </p>
      <p className="about__text">
        I started my career in civil engineering, working as a Project Engineer
        for construction and design firms the last 7 years. Over the last year,
        I have transitioned my focus to web development in order to provide a
        medium for me to bring my technical and creative ideas to life, as well
        as the ideas of others. If you've been wanting to start your own company
        and need a website created, or you have an idea for a web application
        that you would like prototyped, please feel free to{' '}
        <Link to="/">contact</Link> me.
      </p>
    </div>
    <div class="skills">
      
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
