import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useNews } from "@context/NewsContext";
import Date from "@components/Date";
import { IArticle } from "@models/types";

type ArticleDetailsProps = {
  article: IArticle;
};

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ id }) => {
  const news = useNews();
  const articleFilteredById = news.articles.filter(
    (article) => article.id === id
  );
  const {
    title,
    publishedAt,
    source,
    author,
    description,
    url,
    urlToImage,
  } = articleFilteredById[0];

  return (
    <>
      <Head>
        <title>{title.slice(0, 25)}</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold py-4">{title}</h1>
        <img src={urlToImage} className="h-96 w-full object-cover object-top" />
        {author ? (
          <h2 className="mt-2 text-gray-500">
            {author} - {source && source.name}
          </h2>
        ) : (
          <h3 className="mt-2 text-gray-500">{source && source.name}</h3>
        )}
        <div className="my-2 text-sm text-gray-400">
          Publié le <Date dateString={publishedAt} />
        </div>
        <p className="to-gray-700">{description}</p>
        <div className="flex justify-end mt-4 mr-4">
          <Link href={url}>
            <a target="_blank" rel="noopener noreferrer">
              <button className="btn">En savoir plus</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = parseInt(params.id);

  if (!id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { id },
  };
};
