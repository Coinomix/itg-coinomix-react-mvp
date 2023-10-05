import React from 'react';
import './CardTags.scss'
import arrowIcon from '../../assets/images/arrow_icon.svg';

interface Props {
  isArrow?: boolean;
}

export const CardTags: React.FC<Props> = ({ isArrow = true }) => {
  return (
    <div className='cardtags'>
      <div className='cardtags__tags'>
        {/* <a href='#bitcoin' className='cardtags__tagname'>Bitcoin</a>
        <a href='#trading' className='cardtags__tagname'>Trading</a> */}
      </div>

      {isArrow && (
        <img className='cardtags__arrowicon' src={arrowIcon} alt='Arrow Icon' />
      )}
    </div>
  );
};
