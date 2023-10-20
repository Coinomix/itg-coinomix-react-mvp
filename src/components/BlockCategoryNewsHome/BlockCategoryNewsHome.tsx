import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleCaregoryData, ArticleData } from '../../types/articleType';
import { Devider } from '../Devider';
import { CardNewsSmall } from '../CardNewsSmall';
import { getArticlesByCategory } from '../../utils/api_helpers';
import { Loader } from '../Loader';

interface Props {
  category: ArticleCaregoryData;
}

export const BlockCategoryNewsHome: React.FC<Props> = ({ category }) => {
  const [articles, setArticles] = React.useState<ArticleData[]>([]);
  // const [isLoading, seIsLoading] = React.useState(true);

  const loadData = async () => {
    const articlesDataApi = await getArticlesByCategory(category.id);

    setArticles(articlesDataApi.data);

    // seIsLoading(false);
  };

  React.useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className='main__section'>
      <h2 className='main__section-title'>{category.attributes.name}</h2>
      <Link to={category.attributes.slug} className='main__section-readmore'>Read more</Link>
    </div>

    <Devider />

    {articles ? (
      <section className='main__topblock'>
      {articles.slice(0, 3).map((article) => 
        <CardNewsSmall key={article.id} article={article} />
      )}
    </section>
    )
    : <Loader />
  }
  </>
  );
};
