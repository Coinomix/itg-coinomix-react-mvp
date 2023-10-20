import * as React from 'react';
import '../assets/styles/scss/latest-news-page.scss';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { CardLatestNews } from '../components/CardLatestNews';
import useTitle from '../utils/useTitle';
import { CardBanner } from '../components/CardBanner';
import bannerEpicurus from '../assets/images/banners/banner_epicurus.png';
import bannerItg from '../assets/images/banners/banner_itg.svg';
import { ArticleData } from '../types/articleType';
import { getArticlesSortedByDate } from '../utils/api_helpers';
import { Loader } from '../components/Loader';

const LatestNewsPage = () => {
  const [articles, setArticles] = React.useState<ArticleData[]>([]);
  const [isLoading, seIsLoading] = React.useState(true);

  useTitle('Latest News Page | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = async () => {
    const articlesDataApi = await getArticlesSortedByDate();

    setArticles(articlesDataApi.data);

    seIsLoading(false);
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

      <PageTitle
          title='Latest news'
          breadcrumbsTitle='Home'
      />

      <main className='latest-news-page'>
        <div className='latest-news-page__container'>
          <div className='latest-news-page__content'>
            {articles.map(article => {
              return (
                <CardLatestNews key={article.id} article={article} />
              )
            })}

          </div>
          <div className='latest-news-page__sidebar'>

            <CardBanner imgUrl={bannerEpicurus} link='epicurus.io' />

            <CardBanner imgUrl={bannerItg} link='itg-investments.com' />

          </div>
        </div> 
      </main>
    </>
  );
};

export default LatestNewsPage;
