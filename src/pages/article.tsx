import * as React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { useParams } from 'react-router-dom';
import useTitle from '../utils/useTitle';
import { getArticleBySlug } from '../utils/api_helpers';
import { ArticleAttributes } from '../types/articleType';
import { Loader } from '../components/Loader';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CardTags } from '../components/CardTags';
import { formateDate } from '../utils/helpers';

const ArticlePage = () => {
  const [article, setArticle] = React.useState<ArticleAttributes>();
  const [isLoading, seIsLoading] = React.useState(true);
  let { slug } = useParams();

  useTitle(article?.title || '');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const imageUrl = article?.image.data.attributes.url;
  const publishData = formateDate(article?.publish_date || '');

  React.useEffect(() => {
    const loadData = async () => {
      seIsLoading(true);

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
            breadcrumbsTitle={article?.tags.data[0].attributes.name || ''}
            breadcrumbsUrl={article?.tags.data[0].attributes.slug || ''}
      />

      <main className='main'>
        <article className='article'>

          <h1 className='article__title'>{article?.title}</h1>

          <div className='article__imagewrapper'>
            <img src={imageUrl} alt={article?.title} className='article__image' />

            <div className='cardnews__content'>
            <div className='cardnews__header'>
              <CardTags tags={article?.tags.data} isArrow={false} />
            </div>

            <div className='cardnews__footer'>
              <ul className='cardnews__author'>
                <li>
                  <span className='cardnews__author-link'>{`by ${article?.author.data.attributes.name}`}</span>
                </li>
                <li>{publishData}</li>
              </ul>
            </div>
            </div>
          </div>

          <div className='article__content'>
            <Markdown remarkPlugins={[remarkGfm]} components={{
              h2: ({ children }) => <h2 className="article__content-h">{children}</h2>,
              h3: ({ children }) => <h3 className="article__content-h">{children}</h3>,
              h4: ({ children }) => <h4 className="article__content-h">{children}</h4>,
              h5: ({ children }) => <h5 className="article__content-h">{children}</h5>,
              h6: ({ children }) => <h6 className="article__content-h">{children}</h6>,
              p: ({ children }) => <p className="article__content-p">{children}</p>,
              ol: ({ children }) => <ol className="article__content-list">{children}</ol>,
              ul: ({ children }) => <ul className="article__content-list">{children}</ul>,
              a: ({ children, href }) => <a href={href} className="article__content-link">{children}</a>,
              blockquote: ({ children }) => <blockquote className="article__content-blockquote">{children}</blockquote>,
              img: ({ src, alt }) => <img src={src}  alt={alt} className="article__content-image" />,
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
