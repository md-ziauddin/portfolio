import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      <div className="space-y-4">
        <p>
          Senior Software Engineer (5+ yrs, B.Tech IT) focused on system architecture, scalable AI, and full‑stack product delivery across React, Node.js, and AWS/GCP.
        </p>
        <p>
          Led architecture for AI/Fintech products; reduced response latency by 90% and accelerated release cycles by 40% through targeted performance work and CI/CD improvements.
        </p>
        <p>
          Hands‑on builder and mentor; expertise in real‑time data, cloud‑native patterns, Google Apps Script, and GenAI; open to senior/lead roles including Tech Lead, Staff Engineer, and Principal Developer.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300">Top skills</h3>
        <ul className="mt-2 flex flex-wrap" aria-label="Top skills">
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Systems Design</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">GenAI</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">AWS</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">System Architecture</div></li>
          <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Technical Mentorship</div></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
