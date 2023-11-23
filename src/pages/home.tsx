import * as React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CardNews } from '../components/CardNews';
import { CryptoString } from '../components/CryptoString';
import { BlockLatestNews } from '../components/BlockLatestNews';
import { CardBanner } from '../components/CardBanner';
import { Devider } from '../components/Devider';
import { CardNewsType } from '../types/enums';
import { TagData, ArticleData } from '../types/articleType';
import { getArticlesSortedByDate, getTagsHomePage } from '../utils/api_helpers';
import { Loader } from '../components/Loader';
import bannerEpicurus from '../assets/images/banners/banner_epicurus.png';
import bannerItg from '../assets/images/banners/banner_itg.svg';
import useTitle from '../utils/useTitle';
import { BlockTagNewsHome } from '../components/BlockTagNewsHome/BlockTagNewsHome';

export const HomePage = () => {
  const [articles, setArticles] = React.useState<ArticleData[]>([]);
  const [tags, setTags] = React.useState<TagData[]>([]);
  const [isLoading, seIsLoading] = React.useState(true);

  useTitle('Home Page | Coinomix');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = async () => {
    seIsLoading(true);

    const articlesDataApi = await getArticlesSortedByDate();
    const tagsDataApi = await getTagsHomePage();

    setArticles(articlesDataApi.data);
    setTags(tagsDataApi.data);

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
          <section className='main__topblock'>
            <div className='main__topnews'>
              <CardNews type={CardNewsType.top} article={topNewsData()} />
            </div>

            <div className='main__latestnews'>
              <BlockLatestNews articles={articles} />
            </div>

          </section>

          <Devider />

          <CryptoString />

          <Devider />

          <CardBanner imgUrl={bannerEpicurus} link='epicurus.io' imgAlt='Epicurus' />

          {tags && tags.map((tag) => (
            <BlockTagNewsHome tag={tag} />
          ))}

          <Devider />

          <CryptoString />

          <Devider />

          <CardBanner imgUrl={bannerItg} link='itg-investments.com' imgAlt='ITG' />
        </div>
      </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default HomePage;
