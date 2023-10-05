import React from 'react';
import './Feedback.scss';
import { CustomButton } from '../CustomButton';
import { ButtonType } from '../../types/enums';
import { Link } from 'react-router-dom';


interface Props {
  imgUrl?: string;
  link: string;
}

export const Feedback: React.FC<Props> = ({ imgUrl, link }) => {
  return (
    <div className='feedback'>
      <div className='feedback__title'>
        Congrats!
      </div>
      <div className='feedback__text'>
        You have purchased a premium subscription on Coinomix
      </div>

      {imgUrl && (
        <img
          src={imgUrl}
          className='feedback__image'
          alt='Kapybara'
        />
      )}
      
      <Link to={link} className='feedback__button'>
        <CustomButton text="Let's start" type={ButtonType.signin} />
      </Link>
    </div>
  );
};
