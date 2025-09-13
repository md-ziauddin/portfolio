import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ProjectsTable = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioData {
        edges {
          node {
            projects {
              year
              title
              company
              technologies
              link
            }
          }
        }
      }
    }
  `);

  const { projects } = data.allPortfolioData.edges[0].node;

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Made at</th>
          <th>Built with</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, i) => (
          <tr key={i}>
            <td>{project.year}</td>
            <td>{project.title}</td>
            <td>{project.company}</td>
            <td>{project.technologies.join(', ')}</td>
            <td><a href={project.link} target="_blank" rel="noreferrer noopener">{project.link}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;