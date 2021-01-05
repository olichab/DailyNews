import React from "react";
import Link from "next/link";
import { ICardNews } from "@models/types";

type CardNewsProps = {
  article: ICardNews;
};

const CardNews: React.FC<CardNewsProps> = ({ article }) => {
  const { id, title, description, urlToImage } = article;
  return (
    <div className="w-full border bg-gray-50 border-gray-100 rounded-sm">
      {urlToImage ? (
        <img
          src={urlToImage}
          className="h-60 w-full rounded-sm object-cover object-top"
          alt={title}
        />
      ) : (
        <img
          src="/assets/images/default-placeholder.png"
          className="h-60 w-full rounded-sm object-cover object-center"
          alt="default placeholder"
        />
      )}
      <div className="px-4 py-4">
        <Link href={`/article/${id}`}>
          <a>
            <h2 className="text-base font-medium hover:underline ">{title}</h2>
          </a>
        </Link>
        <p className="text-sm text-gray-600 overflow-ellipsis">{description}</p>
      </div>
    </div>
  );
};

export default CardNews;
