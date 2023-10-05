import React from 'react';
import './SignUp.scss';
import { CustomButton } from '../../CustomButton';
import { ButtonType, ModalType } from '../../../types/enums';
import { Link } from 'react-router-dom';

interface Props {
  onOpen: (type: ModalType) => void,
}

export const SignUp: React.FC<Props> = ({ onOpen }) => {
  return (
    <div className='signup'>
      <div className='signup__title'>
        Sign up
      </div>

      <div className='signup__text'>
        To connect using one of these methods, the email must match the one on your Coinomix account.
      </div>

      <form className='signup__form'>
        <div>
          <label className='signup__label'>
            First name
          </label>
          <input
            type='text'
            name='firstname'
            placeholder=''
            className='signup__input'
            autoComplete='off'
            required
            />
        </div>

        <div>
          <label className='signup__label'>
            Last name
          </label>
          <input
            type='text'
            name='lastname'
            placeholder=''
            className='signup__input'
            autoComplete='off'
            required
            />
        </div>

        <div>
          <label className='signup__label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder=''
            className='signup__input'
            pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
            autoComplete='off'
            required
            />
        </div>

        <div>
          <label className='signup__label'>
            Create password
          </label>
          <input
            type='password'
            name='password'
            placeholder=''
            className='signup__input'
            autoComplete='off'
            required
            />
        </div>

        <div>
          <label className='signup__label'>
            Confirm password
          </label>
          <input
            type='password'
            name='confirmpassword'
            placeholder=''
            className='signup__input'
            autoComplete='off'
            required
            />
        </div>

        <label className='signup__label'>
          <input type='checkbox' name='terms' />
          <span className='signup__text'>I agree to Coinomix Terms of Service and Privacy Policy</span>
        </label>
      </form>

      <Link to='/latest-news' className='signup__button'>
        <CustomButton text='Create account' type={ButtonType.signin} />
      </Link>

      <div className='signup__text'>
        Have an account?
        {` `}
        <span className='signup__link' onClick={() => onOpen(ModalType.signin)}>
          Sign in
        </span>
      </div>
    </div>
  );
};
