import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      <div>
        <ul className="group/list">
          {/* Project 1 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3><a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Healthcare AI Assistant (opens in new tab)"><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Healthcare AI Assistant (AWS Bedrock)</span></a></h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">Engineered a conversational AI for patient support, focusing on secure patient context handling, HIPAA-aligned data flows, intelligent prompt orchestration, and latency-aware inference for real-time interactions.</p>
              </div>
              <div className="z-10 sm:col-span-2">
                <ul className="mt-0 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">React</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Node.js</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">AWS Bedrock</div></li>
                </ul>
              </div>
            </div>
          </li>
          {/* Project 2 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3><a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Real-time AI Streaming (opens in new tab)"><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Real-time AI Streaming (WebRTC + NestJS/Next.js)</span></a></h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">Developed a Gemini-style live interaction system for scalable audio and LLM streaming, building a high-throughput backend with WebRTC for minimal latency communication between clients and AI services.</p>
              </div>
              <div className="z-10 sm:col-span-2">
                <ul className="mt-0 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">WebRTC</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">NestJS</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Next.js</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">GCP/AWS</div></li>
                </ul>
              </div>
            </div>
          </li>
          {/* Project 3 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3><a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="S3 Lifecycle Automation (opens in new tab)"><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>S3 Lifecycle Automation</span></a></h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">Created serverless, tag-based cleanup workflows for AWS S3 to enforce compliance retention policies and reduce storage costs. Automated object lifecycle management using Lambda and EventBridge triggers, deployed via IaC.</p>
              </div>
              <div className="z-10 sm:col-span-2">
                <ul className="mt-0 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">AWS S3</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Lambda</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">EventBridge</div></li>
                </ul>
              </div>
            </div>
          </li>
          {/* Project 4 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3><a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Mentera App (opens in new tab)"><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Mentera App</span></a></h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">Contributed full-stack product work, including feature development and significant database schema evolution to support new application capabilities. Managed data migrations and performance tuning for Postgres and MongoDB.</p>
              </div>
              <div className="z-10 sm:col-span-2">
                <ul className="mt-0 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Node.js</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">Postgres</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">MongoDB</div></li>
                  <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">React</div></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
