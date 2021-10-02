import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div className="index">
    <Link to="/about" className="index__link"><span>about</span></Link>
      <Header />
      <Footer />
    </div>
  </Layout>
)

export default IndexPage;
