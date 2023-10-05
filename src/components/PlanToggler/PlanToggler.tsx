import React, { useState } from 'react';
import classNames from 'classnames';
import './PlanToggler.scss';
import { CustomButton } from '../CustomButton';
import { ButtonType, PlanType } from '../../types/enums';

interface Props {
  changed: () => void;
};

export const PlanToggler: React.FC<Props> = ({ changed }) => {
  const [activeOption, setActiveOption] = useState(true);

  const handleClick = () => {
    setActiveOption((prevOption) => !prevOption);
    changed();
  };

  return (
    <div className='plantoggler'>
      <div className={classNames('plantoggler__option', {
        'plantoggler__active': activeOption,
        })}
        onClick={handleClick}
      >
        Yearly Plans -43%
      </div>

      <div className={classNames('plantoggler__option', {
        'plantoggler__active': !activeOption,
        })}
        onClick={handleClick}
      >
        Monthly Plans
      </div>
    </div>
  )
};
