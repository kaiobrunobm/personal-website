import React from 'react';
import WorkItem from './WorkItem';
import jobs from '../data/jobs';

const Works: React.FC = () => {
  return (
    <div className='flex flex-col items-start gap-12 self-stretch'>
      {jobs.map(({ startYear, endYear, company, companyPosition, jobDescription }) => {
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
