import React, { useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

const routes = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
const DropdownCategories: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <Menu>
        <Menu.Button
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold leading-5 text-gray-900 transition duration-150 ease-in-out hover:text-yellow-200 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Catégories</span>
          <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className="absolute right-0 w-auto mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 outline-none"
          >
            {routes.map((route) => {
              return (
                <div className="px-4 py-3" key={route}>
                  <Link href={`/category/${route}`}>
                    <a
                      className="text-sm font-medium leading-5 text-gray-900 truncate hover:text-gray-500"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {`${route.slice(0, 1).toUpperCase()}${route.slice(1)}`}
                    </a>
                  </Link>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownCategories;
