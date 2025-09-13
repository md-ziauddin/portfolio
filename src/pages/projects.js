import React from 'react';
import Layout from '../components/Layout';
import ProjectsTable from '../components/ProjectsTable';

const ProjectsPage = () => {
  return (
    <Layout>
      <h1>Project Showcase</h1>
      <ProjectsTable />
    </Layout>
  );
};

export default ProjectsPage;