import React from 'react';
import Homepage from './Homepage';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';
import type { refsProps } from './Sidebar';

const Content: React.FC<refsProps> = ({ aboutRef, experiencesRef, projectsRef }) => {
  return (
    <div className='flex flex-col items-center self-stretch lg:col-span-2 '>
      <Homepage />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experiencesRef} />
      <Projects projectsRef={projectsRef} />
    </div>
  );
};

export default Content;
