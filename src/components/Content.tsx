import React from 'react';
import Homepage from './Homepage';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';

const Content: React.FC = () => {
  return (
    <div className='flex flex-col items-center self-stretch'>
      <Homepage />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Content;
