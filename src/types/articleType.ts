export interface Article {
  data: ArticleData[];
}

export interface ArticleData {
  id: number;
  attributes: ArticleAttributes;
}

export interface ArticleCaregory {
  data: ArticleCaregoryData[];
}

export interface ArticleCaregoryData {
  id: number,
  attributes: {
    name: string;
    slug: string;
    description: string;
    locale: string;
  }
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
        formats: {
          thumbnail: {
            url: string;
          }
          small: {
            url: string;
          }
          medium: {
            url: string;
          }
          large: {
            url: string;
          }
        }
      }
    }
  }
  categories: {
    data: ArticleCaregoryData[];
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
