import React from 'react';
import Homepage from './Homepage';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';
import type { refsProps } from './Sidebar';

const Content: React.FC<refsProps> = ({ aboutRef, experiencesRef, projectsRef, language }) => {
  return (
    <div className='flex flex-col items-center gap-10 self-stretch lg:col-span-2 '>
      <Homepage language={language} />
      <About aboutRef={aboutRef} language={language} />
      <Experience experienceRef={experiencesRef} language={language} />
      <Projects projectsRef={projectsRef} language={language} />
    </div>
  );
};

export default Content;
