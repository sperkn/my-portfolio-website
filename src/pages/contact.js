import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => (
  <Layout>
    <div className="contact">
      <ContactForm />
      <Footer />
    </div>
  </Layout>
)

export default ContactPage;