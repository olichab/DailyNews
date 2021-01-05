import React from "react";
import Date from "@components/Date";
import { ICardNews } from "@models/types";

type CardNewsHorizontalProps = {
  article: ICardNews;
};

const CardNewsHorizontal: React.FC<CardNewsHorizontalProps> = ({ article }) => {
  const { title, publishedAt, description, urlToImage } = article;
  return (
    <div className="flex flex-col lg:flex-row items-center w-full border bg-gray-50 border-gray-100 rounded-sm">
      {urlToImage ? (
        <img
          src={urlToImage}
          className="h-40 w-full lg:w-60 rounded-sm object-cover object-top"
          alt={title}
        />
      ) : (
        <img
          src="/assets/images/default-placeholder.png"
          className="h-40 w-60 rounded-sm object-cover object-center"
          alt="default placeholder"
        />
      )}
      <div className="px-4 py-4">
        <h2 className="text-base font-medium">{title}</h2>
        <p className="text-sm text-gray-600 overflow-ellipsis">{description}</p>
        <div className="my-2 text-right text-sm text-gray-500">
          Publié le <Date dateString={publishedAt} />
        </div>
      </div>
    </div>
  );
};

export default CardNewsHorizontal;
