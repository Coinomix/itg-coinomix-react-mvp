import { Article, Tag } from "../types/articleType";
import { client } from "./fetchClient";

export const getTags = () => client.get<Tag>('/tags?sort=name:asc');
export const getTagsHomePage = () => client.get<Tag>('/tags?sort=range&filters[range][$notNull]=true');
export const getTagBySlug = (slug: string) => client.get<Tag>(`/tags?filters[slug][$eq]=${slug}`);
export const getArticlesSortedByDate = () => client.get<Article>('/articles?sort=publish_date:desc&populate[0]=image&populate[1]=tags&populate[2]=author');
export const getArticleBySlug = (slug: any) => client.get<Article>(`/articles?filters[slug][$eq]=${slug}&populate=*`);
export const getArticlesByTagId = (tagId: number) => client.get<Article>(`/articles?sort=publish_date:desc&filters[tags][id][$eq]=${tagId}&populate=*`);
export const getArticlesByTagSlug = (tagSlug: string) => client.get<Article>(`/articles?sort=publish_date:desc&filters[tags][slug][$eq]=${tagSlug}&populate=*`);
