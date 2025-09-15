import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LinkIcon from './svg/LinkIcon';

const ProjectsTable = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioData {
        edges {
          node {
            archive {
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

  const { archive: projects } = data.allPortfolioData.edges[0].node;

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200 w-1/6">Year</th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200 w-2/6">Project</th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200 w-1/6">Made at</th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200 w-3/6">Built with</th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200 w-1/6">Link</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, i) => (
          <tr key={i} className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm text-slate-400">{project.year}</td>
            <td className="py-4 pr-4 align-top font-semibold text-slate-200">{project.title}</td>
            <td className="py-4 pr-4 align-top text-sm text-slate-400">{project.company}</td>
            <td className="py-4 pr-4 align-top">
              <ul className="flex flex-wrap">
                {project.technologies.map((tech, j) => (
                  <li key={j} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </td>
            <td className="py-4 pr-4 align-top text-sm text-slate-400">
              <a href={project.link} target="_blank" rel="noreferrer noopener" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base">
                <span>Link</span>
                <LinkIcon />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
