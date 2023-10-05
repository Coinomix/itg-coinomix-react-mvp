import React, { useState } from 'react';
import classNames from 'classnames';
import './CardPlan.scss';
import { CustomButton } from '../CustomButton';
import { ButtonType, PlanType } from '../../types/enums';


interface Props {
  type: PlanType,
  isYear: boolean,
  onClick: (type: PlanType) => void;
};

const planData = {
  [PlanType.lite]: {
    title: 'Lite plan',
    subscribeType: ButtonType.subscribe_yellow,
    yearCost: '29,99',
    monthCost: '3,99',
    options: [
      { option: '24/7 Live updates', include: true },
      { option: 'In-depth investigations', include: true },
      { option: '200+ original stories daily', include: true },
      { option: 'Unlimited access', include: false },
      { option: 'Unlimited access', include: false },
      { option: 'Unlimited access', include: false },
    ],
  },
  [PlanType.basic]: {
    title: 'Basic plan',
    subscribeType: ButtonType.subscribe_blue,
    yearCost: '59,99',
    monthCost: '6,99',
    options: [
      { option: '24/7 Live updates', include: true },
      { option: 'In-depth investigations', include: true },
      { option: '200+ original stories daily', include: true },
      { option: '200+ original stories daily', include: true },
      { option: 'Unlimited access', include: false },
      { option: 'Unlimited access', include: false },
    ],
  },
  [PlanType.premium]: {
    title: 'Premium plan',
    subscribeType: ButtonType.subscribe_purple,
    yearCost: '99,99',
    monthCost: '10,99',
    options: [
      { option: '24/7 Live updates', include: true },
      { option: 'In-depth investigations', include: true },
      { option: '200+ original stories daily', include: true },
      { option: 'Unlimited access', include: true },
      { option: 'Unlimited access', include: true },
      { option: 'Unlimited access', include: true },
    ],
  },
};

export const CardPlan: React.FC<Props> = ({ type, isYear: isyear, onClick }) => {
  const { title, subscribeType, yearCost, monthCost, options } = planData[type];

  return (
    <div className={classNames('cardplan', { [`cardplan-${type}`]: type })}>
      <div className='cardplan__header'>
        <div className={classNames('cardplan__title', { [`cardplan__title-${type}`]: type })}>
          {title}
        </div>
        <div className='cardplan__price'>
        {isyear
          ? `$${yearCost}`
          : `$${monthCost}`
          }
        </div>
        <div className='cardplan__period'>
          {isyear
          ? ('Per year')
          : ('Per month')
          }
        </div>
      </div>
      <div className='cardplan__button' onClick={() => onClick(type)}>
        <CustomButton text='Subscribe' type={subscribeType} />
      </div>
      <div className='cardplan__content'>
        <ul className='cardplan__options'>
          {options.map((option, index) =>
            <li key={index} className={classNames('cardplan__option', { 'cardplan__option-false': !option.include })}>{option.option}</li>
          )}
        </ul>
      </div>
    </div>
  );
};
