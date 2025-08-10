import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between border border-b-secondary p-4 backdrop-blur-lg relative">
      <Link>
        <div className="flex sm:flex-row flex-col items-center mx-0 sm:mx-12 gap-2">
          {/* <img
            src="/assets/profile-icon.webp"
            className="w-14 h-14 rounded-full "
            alt="Profile"
          /> */}
          <h1 className="text-primary font-medium ml-3 text-3xl">Yodahe Teshome</h1>
        </div>
      </Link>

      {/* Hamburger menu button for small screens */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Menu items */}
      <div
        className={`
          ${menuOpen ? 'flex' : 'hidden'}
          flex-col gap-6 items-center  left-95 top-12 bg-secondary p-6 rounded-lg shadow-lg
          sm:static sm:flex sm:flex-row sm:gap-10 sm:bg-transparent sm:p-0 sm:rounded-none sm:shadow-none sm:items-center mr-12
        `}
      >
        <button onClick={scrollTo} className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300 cursor-pointer">
          Home
        </button>
        <button onClick={scrollTo} className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300 cursor-pointer">
          About
        </button>
        <button onClick={scrollTo} className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300 cursor-pointer">
          Projects
        </button>
        <button onClick={scrollTo} className="text-white text-lg font-medium hover:!text-primary transition-colors duration-300 cursor-pointer">
            Contact
          </button>
      </div>
    </div>
  );
};

export default Navbar;
