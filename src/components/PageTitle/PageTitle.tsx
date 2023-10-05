import React from 'react';
import { Link } from 'react-router-dom';
import './PageTitle.scss'


interface Props {
  title: string;
  breadcrumbsTitle: string;
  breadcrumbsUrl?: string;
};

export const PageTitle: React.FC <Props> = ({
  title,
  breadcrumbsTitle,
  breadcrumbsUrl = '',
}) => {
  return (
    <div className='pagetitle'>
      <div className='pagetitle__breadcrumbs'>
        <Link to={`/${breadcrumbsUrl}`} className='pagetitle__breadcrumbs-link'>&lt; <span className='pagetitle__breadcrumbs-title'>{breadcrumbsTitle}</span></Link>
      </div>
      <h1 className='pagetitle__title'>{title}</h1>
  </div>
  );
};
