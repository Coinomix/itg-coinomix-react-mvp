import React from 'react';
import classNames from 'classnames';
import './CustomButton.scss';
import { ButtonType } from '../../types/enums';

interface Props {
  type?: ButtonType;
  text: string;
}

export const CustomButton: React.FC<Props> = ({ type, text }) => {
  return (
      <button className={classNames('custombutton', { [`${type}`]: type })}>
        {(type === ButtonType.google || type === ButtonType.apple || type === ButtonType.facebook) && (
          <div className={classNames({ [`${type}-image`]: type })} />
        )}
        {text}
      </button>
  );
};
