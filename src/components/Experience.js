import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioData {
        edges {
          node {
            experience {
              link
              role
              company
              period
              location
              description
              stack
              skills
            }
          }
        }
      }
    }
  `);

  const { experience } = data.allPortfolioData.edges[0].node;

  console.log({experience});
  

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only mb-6">Experience</h2>
      <div>
        <ol className="group/list">
          {experience.map((item, i) => (
            <li key={i} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.period}>{item.period}</header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href={item.link} target="_blank" rel="noreferrer noopener" aria-label={`${item.role} at ${item.company} (opens in a new tab)`}>
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{item.role} · {item.company}</span>
                      </a>
                    </div>
                  </h3>
                  {item.description.map((desc, j) => (
                    <p key={j} className="mt-2 text-sm leading-normal text-slate-400">{desc}</p>
                  ))}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {item.skills.map((skill, k) => (
                      <li key={k} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;