import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    console.log('useActiveSection: Initializing observer for', sectionIds);
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = null;
        entries.forEach((entry) => {
          console.log(
            `Section ${entry.target.id}: isIntersecting = ${entry.isIntersecting}`,
            `IntersectionRatio = ${entry.intersectionRatio}`,
            `BoundingClientRect.top = ${entry.boundingClientRect.top}`
          );
          if (entry.isIntersecting) {
            // Prioritize the section whose top is closest to the top of the viewport
            if (!currentActive || entry.boundingClientRect.top < currentActive.boundingClientRect.top) {
              currentActive = entry;
            }
          }
        });

        if (currentActive && currentActive.target.id !== activeSection) {
          setActiveSection(currentActive.target.id);
          console.log('useActiveSection: Setting active section to', currentActive.target.id);
        }
      },
      {
        rootMargin: '-100px 0px -80% 0px', // Adjust based on header height and desired trigger zone
        threshold: 0, // Trigger as soon as any part of the element enters/leaves the root
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
        console.log('useActiveSection: Observing section', id);
      } else {
        console.warn('useActiveSection: Section not found', id);
      }
    });

    return () => {
      console.log('useActiveSection: Cleaning up observer');
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionIds, activeSection]); // Added activeSection to dependency array to ensure re-evaluation

  console.log('useActiveSection: Current active section state', activeSection);
  return activeSection;
};

export default useActiveSection;
