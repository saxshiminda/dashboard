"use client";

import React from 'react';
import { FaChevronDown, FaChevronRight, FaHome, FaUser, FaCog, FaChartBar, FaTachometerAlt } from 'react-icons/fa';
import MenuItem from './menuItem';

const Sidemenu: React.FC = () => {
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <MenuItem href="/dashboard" icon={FaTachometerAlt} text="Dashboard" />
            <MenuItem
              icon={FaChartBar}
              text="Reports"
              subItems={[
                { href: '/reports/products', text: 'Products' },
                { href: '/reports/userProfile', text: 'User Profile'},
              ]}
            />
            <MenuItem href="#" icon={FaHome} text="Kanban" />
            <MenuItem href="#" icon={FaUser} text="Users" />
            <MenuItem href="#" icon={FaCog} text="Products" />
            <MenuItem href="#" icon={FaChevronRight} text="Sign In" />
            <MenuItem href="#" icon={FaChevronRight} text="Sign Up" />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidemenu;