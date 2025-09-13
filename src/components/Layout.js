import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
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
      <Footer />
    </div>
  );
};

export default Layout;