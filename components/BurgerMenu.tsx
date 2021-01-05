import React from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import SocialNetworks from "@components/SocialNetworks";

const routes = {
  business: "Business",
  entertainment: "Divertissement",
  general: "Général",
  health: "Santé",
  science: "Science",
  sports: "Sport",
  technology: "Technologie",
};

const BurgerMenu: React.FC = () => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex items-center justify-center p-2 text-gray-900 focus:outline-none">
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Menu.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scaleY-50"
              enterTo="transform opacity-100 scaleY-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scaleY-100"
              leaveTo="transform opacity-0 scaleY-50"
            >
              <Menu.Items
                static
                className="absolute right-0 w-screen h-auto origin-top-right bg-white border border-gray-200 divide-y divide-gray-200 outline-none"
              >
                <Menu.Item as="div">
                  <Link href={`/`}>
                    <a className="flex text-gray-900 p-3 ml-3 text-sm font-bold">
                      En ce moment
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item as="div">
                  <>
                    <h2 className="flex text-gray-900 p-3 pb-0 ml-3 text-sm font-bold">
                      Catégories
                    </h2>
                    <ul className="flex flex-col text-gray-900 p-1 ml-10 text-sm divide-y divide-gray-200">
                      {Object.entries(routes).map((route) => {
                        return (
                          <li key={route[0]} className="py-2 ">
                            <Link href={`/category/${route[0]}`}>
                              <a>{route[1]}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                </Menu.Item>
                <Menu.Item as="div">
                  <h2 className="flex text-gray-900 p-3 pb-0 ml-3 text-sm font-bold">
                    Rejoignez-nous
                  </h2>
                  <div className="flex p-3 ml-3">
                    <SocialNetworks />
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default BurgerMenu;
