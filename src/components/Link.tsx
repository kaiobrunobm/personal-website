import React from 'react';
import enResume from '../../public/en-resume.pdf'
import ptResume from '../../public/pt-resume.pdf';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { en, pt } from '../utils/strings';

interface LinkProps {
  language?: 'PT' | 'EN';
}
const Link: React.FC<LinkProps> = ({ language }) => {
  return (
    <a href={language === 'PT' ? ptResume : enResume} target='_blank' className='group flex items-center flex-center text-backgroud hover:text-highlights transition-all duration-200 ease-in cursor-pointer px-12 gap-4'>
      <p>{language === 'PT' ? pt.experience.resumeLink : en.experience.resumeLink}</p>
      <ArrowUpRightIcon
        weight='bold'
        className='group-hover:-translate-y-0.5
            group-hover:translate-0.5 transition-all duration-200 ease-in'/>

    </a>
  );
};

export default Link;
