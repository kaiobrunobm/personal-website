import React from 'react';
import ProjectButton from './ProjectButton';
import { en, pt } from '../utils/strings';


interface projectsProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
  language?: 'PT' | 'EN';
}

const Projects: React.FC<projectsProps> = ({ projectsRef, language }) => {
  return (
    <div id='projects' className='h-screen flex flex-col justify-center items-center self-stretch gap-7 py-12' ref={projectsRef}>
      <div className='flex flex-col justify-center items-center gap-2.5'>
        <h2 className='text-[40px] lg:text-5xl'>{language === 'PT' ? pt.projects.title : en.projects.title}</h2>
        <span className='text-light-base text-center px-4 lg:max-w-3/4'>{language === 'PT' ? pt.projects.description : en.projects.description}</span>
      </div>

      <div className='flex justify-center flex-wrap items-center self-stretch gap-3 p-2.5'>
        <ProjectButton label='Mobile' />
        <ProjectButton label='Web' />
        <ProjectButton label='UX/UI' />
      </div>

      <div className='flex flex-col items-center self-stretch gap-7 p-2.5'>
        <div className='flex flex-col justify-center items-center'>
          {/* <div className='relative w-screen font-extrabold text-2xl flex items-center justify-center
            h-5 caution'/> */}
          <h1 className='uppercase'>{language === 'PT' ? pt.projects.soon : en.projects.soon}</h1>
          {/* <div className='relative w-screen font-extrabold text-2xl flex items-center justify-center
            h-5 caution'/> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
