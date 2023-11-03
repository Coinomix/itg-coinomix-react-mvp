import React from 'react';
import { Link } from 'react-router-dom';
import { TagData, ArticleData } from '../../types/articleType';
import { Devider } from '../Devider';
import { CardNewsSmall } from '../CardNewsSmall';
import { getArticlesByTagId } from '../../utils/api_helpers';
import { Loader } from '../Loader';

interface Props {
  tag: TagData;
}

export const BlockTagNewsHome: React.FC<Props> = ({ tag }) => {
  const [articles, setArticles] = React.useState<ArticleData[]>([]);
  // const [isLoading, seIsLoading] = React.useState(true);

  const loadData = async () => {
    // seIsLoading(true);

    const articlesDataApi = await getArticlesByTagId(tag.id);

    setArticles(articlesDataApi.data);

    // seIsLoading(false);
  };

  const filteredArticles = articles.filter(item => item.attributes.tags.data[0].attributes.slug === tag.attributes.slug);

  React.useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className='main__section'>
      <h2 className='main__section-title'>{`#${tag.attributes.name}`}</h2>
      <Link to={tag.attributes.slug} className='main__section-readmore'>View all</Link>
    </div>

    <Devider />

    {articles ? (
      <section className='main__topblock'>

      {filteredArticles.slice(0, 3).map((article) => 
        <CardNewsSmall key={article.id} article={article} />
      )}

    </section>
    )
    : <Loader />
  }
  </>
  );
};
