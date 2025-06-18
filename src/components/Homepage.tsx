import React from 'react';
import mouseIcon from '../../public/icons/mouse-icon.svg'

const Homepage: React.FC = () => {
  return (
    <div className='flex flex-col items-center self-stretch gap-2.5 px-[3rem]'>
      <div className='flex flex-col items-center self-stretch gap-6 py-[4.5rem]'>
        <div className='bg-light-base rounded-full h-11 w-11' />
        <div className='flex flex-col items-center gap-3'>
          <h2 className='text-center md:text-[40px]'>
            Web development &
            UX/UI design
          </h2>
          <span className='text-xl'>[PORTFOLIO]</span>

        </div>
      </div>
      <img src={mouseIcon} alt="Mouse icon, scroll indicator" className='size-12 md:size-[52]' />
    </div>
  );
};

export default Homepage;          
