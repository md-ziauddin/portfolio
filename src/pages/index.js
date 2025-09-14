import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default IndexPage;