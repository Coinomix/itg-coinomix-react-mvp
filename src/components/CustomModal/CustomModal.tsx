import React, { useEffect, useRef } from 'react';
import './CustomModal.scss';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';
import { ModalType } from '../../types/enums';

interface Props {
  show: ModalType | null,
  onHide: () => void,
  onOpen: (type: ModalType) => void,
}

export const CustomModal: React.FC<Props> = ({ show, onHide, onOpen }) => {
  useEffect(() => {
    const closeModalOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onHide();
      }
    };

    if (show !== null) {
      document.addEventListener('keydown', closeModalOnEscape);
    }

    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [show]);

  return (
    <>
    {(show !== null) && (
      <div className='custommodal'>
      <div className='custommodal__container'>
        <div className='custommodal__close' onClick={onHide}>
            <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
              <path d='M5.50586 6.01465L22.4764 22.9852' stroke='#FAFAFA' stroke-width='2' stroke-linecap='round'/>
              <path d='M5 22.9707L21.9706 6.00014' stroke='#FAFAFA' stroke-width='2' stroke-linecap='round'/>
            </svg>
        </div>
        <div className='custommodal__content'>
          {(show === ModalType.signin) &&
            <SignIn onOpen={onOpen} />
          }
          {(show === ModalType.signup) &&
            <SignUp onOpen={onOpen} />
          }
          {(show === ModalType.forgotpass) &&
            <ForgotPassword />
          }
        </div>
      </div>
      </div>
    )}
    </>
  );
};
