import { Article, ArticleCaregory } from "../types/articleType";
import { client } from "./fetchClient";

export const getCategories = () => client.get<ArticleCaregory>('/categories?sort=name:asc');
export const getArticlesSortedByDate = () => client.get<Article>('/articles?sort=publish_date:desc&populate[0]=image&populate[1]=categories&populate[2]=author');
export const getArticleBySlug = (slug: any) => client.get<Article>(`/articles?filters[slug][$eq]=${slug}&populate=*`);
export const getArticlesByCategory = (categoryId: number) => client.get<Article>(`/articles?sort=publish_date:desc&filters[categories][id][$eq]=${categoryId}&populate=*`);
