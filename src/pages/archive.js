import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import ProjectsTable from '../components/ProjectsTable';
import BackArrowIcon from '../components/svg/BackArrowIcon';

const Archive = () => {
  return (
    <Layout title="Project Showcase">
      <div>
        <Link to="/" className="group mb-2 inline-flex items-center font-semibold leading-tight text-sky-300">
          <BackArrowIcon />
          MD Ziauddin
        </Link>
      </div>
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-10'>All Projects</h1>
      <ProjectsTable />
    </Layout>
  );
};

export default Archive;