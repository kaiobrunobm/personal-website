import React from 'react';
import ProjectButton from './ProjectButton';

const Projects: React.FC = () => {
  return (
    <div className='flex flex-col items-center self-stretch gap-7 py-12'>
      <div className='flex flex-col justify-center items-center gap-2.5'>
        <h2 className='text-[40px]'>Projects</h2>
        <span className='text-light-base text-center'>A brief view of my clients &
          personal projects</span>
      </div>

      <div className='flex justify-center flex-wrap items-center self-stretch gap-3 p-2.5'>
        <ProjectButton label='Mobile' isSelected />
        <ProjectButton label='Web' />
        <ProjectButton label='UX/UI' />
      </div>

      <div className='flex flex-col items-center self-stretch gap-7 p-2.5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='relative w-screen font-extrabold text-2xl flex items-center justify-center
            h-5 caution'/>
          <h1 className='uppercase'>Em breve</h1>
          <div className='relative w-screen font-extrabold text-2xl flex items-center justify-center
            h-5 caution'/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
