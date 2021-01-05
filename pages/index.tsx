import React, { useEffect } from "react";
import axios from "axios";
import { useNews, useDispatchNews } from "@context/NewsContext";
import LastNews from "@components/LastNews";
import { IArticle } from "@models/types";

type HomeProps = {
  listArticles: IArticle[];
};

const Home: React.FC<HomeProps> = () => {
  const news = useNews();
  const dispatch = useDispatchNews();
  useEffect(() => {
    const key = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=fr&pageSize=30&apiKey=${key}`;
    (async function fetch() {
      await axios
        .get(url)
        .then((response) => {
          dispatch({
            type: "GET_LAST_ARTICLES",
            payload: response.data.articles.map((a: IArticle, i: number) => {
              a.id = i;
              return a;
            }),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);
  return (
    <>
      <h1>En ce moment</h1>
      <LastNews articles={news.articles} />
    </>
  );
};

export default Home;
