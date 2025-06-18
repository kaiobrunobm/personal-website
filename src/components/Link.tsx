import React from 'react';
import arrowIcon from '../../public/icons/arrow.svg'

const Link: React.FC = () => {
  return (
    <a className='flex text-backgroud hover:text-highlights transition-all duration-200 ease-in cursor-pointer px-12 gap-4'>
      <p>View full resume</p>
      <img src={arrowIcon} alt='arrow icon, link indicator' />
    </a>
  );
};

export default Link;
