export interface Article {
  data: ArticleData[];
}

export interface ArticleData {
  id: number;
  attributes: ArticleAttributes;
}

export interface ArticleAttributes {
  title: string;
  description: string;
  content: string;
  slug: string;
  top_home: boolean;
  publishedAt: string;
  publish_date: string;
  locale: string;
  image: {
    data: {
      id: number;
      attributes: {
        url: string;
      }
    }
  }
  categories: {
    data: ArticleCaregory[];
  }
  author: {
    data: {
      id: number;
      attributes: {
        name: string;
        locale: string;
      }
    }
  };
}

export interface ArticleCaregory {
  id: number,
  attributes: {
    name: string;
    slug: string;
    description: string;
    locale: string;
  }
}
