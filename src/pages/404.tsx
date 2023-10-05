import React, { useState } from 'react';
import '../assets/styles/scss/404-page.scss';
import { Header } from '../components/Header';
import useTitle from '../utils/useTitle';

const NotFoundPage = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  useTitle('Page not found | Coinomix');

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <>
      <Header />

      <main className='notfound-page'>
        <div className='notfound-page__container'>
          <div
            className={`notfound-page__title ${isMouseOver ? 'shaking' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            404
          </div>
          <div className='notfound-page__content'>
            <p className='notfound-page__text'>Sorry!</p>
            <p className='notfound-page__text'>We can't find the page you're looking for.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
