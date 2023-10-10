import * as React from 'react';
import '../assets/styles/scss/index.scss';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CardNews } from '../components/CardNews';
import { CryptoString } from '../components/CryptoString';
import { BlockLatestNews } from '../components/BlockLatestNews';
import { CardNewsSmall } from '../components/CardNewsSmall';
import { CardBanner } from '../components/CardBanner';
import { Devider } from '../components/Devider';
import { CardNewsType } from '../types/enums';
import { ArticleData } from '../types/articleType';
import { getArticlesSortedByDate } from '../utils/api_helpers';
import { Loader } from '../components/Loader';
import bannerEpicurus from '../assets/images/banners/banner_epicurus.png';
import bannerItg from '../assets/images/banners/banner_itg.svg';
import useTitle from '../utils/useTitle';

export const HomePage = () => {
  const [articles, setArticles] = React.useState<ArticleData[]>([]);
  const [isLoading, seIsLoading] = React.useState(true);

  useTitle('Home Page | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = async () => {
    const articlesDataApi = await getArticlesSortedByDate();

    setArticles(articlesDataApi.data);

    seIsLoading(false);
  };

  const topNewsData = () => {
    const topNewsDataApi = articles.find(article => article.attributes.top_home);

    return topNewsDataApi ? topNewsDataApi.attributes : articles[0].attributes;
  };

  React.useEffect(() => {
    scrollToTop();
    loadData();
  }, []);

  if (isLoading) {
    return (
      <Loader />
    )
  };

  return (
    <>
      <Header />

      <main className='main'>
        <div className='main__container'>
          <div className='main__topblock'>
            <div className='main__topnews'>
              <CardNews type={CardNewsType.top} article={topNewsData()} />
            </div>

            <div className='main__latestnews'>
              <BlockLatestNews articles={articles} />
            </div>

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

          <div className='main__topblock'>
            {articles.slice(0, 3).map((article) => 
              <CardNewsSmall key={article.id} article={article} />
            )}
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
