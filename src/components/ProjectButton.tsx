import React from 'react';
import checkIcon from '../../public/icons/check.svg'

interface projectButtonProps {
  label: string;
  isSelected?: boolean;
}

const ProjectButton: React.FC<projectButtonProps
> = ({ label, isSelected }) => {
  return (
    <button className={`flex justify-center items-center gap-2 rounded-[10px] px-4 py-2 hover:bg-base/5 transition-all duration-200 ease-in cursor-pointer ${isSelected && 'border-2 border-base '}`}>
      {label}
      {isSelected && <img src={checkIcon} alt='check icons, selected indicator' />}
    </button>
  );
};

export default ProjectButton;
