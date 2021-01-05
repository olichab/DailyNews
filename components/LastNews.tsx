import CardNews from "@components/CardNews";
import { IArticle } from "@models/types";

type LastNewsProps = {
  articles: IArticle[];
};

const LastNews: React.FC<LastNewsProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles &&
        articles.map((e, i) => {
          return i % 5 === 0 ? (
            <div key={e.id} className="lg:col-span-2">
              <CardNews article={e} />
            </div>
          ) : (
            <div key={e.id}>
              <CardNews article={e} />
            </div>
          );
        })}
    </div>
  );
};

export default LastNews;
