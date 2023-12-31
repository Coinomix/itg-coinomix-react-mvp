import * as React from 'react';
import '../assets/styles/scss/latest-news-page.scss';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import useTitle from '../utils/useTitle';
import { ArticleData } from '../types/articleType';
import { getArticlesSortedByDate } from '../utils/api_helpers';
import { Loader } from '../components/Loader';
import LatestNews from '../components/LatestNews/LatestNews';

const LatestNewsPage = () => {
  const [articles, setArticles] = React.useState<ArticleData[]>([]);
  const [isLoading, seIsLoading] = React.useState(true);

  useTitle('Latest News Page | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = async () => {
    seIsLoading(true);

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
      />

      <LatestNews articles={articles} />
    </>
  );
};

export default LatestNewsPage;
