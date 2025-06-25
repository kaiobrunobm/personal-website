import React from 'react';
import Works from './Works';
import Link from './Link';


interface experienceProps {
  experienceRef: React.RefObject<HTMLDivElement | null>;
}


const Experience: React.FC<experienceProps> = ({ experienceRef }) => {
  return (
    <div className='flex flex-col items-start self-stretch gap-12 bg-base py-24 z-20 lg:rounded-4xl lg:px-12' ref={experienceRef} id='experience'>
      <div className='flex flex-col items-start justify-center gap-16 px-11 '>
        <div>

          <h2 className='text-backgroud md:text-[40px]'>
            Experiences
          </h2>
          <span className='text-backgroud'>
            A Look at all my Works
          </span>
        </div>
        <Works />
      </div>
      <Link />
    </div>
  );
};

export default Experience;
