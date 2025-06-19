import React from 'react';

import { ArrowUpRightIcon } from '@phosphor-icons/react';

const Link: React.FC = () => {
  return (
    <a className='group flex items-center flex-center text-backgroud hover:text-highlights transition-all duration-200 ease-in cursor-pointer px-12 gap-4'>
      <p>View full resume</p>
      <ArrowUpRightIcon
        weight='bold'
        className='group-hover:-translate-y-0.5
            group-hover:translate-0.5 transition-all duration-200 ease-in'/>

    </a>
  );
};

export default Link;
