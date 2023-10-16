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
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ArticlePage = () => {
  const [article, setArticle] = React.useState<ArticleAttributes>();
  const [isLoading, seIsLoading] = React.useState(true);
  let { slug } = useParams();

  useTitle('Article Page');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const loadData = async () => {
      const articleDataApi = await getArticleBySlug(slug);
  
      setArticle(articleDataApi.data[0].attributes);
  
      seIsLoading(false);
    };

    scrollToTop();
    loadData();
  }, [slug]);

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

          <div className='article__image'>
            <CardBanner imgUrl={article?.image.data.attributes.url} imgAlt={article?.title} />
          </div>

          <div className='article__content'>
            <Markdown remarkPlugins={[remarkGfm]} components={{
              p: ({ children }) => <p className="article__content-p">{children}</p>,
            }}>
              {article?.content}
            </Markdown>
          </div>
        </article>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default ArticlePage;
