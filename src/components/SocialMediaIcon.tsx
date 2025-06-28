import React from 'react';

interface SocialMediaIconProps {
  socialMediaLink: string;
  children: React.ReactNode;
  className?: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ children, socialMediaLink }) => {
  return (
    <a href={socialMediaLink} target='_blank' className='size-6 cursor-pointer md:size-[30px] lg:size-[38px]'>
      {children}
    </a>
  );
};

export default SocialMediaIcon;
