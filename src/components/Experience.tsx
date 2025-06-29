import React from 'react';
import Works from './Works';
import Link from './Link';
import { en, pt } from '../utils/strings';


interface experienceProps {
  experienceRef: React.RefObject<HTMLDivElement | null>;
  language?: 'PT' | 'EN';
}


const Experience: React.FC<experienceProps> = ({ experienceRef, language }) => {
  return (
    <div className='flex flex-col items-start self-stretch gap-12 bg-base py-24 z-20 lg:rounded-4xl lg:px-12' ref={experienceRef} id='experience'>
      <div className='flex flex-col items-start justify-center gap-16 px-4 '>
        <div>

          <h2 className='text-backgroud md:text-[40px]'>
            {language === 'PT' ? pt.experience.title : en.experience.title}
          </h2>
          <span className='text-backgroud'>
            {language === 'PT' ? pt.experience.description : en.experience.description}
          </span>
        </div>
        <Works language={language} />
      </div>
      <Link language={language} />
    </div>
  );
};

export default Experience;
