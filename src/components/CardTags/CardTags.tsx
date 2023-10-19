import React from 'react';
import './CardTags.scss'
import arrowIcon from '../../assets/images/arrow_icon.svg';
import { ArticleCaregoryData } from '../../types/articleType';

interface Props {
  isArrow?: boolean;
  categories: ArticleCaregoryData[];
}

export const CardTags: React.FC<Props> = ({ isArrow = true, categories }) => {
  return (
    <div className='cardtags'>
      <div className='cardtags__tags'>
        {categories.map((category) =>
          <span key={category.id} className='cardtags__tagname'>{category.attributes.name}</span>
        )}
      </div>

      {isArrow && (
        <img className='cardtags__arrowicon' src={arrowIcon} alt='Arrow Icon' />
      )}
    </div>
  );
};
