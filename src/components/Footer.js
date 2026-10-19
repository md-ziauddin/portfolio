import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0" id="contact">
      <p>
        Made with &nbsp;❤️ &nbsp;by Zia
      </p>
      <p className="mt-2">
        <Link
          to="/portfolio"
          className="text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 group"
        >
          <span>View Architecture Portfolio</span>
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;