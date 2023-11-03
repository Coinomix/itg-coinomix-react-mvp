export interface Article {
  data: ArticleData[];
}

export interface ArticleData {
  id: number;
  attributes: ArticleAttributes;
}

export interface Tag {
  data: TagData[];
}

export interface TagData {
  id: number,
  attributes: {
    name: string;
    slug: string;
    range: number;
    homepage: boolean;
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
  tags: {
    data: TagData[];
  }
  author: {
    data: {
      id: number;
      attributes: {
        name: string;
      }
    }
  };
}
