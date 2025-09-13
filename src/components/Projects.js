import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioData {
        edges {
          node {
            projects {
              title
              description
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
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      <div>
        <ul className="group/list">
          {projects.map((project, i) => (
            <li key={i} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3><a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href={project.link} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} (opens in new tab)`}><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>{project.title}</span></a></h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>
                </div>
                <div className="z-10 sm:col-span-2">
                  <ul className="mt-0 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, j) => (
                      <li key={j} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;