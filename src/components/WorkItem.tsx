import React from 'react';
import arrowIcon from '../../public/icons/arrow.svg'

export interface WorkItemProps {
  startYear: number;
  endYear: number | 'Present';
  company: string;
  companyPosition: string;
  jobDescription: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ startYear, endYear, company, companyPosition, jobDescription }) => {
  return (
    <div className='flex flex-col items-start self-stretch gap-3 rounded-2xl bg-base z-30 lg:flex-row lg:gap-16'>
      <div className='flex justify-center items-center gap-0.5 text-sm font-bold text-light-base text-center min-w-28'>
        <span>{startYear}</span> - <span className='uppercase'>{endYear}</span>
      </div>
      <div className='flex flex-col items-start self-stretch gap-3'>
        <div className='flex flex-col items-start self-stretch gap-4'>
          <div className='flex items-center self-stretch gap-6'>
            <h3 className='font-bold text-backgroud'>
              {company}
            </h3>
            <img src={arrowIcon} alt="Arrow icon, link indicator" className='size-4' />
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
