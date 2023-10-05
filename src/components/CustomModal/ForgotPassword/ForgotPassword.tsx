import React, { useState } from 'react';
import './ForgotPassword.scss';
import { CustomButton } from '../../CustomButton';
import { ButtonType } from '../../../types/enums';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState();

  return (
    <div className='signup'>
      <div className='signup__title'>
        Forgot password?
      </div>

      <div className='signup__text'>
        Don't worry! It happens. Please enter the email associated with your account.
      </div>

      <form className='signup__form'>
        <div>
          <label className='signup__label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={email}
            placeholder=''
            className='signup__input'
            pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
            autoComplete='off'
            required
            />
        </div>
      </form>

      <Link to='/latest-news' className='signup__button'>
        <CustomButton text='Send code' type={ButtonType.signin} />
      </Link>
    </div>
  );
};
