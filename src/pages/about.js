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
            I am a Senior Technical Support Specialist at Iterable, a marketing technology
            company, helping our customers create multi-channel marketing campaigns to
            deliver seamless and personalized customer experiences. I was born, and currently 
            reside, in Miami.
          </p>
          <p className="about__text">
            As a civil engineering graduate, I obtained
            my Professional Engineer license, and helped build and design major roadways in
            South Florida. After several years in the industry, I decided it was time for a change and 
            sought a role that would allow me to be more technical and creative. In late 2018,
            I completed a full-stack web development bootcamp at
            &nbsp;<a href="https://www.ironhack.com/en" className="about__contact-link">Ironhack</a>
            &nbsp; and landed my first job in the tech industry at Iterable in 2019.
          </p>
          <p className="about__text">
            While my day-to-day responsbilites are not focused on programming, I continue to learn in
            my free time. Currently, I am learning React and diving deeper into the fundamentals of
            JavaScript. If you'd like to get in touch, you can connect
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
