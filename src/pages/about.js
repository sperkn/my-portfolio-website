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
            I'm a Professional Engineer with over seven years of experience in the
            construction industry. I was born, and currently live, in Miami, Florida.
            I graduated from Case Western Reserve University with a Bachelors of Science
            in Civil Engineering.
          </p>
          <p className="about__text">
            Last year, I completed a full stack web development bootcamp and have
            continued with a self-directed learning approach while working full time.
            I am determined to transition into the software engineering industry and
            obtain a position where I can be challenged technically and creatively,
            while continuing to improve the built and connected world.
          </p>
          <p className="about__text">
            <strong>I am currently looking for a position as a Software Engineer. </strong>
            If you, or your company, are hiring please feel free to <Link to="/contact" className="about__contact-link">
              contact</Link> me.
          </p>
        </section>
        <Link to="/"><button className="about__back">&larr; Back</button></Link>
      </main>
      <Footer />
    </div>

  </Layout>
)

export default AboutPage;
