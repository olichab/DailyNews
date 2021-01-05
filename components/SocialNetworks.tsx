import React from "react";

const socialNetworks = {
  facebook: "https://fr-fr.facebook.com",
  twitter: "https://twitter.com/?lang=fr",
  instagram: "https://www.instagram.com",
  youtube: "https://www.youtube.com",
};

const SocialNetworks: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      {Object.entries(socialNetworks).map((socialNetwork) => {
        return (
          <a
            key={socialNetwork[0]}
            href={socialNetwork[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center m-1"
          >
            <img
              src={`/assets/images/icon-${socialNetwork[0]}.svg`}
              alt={`icon ${socialNetwork[0]}`}
              width="20"
              height="20"
              className="m-2"
            />
            <h3 className="text-gray-900 text-sm">
              {`${socialNetwork[0]
                .slice(0, 1)
                .toUpperCase()}${socialNetwork[0].slice(1)}`}
            </h3>
          </a>
        );
      })}
    </div>
  );
};

export default SocialNetworks;
