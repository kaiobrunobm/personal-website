import React from 'react';

interface SocialMediaIconProps {
  socialMedia: string;
  socialMediaLink: string;
  srcIcon: string | undefined
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ socialMedia, srcIcon, socialMediaLink }) => {
  return (
    <a href={socialMediaLink} className='size-6 md:size-[30px] hover:fill-blue-300'>
      <img src={srcIcon} alt={`Social media icon ${socialMedia}`} />
    </a>
  );
};

export default SocialMediaIcon;
