import React from 'react';
import githubIcon from '../../public/icons/github.svg'
import instagramIcon from '../../public/icons/instagram.svg'
import linkedinIcon from '../../public/icons/linkedin.svg'
import twitterIcon from '../../public/icons/x.svg'
import SocialMediaIcon from './SocialMediaIcon';


const Sidebar: React.FC = () => {
  return (
    <aside className='flex flex-col items-start self-stretch gap-8 p-8'>
      <div className='flex flex-col items-start self-stretch gap-7'>
        <div className='flex flex-col items-start gap-1'>
          <h2 className='md:text-[40px] italic'>Kaio Bruno</h2>
          <span className='md:text-xl'>[Fullstack developer &
            UX UI Designer]</span>
        </div>

        <p className='text-light-base md:text-xl'>I create web experiences beautifully designed and accessible to everyone.</p>
      </div>
      <div className='flex justify-start items-center gap-2.5 self-stretch'>
        <div className='flex items-end self-stretch gap-2 md:gap-3.5'>
          <SocialMediaIcon srcIcon={githubIcon} socialMedia="Github" socialMediaLink='' />
          <SocialMediaIcon srcIcon={instagramIcon} socialMedia="Instagram" socialMediaLink='' />
          <SocialMediaIcon srcIcon={linkedinIcon} socialMedia="Linkedin" socialMediaLink='' />
          <SocialMediaIcon srcIcon={twitterIcon} socialMedia="Twitter" socialMediaLink='' />
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
