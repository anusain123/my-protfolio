import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ['Skill', 'Products', 'Experience', 'Education', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-sky-100/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold flex items-center gap-2 text-white">
          🎓 <span className="tracking-wide">Anu</span>
        </div>
        <ul className="hidden md:flex items-center justify-center gap-8 font-semibold text-base flex-1 text-center text-white font-sans">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition font-sans font-light"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative hidden md:flex items-center gap-2 text-white">
          <i className="bx bx-search absolute left-3 text-xl text-gray-500 dark:text-gray-400"></i>
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="pl-10 pr-4 py-2 rounded-full border border-indigo-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-white"
          />
        </div>
        <div className="flex items-center gap-4 md:hidden text-white">
          <i className="bx bx-search text-2xl text-gray-700 dark:text-white"></i>
          <button
            className="text-4xl text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </button>
        </div>
      </div>
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-slate-900 px-6 py-4 flex flex-col gap-4 font-semibold text-base shadow-md text-white">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
