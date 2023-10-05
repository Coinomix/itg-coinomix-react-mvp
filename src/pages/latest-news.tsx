import * as React from 'react';
import '../assets/styles/scss/latest-news-page.scss'
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { CardLatestNews } from '../components/CardLatestNews';
import useTitle from '../utils/useTitle';
import { CardBanner } from '../components/CardBanner';
import bannerEpicurus from '../assets/images/banners/banner_epicurus.svg';
import bannerItg from '../assets/images/banners/banner_itg.svg';
import { BallTriangle } from 'react-loader-spinner';
import { client } from '../utils/fetchClient';
import { Article } from '../types/article';

const LatestNewsPage = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [isLoading, seIsLoading] = React.useState(true);

  useTitle('Latest News Page | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = async () => {
    const articlesDataApi = await client.get<any>('/articles?sort=publishedAt:desc&populate[0]=categories&populate[1]=author');

    setArticles(articlesDataApi.data);

    seIsLoading(false);
  };

  React.useEffect(() => {
    scrollToTop();
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#94CBFD"
          ariaLabel="ball-triangle-loading"
          wrapperClass=''
          wrapperStyle={{}}
          visible={true}
        />
      </div>
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

            <CardBanner imgUrl={bannerEpicurus} />

            <CardBanner imgUrl={bannerItg}/>

          </div>
        </div> 
      </main>
    </>
  );
};

export default LatestNewsPage;
