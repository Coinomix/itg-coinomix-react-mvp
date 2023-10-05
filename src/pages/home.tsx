import * as React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/scss/index.scss';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CardNews } from '../components/CardNews';
import { CryptoString } from '../components/CryptoString';
import { BlockLatestNews } from '../components/BlockLatestNews';
import { CardNewsSmall } from '../components/CardNewsSmall';
import { CardBanner } from '../components/CardBanner';
import { Devider } from '../components/Devider';
import { CardNewsType } from '../types/enums';
import bannerEpicurus from '../assets/images/banners/banner_epicurus.svg';
import bannerItg from '../assets/images/banners/banner_itg.svg';
import imgBitcoin from '../assets/images/demo/bitcoin.jpg';
import imgLaptopThree from '../assets/images/demo/laptop_3.jpg';
import imgLaptopFour from '../assets/images/demo/laptop_4.jpg';
import imgDemoOne from '../assets/images/demo/demo_1.jpg';
import useTitle from '../utils/useTitle';

export const HomePage = () => {
  useTitle('Home Page | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Header />

      <main className='main'>
        <div className='main__container'>
          <div className='main__container-latestnews'>
            <div>
              <CardNews type={CardNewsType.top} imgUrl={imgBitcoin} />
            </div>

            <BlockLatestNews />
          </div>

          <Devider />

          <CryptoString />

          <Devider />

          <CardBanner imgUrl={bannerEpicurus} link='epicurus-plp.netlify.app' />

          <div className='main__section'>
              <h2 className='main__section-title'>Latest news</h2>
              <Link to='/latest-news' className='main__section-readmore'>Read more</Link>
          </div>

          <Devider />

          <div className='main__container-latestnews'>
            <CardNewsSmall imgUrl={imgLaptopThree} />
            <CardNewsSmall imgUrl={imgLaptopFour} />
            <CardNewsSmall imgUrl={imgDemoOne} />
          </div>

          <Devider />         

          <CryptoString />

          <Devider />

          <CardBanner imgUrl={bannerItg} link='itg-investments.com' />
        </div>
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default HomePage;
