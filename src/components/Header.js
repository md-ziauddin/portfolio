import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useActiveSection from '../hooks/useActiveSection';
import EmailIcon from './svg/EmailIcon';
import GitHubIcon from './svg/GitHubIcon';
import LinkedInIcon from './svg/LinkedInIcon';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioData {
        edges {
          node {
            name
            headline
            social {
              email
              github
              linkedin
            }
          }
        }
      }
    }
  `);

  const { name, headline, social } = data.allPortfolioData.edges[0].node;
  const activeSection = useActiveSection(['about', 'experience', 'projects']);

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <a href="/">{name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
          {headline}
        </h2>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a
                className={`group flex items-center py-3 ${activeSection === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={(e) => handleNavLinkClick(e, 'about')}
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">About</span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${activeSection === 'experience' ? 'active' : ''}`}
                href="#experience"
                onClick={(e) => handleNavLinkClick(e, 'experience')}
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">Experience</span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${activeSection === 'projects' ? 'active' : ''}`}
                href="#projects"
                onClick={(e) => handleNavLinkClick(e, 'projects')}
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">Projects</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 md:mt-8 lg:mt-[200px] flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a href={`mailto:${social.email}`} className="block hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Email (opens in a new tab)">
            <span className="sr-only">Email</span>
            <EmailIcon />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a href={social.github} className="block hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a href={social.linkedin} className="block hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;