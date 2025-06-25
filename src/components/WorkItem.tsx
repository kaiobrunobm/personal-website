import React from 'react';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

export interface WorkItemProps {
  startYear: number;
  endYear: number | 'Present';
  company: string;
  companyPosition: string;
  jobDescription: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ startYear, endYear, company, companyPosition, jobDescription }) => {
  return (
    <div className='group flex flex-col items-start self-stretch gap-3 rounded-2xl bg-base z-30  cursor-pointer hover:bg-black/10  hover:inset-shadow-light-base transition-all duration-200 ease-in lg:flex-row lg:gap-16 lg:p-8'>
      <div className='flex justify-center items-center gap-0.5 text-sm font-bold text-light-base text-center min-w-28'>
        <span>{startYear}</span> - <span className='uppercase'>{endYear}</span>
      </div>
      <div className='flex flex-col items-start self-stretch gap-3'>
        <div className='flex flex-col items-start self-stretch gap-4'>
          <div className='flex items-center self-stretch gap-6'>
            <h3 className='font-bold text-backgroud group-hover:text-highlights transition-all duration-200 ease-in'>
              {company}
            </h3>
            <ArrowUpRightIcon
              weight='bold'
              className='group-hover:-translate-y-0.5
              text-backgroud group-hover:text-highlights
            group-hover:translate-0.5 transition-all duration-200 ease-in'/>

          </div>
          <span className='flex justify-center items-center gap-1 text-sm text-light-base font-light'>
            [{companyPosition}]
          </span>
        </div>

        <p className='text-sm text-backgroud'>
          {jobDescription}
        </p>

      </div>
    </div>
  );
};

export default WorkItem;
