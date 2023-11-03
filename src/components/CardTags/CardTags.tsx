import React from 'react';
import './CardTags.scss'
import arrowIcon from '../../assets/images/arrow_icon.svg';
import { TagData } from '../../types/articleType';
import { Link } from 'react-router-dom';

interface Props {
  isArrow?: boolean;
  tags: TagData[];
}

export const CardTags: React.FC<Props> = ({ isArrow = true, tags }) => {
  return (
    <div className='cardtags'>
      <div className='cardtags__tags'>
        {tags.slice(0, 2).map((tag) =>
          <Link to={`/${tag.attributes.slug}`} key={tag.id} className='cardtags__tagname'>{tag.attributes.name}</Link>
        )}
      </div>

      {isArrow && (
        <img className='cardtags__arrowicon' src={arrowIcon} alt='Arrow Icon' />
      )}
    </div>
  );
};
