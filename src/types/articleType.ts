export interface ArticleData {
  data: Article[];
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    top_home: boolean;
    publishedAt: string;
    publish_date: string;
    locale: string;
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
