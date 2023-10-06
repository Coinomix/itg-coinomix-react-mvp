import { ArticleData } from "../types/articleType";
import { client } from "./fetchClient";

export const getArticlesSortedByDate = () => client.get<ArticleData>('/articles?sort=publish_date:desc&populate[0]=categories&populate[1]=author');
