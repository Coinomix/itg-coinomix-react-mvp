import * as React from 'react';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import useTitle from '../utils/useTitle';
import { ArticleData, TagData } from '../types/articleType';
import { getArticlesByTagSlug, getTagBySlug } from '../utils/api_helpers';
import { Loader } from '../components/Loader';
import LatestNews from '../components/LatestNews/LatestNews';
import { useParams } from 'react-router-dom';

const TagPage = () => {
  const [articles, setArticles] = React.useState<ArticleData[]>([]);
  const [tagData, setTagData] = React.useState<TagData>();
  const [isLoading, seIsLoading] = React.useState(true);

  let { tag } = useParams();

  const tagName = tagData?.attributes.name;

  useTitle(tagName || tag || '');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = async () => {
    seIsLoading(true);

    if (tag) {
      const tagDataApi = await getTagBySlug(tag);
      const articlesDataApi = await getArticlesByTagSlug(tag);

      setTagData(tagDataApi.data[0]);
      setArticles(articlesDataApi.data);
    }

    seIsLoading(false);
  };

  React.useEffect(() => {
    scrollToTop();
    loadData();
  }, [tag]);

  if (isLoading) {
    return (
      <Loader />
    )
  };

  return (
    <>
      <Header />

      <PageTitle
          title={tagName}
      />

      <LatestNews articles={articles} />
    </>
  );
};

export default TagPage;
