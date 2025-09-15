import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const ProjectShowcaseTemplate = ({ data, children }) => {
  const { title, date } = data.mdx.frontmatter;

  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>{date}</p>
      <div>{children}</div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default ProjectShowcaseTemplate;
