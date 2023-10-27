
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Add the hamburger menu icon

import { useState } from 'react'; // Import useState hook

const NavbarGreen = () => {
  // Define a state variable to manage the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navgreen relative flex flex-wrap items-start justify-between bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/imgs/logo-1.png"
              alt="Nothernnest Retreat Logo"
              width={200} // This must be adjusted for mobile
              height={200} // This must be adjusted for mobile
            />
          </div>
        </Link>
        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-custom-yellow font-custom text-xl"
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {/* Mobile menu */}
        <ul
          className={`lg:flex list-none ml-auto ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="nav-item text-custom-yellow font-custom px-4 text-xl">
            <Link href="/login">Login</Link>
          </li>
          <li className="nav-item text-custom-yellow font-custom px-4 text-xl">
            <Link href="/register">Register</Link>
          </li>
          <li className="nav-item px-4">
            <Link href="/dashboard">
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ color: '#cbb26a', fontSize: '24px' }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarGreen;
