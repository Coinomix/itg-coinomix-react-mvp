import * as React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../assets/styles/scss/index.scss';
import { Devider } from '../components/Devider';
import { CardBanner } from '../components/CardBanner';
import { PageTitle } from '../components/PageTitle';
import { CustomButton } from '../components/CustomButton';
import { ButtonType } from '../types/enums';
import imgBitcoin  from '../assets/images/demo/bitcoin.jpg';
import { Link } from 'react-router-dom';
import useTitle from '../utils/useTitle';

const ArticlePage = () => {
  useTitle('Article Page');

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
            title='Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023'
            breadcrumbsTitle='Digital'
            breadcrumbsUrl='digital'
      />

      <Devider height='40px' />

      <main className='main'>
        <article className='article'>

          <CardBanner height='618px' imgUrl={imgBitcoin} />

          <div className='article__content'>
            <p className='article__content-text'>
              Lorem ipsum dolor sit amet consectetur. Tortor posuere tempus turpis quisque adipiscing faucibus sem vulputate magna. Turpis nisl lectus ipsum tortor sit convallis egestas nullam tristique. Lacus facilisis risus.
            </p>
            <p className='article__content-text'>
              Lorem ipsum dolor sit amet consectetur. Suspendisse rhoncus nulla integer nunc convallis facilisis magnis sit eu. Velit montes lorem varius ut sollicitudin faucibus nec rhoncus. Et elementum dignissim erat facilisis consequat ultrices diam. Amet vitae posuere urna cursus varius rhoncus...
            </p>

            <div className='article__subscribe'>
              <div className='article__subscribe-text'>
                If you want to get acquainted with exclusive news from Coinomix
                <br/>
                please, purchase a subscription
              </div>
              <div>
                <Link to='/subscribe' className='article__subscribe-button'>
                  <CustomButton text='Subscribe' type={ButtonType.subscribe_blue} />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Devider height='140px' />

      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default ArticlePage;
