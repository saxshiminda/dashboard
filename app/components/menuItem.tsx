"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface MenuItemProps {
  href?: string;
  icon: IconType;
  text: string;
  subItems?: { href: string; text: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ href, icon: Icon, text, subItems }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li>
      {href ? (
        <Link href={href}>
          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">{text}</span>
          </div>
        </Link>
      ) : (
        <button
          type="button"
          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          onClick={toggleSubMenu}
        >
          <Icon className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{text}</span>
          {subItems && (
            <svg
              className={`w-3 h-3 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          )}
        </button>
      )}
      {subItems && isSubMenuOpen && (
        <ul className="py-2 space-y-2">
          {subItems.map((subItem, index) => (
            <li key={index}>
              <Link href={subItem.href}>
                <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  {subItem.text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
