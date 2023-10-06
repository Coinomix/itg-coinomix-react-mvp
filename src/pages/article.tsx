import * as React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../assets/styles/scss/index.scss';
import { Devider } from '../components/Devider';
import { CardBanner } from '../components/CardBanner';
import { PageTitle } from '../components/PageTitle';
import { useParams } from 'react-router-dom';
import useTitle from '../utils/useTitle';
import { getArticleBySlug } from '../utils/api_helpers';
import { ArticleAttributes } from '../types/articleType';
import { Loader } from '../components/Loader';

const ArticlePage = () => {
  const [article, setArticle] = React.useState<ArticleAttributes>();
  const [isLoading, seIsLoading] = React.useState(true);
  let { slug } = useParams();

  useTitle('Article Page');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = async () => {
    const articleDataApi = await getArticleBySlug(slug);

    setArticle(articleDataApi.data[0].attributes);

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
            title={article?.title}
            breadcrumbsTitle='Home'
            breadcrumbsUrl=''
      />

      <Devider height='40px' />

      <main className='main'>
        <article className='article'>

          <CardBanner imgUrl={article?.image.data.attributes.url} imgAlt={article?.title} />

          <div className='article__content'>
            <p className='article__content-text'>
              {article?.content}
            </p>
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
