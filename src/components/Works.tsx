import React from 'react';
import WorkItem, { type WorkItemProps } from './WorkItem';
import { en, pt } from '../utils/strings';

interface WorksProps {
  language?: 'PT' | 'EN';
}

const Works: React.FC<WorksProps> = ({ language }) => {

  const ptJobs: WorkItemProps[] = [
    pt.experience.job1,
    pt.experience.job2,
    pt.experience.job3,
  ];
  const enJobs: WorkItemProps[] = [
    en.experience.job1,
    en.experience.job2,
    en.experience.job3,
  ];



  return (
    <div className='flex flex-col items-start gap-12 self-stretch'>
      {language === 'PT' ?
        ptJobs.map(({ startYear, endYear, company, companyPosition, jobDescription }) => {
          return (
            <WorkItem
              startYear={startYear}
              endYear={endYear}
              company={company}
              companyPosition={companyPosition}
              jobDescription={jobDescription}
            />
          )
        }) :
        enJobs.map(({ startYear, endYear, company, companyPosition, jobDescription }) => {
          return (
            <WorkItem
              startYear={startYear}
              endYear={endYear}
              company={company}
              companyPosition={companyPosition}
              jobDescription={jobDescription}


            />
          )
        })}
    </div>
  );
};

export default Works;
