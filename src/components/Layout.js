import React, { useEffect, useState, useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import useIsHomepage from '../hooks/useIsHomepage';
import MutedIcon from './svg/MutedIcon';
import UnmutedIcon from './svg/UnmutedIcon';

const Layout = ({ children, title }) => {
  const [muted, setMuted] = useState(false);
  const isHomepage = useIsHomepage();

  const clickSound = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new Audio('/sounds/click.mp3');
    }
    return null;
  }, []);

  useEffect(() => {
    if (clickSound) {
      clickSound.preload = 'auto';
    }
  }, [clickSound]);

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

  const playClickSound = () => {
    if (muted || !clickSound) return;
    clickSound.currentTime = 0;
    clickSound.play();
  };

  useEffect(() => {
    document.addEventListener('click', playClickSound);
    return () => {
      document.removeEventListener('click', playClickSound);
    };
  }, [muted, clickSound]);

  return (
    <>
      <Seo title={title} />
      <div className="cursor-glow"></div>
      <div className="bg-background text-text-primary font-sans antialiased selection:bg-sky-300 selection:text-slate-900">
        <a href="#about" className="skip-link">Skip to main content</a>
        <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-12 font-sans md:px-8 md:py-20 lg:px-12 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-12">
            {isHomepage && (
              <div className="lg:w-2/6">
                <Header />
              </div>
            )}
            <main id="content" className={`pt-24 ${isHomepage ? 'lg:w-3/5' : 'w-full'} lg:py-24`}>
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
