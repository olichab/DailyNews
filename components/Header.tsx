import React from "react";
import Link from "next/link";
import BurgerMenu from "@components/BurgerMenu";

const routes: { [key: string]: string } = {
  business: "Business",
  entertainment: "Divertissement",
  general: "Général",
  health: "Santé",
  science: "Science",
  sports: "Sport",
  technology: "Technologie",
};

const Header: React.FC = () => {
  return (
    <nav className="bg-white flex md:flex-col justify-between items-center sticky top-0 border-b border-gray-300">
      {/* Brandname */}
      <Link href={`/`}>
        <a>
          <img
            src="/assets/images/logo-DailyNews.svg"
            alt="logo dailynews"
            width="280"
            height="140"
            className="m-2 md:mt-4 w-28 md:w-36 lg:w-52"
          />
        </a>
      </Link>
      {/* Menu tablet/desktop */}
      <hr className="hidden md:block w-full border-gray-300" />
      <div className="hidden md:flex items-center justify-center h-12">
        <Link href={`/`}>
          <a className="text-gray-900 px-3 py-2 text-sm font-bold hover:text-gray-400 border-r border-gray-400">
            En ce moment
          </a>
        </Link>
        <ul className="flex">
          {Object.keys(routes).map((route) => {
            return (
              <li key={route} className="px-3 py-2">
                <Link href={`/category/${route}`}>
                  <a className="text-gray-900 text-sm font-bold hover:text-gray-400">
                    {routes[route]}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Burger menu mobile */}
      <div className="flex justify-end h-10 md:hidden">
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Header;
