import Head from "next/head";
import { GetServerSideProps } from "next";
import axios from "axios";
import CardNewsHorizontal from "@components/CardNewsHorizontal";
import { IArticle } from "@models/types";

type articlesByCategoryProps = {
  listArticlesByCategory: IArticle[];
  category: string;
};

const articlesByCategory: React.FC<articlesByCategoryProps> = ({
  listArticlesByCategory,
  category,
}) => {
  const traductionNameCategory: { [key: string]: string } = {
    business: "Business",
    entertainment: "Divertissement",
    general: "Général",
    health: "Santé",
    science: "Science",
    sports: "Sport",
    technology: "Technologie",
  };
  return (
    <>
      <Head>
        <title>{traductionNameCategory[category]}</title>
      </Head>
      <h1>{traductionNameCategory[category]}</h1>
      <div className="grid grid-cols-1 gap-5">
        {listArticlesByCategory &&
          listArticlesByCategory.map((e) => {
            return (
              <div key={e.id}>
                <CardNewsHorizontal article={e} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default articlesByCategory;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const category = params?.category;
  const key = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=fr&apiKey=${key}`;
  const listArticlesByCategory = await axios
    .get(url)
    .then((response) => {
      return response.data.articles.map((a: IArticle, i: number) => {
        a.id = i;
        return a;
      });
    })
    .catch((error) => {
      console.log(error);
    });
  if (!listArticlesByCategory) {
    return {
      notFound: true,
    };
  }

  return {
    props: { listArticlesByCategory, category },
  };
};
