"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaHome, FaUser, FaCog } from 'react-icons/fa';
import Link from 'next/link';

const Sidemenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div style={{ width: isOpen ? '200px' : '50px', transition: 'width 0.3s', background: '#333', color: '#fff', height: '100vh' }}>
      <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link href="/dashboard">
              <FaHome />
              {isOpen && 'Dashboard'}
          </Link>
        </li>
        <li>
          <Link href="/user">
              <FaUser />
              {isOpen && ' User'}
          </Link>
        </li>
        <li onClick={toggleSubMenu} style={{ cursor: 'pointer' }}>
          <FaCog />
          {isOpen && ' Page 3'}
          {isOpen && (isSubMenuOpen ? <FaChevronDown /> : <FaChevronRight />)}
          {isSubMenuOpen && (
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li>Sub Page 1</li>
              <li>Sub Page 2</li>
            </ul>
          )}
        </li>
        <li>
          <FaCog />
          {isOpen && ' Page 4'}
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;