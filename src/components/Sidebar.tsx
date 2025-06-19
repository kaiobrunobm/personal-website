import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';
const Sidebar: React.FC = () => {
  return (
    <aside className='flex flex-col items-start self-stretch gap-8 p-8 lg:py-12 lg:px-16
     lg:sticky lg:top-0 lg:h-screen lg:justify-between'>
      <div className='flex flex-col items-start self-stretch gap-7'>
        <div className='flex flex-col items-start gap-1'>
          <h2 className='md:text-[40px] italic lg:text-5xl'>Kaio Bruno</h2>
          <span className='md:text-xl lg:text-2xl'>[Fullstack developer &
            UX UI Designer]</span>
        </div>

        <p className='text-light-base md:text-xl lg:text-2xl'>I create web experiences beautifully designed and accessible to everyone.</p>
      </div>
      <div className='flex justify-start items-center gap-2.5 self-stretch'>
        <div className='flex items-end self-stretch gap-2 md:gap-3.5 lg:gap-6'>
          <SocialMediaIcon socialMediaLink='' >
            <GithubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon socialMediaLink='' >
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon socialMediaLink='' >
            <LinkedinIcon />
          </SocialMediaIcon>
          <SocialMediaIcon socialMediaLink='' >
            <TwitterIcon />
          </SocialMediaIcon>

        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
