import React from 'react';
import { Link } from 'react-router-dom';
import './PageTitle.scss'


interface Props {
  title?: string;
  breadcrumbsTitle?: string;
  breadcrumbsUrl?: string;
};

export const PageTitle: React.FC <Props> = ({
  title = '',
  breadcrumbsTitle='',
  breadcrumbsUrl = '',
}) => {
  return (
    <div className='pagetitle'>
      <div className='pagetitle__breadcrumbs'>
        <Link to='/'>Home</Link>
        {breadcrumbsTitle && (<Link to={`/${breadcrumbsUrl}`}> / {breadcrumbsTitle}</Link>)}
      </div>
        
      {title && (<h1 className='pagetitle__title'>{title}</h1>)}
  </div>
  );
};
