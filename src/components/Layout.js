import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';

const Layout = ({ children, title }) => {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;

    const handleMouseMove = (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // TODO: Add click.mp3 to static/sounds directory
  const playClickSound = () => {
    if (muted) return;
    const audio = new Audio('/sounds/click.mp3');
    audio.play();
  };

  useEffect(() => {
    document.addEventListener('click', playClickSound);
    return () => {
      document.removeEventListener('click', playClickSound);
    };
  }, [muted]);

  const MutedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  );

  const UnmutedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  );

  return (
    <>
      <Seo title={title} />
      <div className="cursor-glow"></div>
      <div className="bg-background text-text-primary font-sans antialiased selection:bg-sky-300 selection:text-slate-900">
        <a href="#about" className="skip-link">Skip to main content</a>
        <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-12 font-sans md:px-8 md:py-20 lg:px-12 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-12">
            <div className="lg:w-2/6">
              <Header />
            </div>
            <main id="content" className="pt-24 lg:w-3/5 lg:py-24">
              {children}
            </main>
          </div>
        </div>
        <div className="lg:fixed lg:bottom-0 lg:left-12">
          <button onClick={() => setMuted(!muted)} className="mb-4">
            {muted ? <MutedIcon /> : <UnmutedIcon />}
          </button>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;