import React from 'react';
import './SignIn.scss';
import { CustomButton } from '../../CustomButton';
import { ButtonType, ModalType } from '../../../types/enums';
import { Link } from 'react-router-dom';

interface Props {
  onOpen: (type: ModalType) => void,
}

export const SignIn: React.FC<Props> = ({ onOpen }) => {
  return (
    <div className='signin'>
      <div className='signin__title'>
        Sign in
      </div>
      <form className='signin__form'>
        <div>
          <label className='signin__label'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            placeholder=''
            className='signin__input'
            pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
            autoComplete='off'
            required
            />
        </div>

        <div>
          <label className='signin__label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder=''
            className='signin__input'
            autoComplete='off'
            required
            />
        </div>
      </form>

      <span className='signin__link' onClick={() => onOpen(ModalType.forgotpass)}>
        Forgot password ?
      </span>
      
      <Link to='/latest-news' className='signin__button'>
        <CustomButton text='Next' type={ButtonType.signin} />
      </Link>

      <div className='signin__orblock'>
        <hr className='signin__hr' />
        <span className='signin__or'>
          or
        </span>
        <hr className='signin__hr' />
      </div>

      <div className='signin__text'>
        To connect using one of these methods, the email must match the one on your Coinomix account.
      </div>

      <div className='cardpayplan__paybuttons'>
          <Link to='/latest-news' className='cardpayplan__button'>
            <CustomButton text='Continue with Facebook' type={ButtonType.facebook} />
          </Link>

          <Link to='/latest-news' className='cardpayplan__button'>
            <CustomButton text='Continue with Google' type={ButtonType.google} />
          </Link>

          <Link to='/latest-news'  className='cardpayplan__button'>
            <CustomButton text='Continue with Apple' type={ButtonType.apple} />
          </Link>
      </div>

      <div className='signin__text'>
        Need an account?
        {` `}
        <span className='signin__link' onClick={() => onOpen(ModalType.signup)}>
          Sign up
        </span>
      </div>
    </div>
  );
};
