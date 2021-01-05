import React from "react";
import SocialNetworks from "@components/SocialNetworks";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-white h-auto w-full p-3 flex flex-col justify-center items-center">
        <hr className="hidden md:block w-full border-gray-300" />
        <h2 className="flex text-gray-900 p-3 text-sm font-bold">
          Rejoignez-nous
        </h2>
        <SocialNetworks />
      </div>
    </>
  );
};

export default Footer;
