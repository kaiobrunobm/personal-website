import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';
import useOnScreen from '../utils/useOnScreen';

export interface refsProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  experiencesRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

const myRef = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current == null) {
    console.log(ref.current)
  } else {

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

}


const Sidebar: React.FC<refsProps> = ({ aboutRef, experiencesRef, projectsRef }) => {

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

      <div className=' flex-col gap-4 font-bold hidden lg:flex'>

        <div className='group cursor-pointer flex flex-row gap-2 justify-start items-center' onClick={() => {
          myRef(aboutRef)
        }}>
          <div className={` h-[2px] group-hover:w-24 transition-all
          duration-150 ease-in group-hover:bg-highlights/50 ${useOnScreen({ ref: aboutRef }) ? 'w-24 bg-highlights/50' : 'w-18 bg-light-base/50'}`} />
          <span className={` group-hover:text-highlights ${useOnScreen({ ref: aboutRef }) ? 'text-highlights transition-all duration-150 ease-in ' : 'text-light-base transition-all duration-150 ease-in'}`}>About me</span>
        </div>

        <div className='group cursor-pointer flex flex-row gap-2 justify-start items-center' onClick={() => {
          myRef(experiencesRef)
        }}>
          <div className={` h-[2px] group-hover:w-24 transition-all
          duration-150 ease-in group-hover:bg-highlights/50 ${useOnScreen({ ref: experiencesRef }) ? 'w-24 bg-highlights/50' : 'w-18 bg-light-base/50'}`} />
          <span className={` group-hover:text-highlights ${useOnScreen({ ref: experiencesRef }) ? 'text-highlights transition-all duration-150 ease-in ' : 'text-light-base transition-all duration-150 ease-in'}`}>Experiences</span>
        </div>

        <div className='group cursor-pointer flex flex-row gap-2 justify-start items-center' onClick={() => {
          myRef(projectsRef)
        }}>
          <div className={` h-[2px] group-hover:w-24 transition-all
          duration-150 ease-in group-hover:bg-highlights/50 ${useOnScreen({ ref: projectsRef }) ? 'w-24 bg-highlights/50' : 'w-18 bg-light-base/50'}`} />
          <span className={` group-hover:text-highlights ${useOnScreen({ ref: projectsRef }) ? 'text-highlights transition-all duration-150 ease-in ' : 'text-light-base transition-all duration-150 ease-in'}`}>Projects</span>
        </div>

      </div>

      <div className='flex justify-start items-center gap-2.5 self-stretch'>
        <div className='flex gap-6 md:gap-3.5 lg:gap-6'>
          <SocialMediaIcon socialMediaLink='https://github.com/kaiobrunobm' >
            <GithubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon socialMediaLink='https://www.instagram.com/kaiobrunobm/' >
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon socialMediaLink='https://www.linkedin.com/in/bmkaiobruno/' >
            <LinkedinIcon />
          </SocialMediaIcon>
          <SocialMediaIcon socialMediaLink='https://x.com/bmkaiobruno' >
            <TwitterIcon />
          </SocialMediaIcon>

        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
