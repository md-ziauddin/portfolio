import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2020 - Present">2020 — PRESENT</header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="https://your-company.com" target="_blank" rel="noreferrer noopener" aria-label="Technical Lead / Senior Software Engineer at Your Company (opens in a new tab)">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>Technical Lead / Senior Software Engineer · Your Company</span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  Owned system design for core AI platforms, integrating advanced ML models and ensuring scalable, low-latency performance. Mentored a team of engineers, fostering best practices in code quality, CI/CD, and agile development. Collaborated closely with product and business stakeholders to translate requirements into robust architectural solutions.
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">JavaScript/TypeScript</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">React</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Node.js</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">AWS</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">GCP</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Docker</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Kubernetes</div></li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Experience;
