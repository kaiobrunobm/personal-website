import React from 'react';
import mouseIcon from '../../public/icons/mouse-icon.svg'
import { pt } from '../utils/strings';
import { en } from '../utils/strings';

interface HomepageProps {
  language?: 'PT' | 'EN';
}

const Homepage: React.FC<HomepageProps> = ({ language }) => {
  return (
    <div className=' flex flex-col items-center self-stretch gap-2.5 px-[3rem] md:h-screen lg:items-center lg:justify-center'>
      <div className='flex flex-col items-center self-stretch gap-6 py-[4.5rem]'>
        <div className='bg-light-base rounded-full h-11 w-11' />
        <div className='flex flex-col items-center gap-3 lg:gap-5'>
          <h2 className='text-center md:text-[40px] lg:text-5xl lg:w-3/4'>
            {language === 'PT' ? pt.homepage.title : en.homepage.title}
          </h2>
          <span className='text-xl lg:text-2xl'>{language === 'PT' ? pt.homepage.portfolio : en.homepage.portfolio}</span>

        </div>
      </div>
      <img src={mouseIcon} alt="Mouse icon, scroll indicator" className='size-12 md:size-[52] lg:size-16' />
    </div>
  );
};

export default Homepage;          
