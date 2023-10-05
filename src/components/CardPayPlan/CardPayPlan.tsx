import React from 'react';
import classNames from 'classnames';
import './CardPayPlan.scss';
import { CustomButton } from '../CustomButton';
import { ButtonType, PlanType } from '../../types/enums';
import { Link } from 'react-router-dom';

interface Props {
  type: PlanType,
  isYear: boolean,
  onPay: () => void;
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

export const CardPayPlan: React.FC<Props> = ({ type, isYear, onPay }) => {
  const { title, subscribeType, yearCost, monthCost } = planData[type || PlanType.lite];

  return (
    <div className='cardpayplan'>
      <div className='cardpayplan__header'>
        <div className='cardpayplan__blocktitle'>
          Total billed today
        </div>
        <div className={classNames('cardpayplan__title', { [`cardpayplan__title-${type}`]: type })}>
          {title}
        </div>
        <div className='cardpayplan__price'>
        {isYear 
          ? `$${yearCost}`
          : `$${monthCost}`
          }
        </div>
        <div className='cardpayplan__period'>
          {isYear 
          ? ('Per year') 
          : ('Per month')
          }
        </div>
      </div>
      <div className='cardpayplan__paybuttons'>
          <span className='cardpayplan__text'>Pay with</span>

          <Link to='/payed' className='cardpayplan__button'>
            <CustomButton text='GooglePay' type={ButtonType.google} />
          </Link>

          <Link to='/payed'  className='cardpayplan__button'>
            <CustomButton text='ApplePay' type={ButtonType.apple} />
          </Link>
      </div>
      <div className='cardpayplan__orblock'>
        <hr className='cardpayplan__hr' />
        <span className='cardpayplan__or'>
          or
        </span>
        <hr className='cardpayplan__hr' />
      </div>
      <div>
        <span className='cardpayplan__text'>Pay with credit or debit card</span>
      </div>
      <div className='cardpayplan__form'>
        <label className='cardpayplan__label'>
          Number card
        </label>
        <input 
          type='text'
          name='cardnumber'
          placeholder='5555 4444 3333 2222'
          className='cardpayplan__input'
          maxLength={16}
          required
          />
        <div className='cardpayplan__exp'>
          <div>
            <label className='cardpayplan__label'>
              Expiration
            </label>
            <input
              type='text'
              name='cardexp'
              placeholder='MM/YY'
              className='cardpayplan__input'
              minLength={4}
              maxLength={4}
              required
            />
          </div>
          <div>
            <label className='cardpayplan__label'>
              Security code
            </label>
            <input
              type='text'
              name='cardcode'
              placeholder='123'
              className='cardpayplan__input'
              minLength={3}
              maxLength={3}
              required
            />
          </div>
        </div>
      </div>
      <div className='cardpayplan__button' onClick={onPay}>
        <CustomButton text='Pay with credit or debit card' type={subscribeType} />
      </div>
    </div>
  );
};
