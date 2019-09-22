import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import aboutImage from '../images/headshot.jpg';
import Footer from '../components/Footer';

const AboutPage = () => (
  <Layout>
    <div className="about">
      <main className="about__bio">
        <header className="about__header">
          <h1 className="about__heading">Hi there! I'm Nick...</h1>
          <img src={aboutImage} alt="Nick" className="about__picture" />
        </header>
        <section className="about__info">
          <p className="about__text">
            I am a Technical Support Specialist at Iterable, a marketing technology
            startup, helping companies create multi-channel marketing campaigns to
            deliver seamless and personalized customer experiences. I was born in Miami and
            recently moved up to NYC for a new job and career!
          </p>
          <p className="about__text">
            As a civil engineering graduate from Case Western Reserve University, I obtained
            my Professional Engineer license, and helped build and design major roadways in
            South Florida. After several years in the industry, I realized it wasn't the career
            I wanted to do for the rest of my life and decided it was time for a change. I was
            looking for a role that would allow me to be more technical and creative, and in 2018,
            I completed a full-stack web development bootcamp at
            &nbsp;<a href="https://www.ironhack.com/en" className="about__contact-link">Ironhack</a>
            &nbsp; while working full-time. Fast forward a year and I successfully made the transition
            into the tech industry.
          </p>
          <p className="about__text">
            While my day-to-day responsbilites are not focused on programming, I continue to learn in
            my free time. Currently, I am learning React and diving deeper into the fundamentals of
            JavaScript. If you'd like to get in touch, you can&nbsp;
            <Link to="/contact" className="about__contact-link">email</Link>&nbsp;me or connect
            with me on&nbsp; <a href="https://www.linkedin.com/in/nicholaskreps/" className="about__contact-link">LinkedIn</a>
            &nbsp; and &nbsp;<a href="https://twitter.com/NicholasKreps" className="about__contact-link">Twitter</a>.
          </p>
        </section>
        <Link to="/"><button className="about__back">&larr; Back</button></Link>
      </main>
      <Footer />
    </div>

  </Layout>
)

export default AboutPage;
