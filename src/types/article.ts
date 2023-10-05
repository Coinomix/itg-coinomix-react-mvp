export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    top_home: boolean;
    publishedAt: string;
    locale: string
    categories: {
      data: [
        {
          id: number,
          attributes: {
            name: string;
            slug: string;
            description: string;
            locale: string;
          }
        }
      ]
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
