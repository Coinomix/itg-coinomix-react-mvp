import * as React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CardBanner } from '../components/CardBanner';
import { PageTitle } from '../components/PageTitle';
import imgAboutUs from '../assets/images/about-us.svg';
import useTitle from '../utils/useTitle';

const AboutPage = () => {
  useTitle('About Page | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Header />

      <PageTitle 
            title='About us'
      />

      <main className='main'>
          <CardBanner height='406px' imgUrl={imgAboutUs} />

          <div className='article__content'>
            <p className='article__content-text'>
              Lorem ipsum dolor sit amet consectetur. Tortor posuere tempus turpis quisque adipiscing faucibus sem vulputate magna. Turpis nisl lectus ipsum tortor sit convallis egestas nullam tristique. Lacus facilisis risus.
            </p>
            <p className='article__content-text'>
              Lorem ipsum dolor sit amet consectetur. Suspendisse rhoncus nulla integer nunc convallis facilisis magnis sit eu. Velit montes lorem varius ut sollicitudin faucibus nec rhoncus. Et elementum dignissim erat facilisis consequat ultrices diam. Amet vitae posuere urna cursus varius rhoncus...
            </p>
          </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default AboutPage;
