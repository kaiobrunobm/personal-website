import React from 'react';
import Works from './Works';
import Link from './Link';

const Experience: React.FC = () => {
  return (
    <div className='flex flex-col items-start self-stretch gap-12 bg-base py-24 z-20 lg:rounded-4xl lg:px-12'>
      {/* <svg className='absolute right-[380px] top-[1540px] z-10' xmlns="http://www.w3.org/2000/svg" width="6" height="1284" viewBox="0 0 6 1284" fill="none">
        <path d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM2.99994 1278.33C1.52718 1278.33 0.333277 1279.53 0.333277 1281C0.333277 1282.47 1.52718 1283.67 2.99994 1283.67C4.4727 1283.67 5.66661 1282.47 5.66661 1281C5.66661 1279.53 4.4727 1278.33 2.99994 1278.33ZM3 3L2.5 3L2.49994 1281L2.99994 1281L3.49994 1281L3.5 3L3 3Z" fill="#FEF9ED" />
      </svg> */}
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
