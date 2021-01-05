export interface ICardNews {
  id?: number;
  title: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
}

interface ISource {
  id: number;
  name: string;
}

export interface IArticle {
  id: number;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

export type DateProps = {
  dateString: string;
};
