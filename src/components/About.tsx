import React from 'react';

const About: React.FC = () => {
  return (
    <div className='flex flex-col items-center self-stretch gap-6 pt-32'>
      <div className='flex flex-col items-center justify-center gap-6 self-stretch px-6 pb-[19rem] md:text-xl lg:text-2xl lg:px-24'>
        <p className='text-center lg:text-start'>I'm a <span className='font-bold text-highlights'>full-stack</span> developer and <span className='font-bold text-highlights'>UX/UI designer
        </span> who loves building clean, accessible websites and applications. I enjoy working on both the design and the code-making things that not only look good but also work well for everyone.</p>

        <p className='text-center lg:text-start'>
          Right now, I’m working as an <span className='font-bold text-highlights'>IT Technician</span> while pursuing a degree in Computer Science. I’m always learning and exploring new technologies, and I enjoy solving problems through smart design and solid development.
        </p>
      </div>
    </div>
  );
};

export default About;
