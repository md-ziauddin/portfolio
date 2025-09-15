import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioData {
        edges {
          node {
            about
            topSkills
          }
        }
      }
    }
  `);

  const { about, topSkills } = data.allPortfolioData.edges[0].node;

  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only mb-6">About</h2>
      <div className="space-y-4">
        {about.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300">Top skills</h3>
        <ul className="mt-2 flex flex-wrap" aria-label="Top skills">
          {topSkills.map((skill, i) => (
            <li key={i} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;