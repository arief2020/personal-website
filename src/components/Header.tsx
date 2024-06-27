'use client';
import Link from "next/link";
import ThemeSwitch from "./parts/ThemeSwitch";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

   return (
     <header className="navbar bg-white dark:border-slate-950 dark:bg-gray-900 shadow-lg fixed w-full flex justify-between items-center px-8 py-4 transition duration-300 z-50">
       <a className="btn btn-ghost text-xl dark:text-white">Musarif</a>
       <div className="flex items-center md:hidden">
         <button
           onClick={toggleMenu}
           className="text-gray-800 dark:text-white focus:outline-none"
         >
           {isOpen ? (
             <FaTimes className="text-2xl" />
           ) : (
             <FaBars className="text-2xl" />
           )}
         </button>
       </div>
       <nav
         className={`${
           isOpen ? "block" : "hidden"
         } md:flex space-x-4 items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent dark:md:bg-transparent px-8 md:px-0 py-4 md:py-0 shadow-lg md:shadow-none`}
       >
         <Link
           href="/"
           className="block md:inline list-none underline-hover mr-2 cursor-pointer dark:text-white py-2 md:py-0"
         >
           Home
         </Link>
         <Link
           href="/about"
           className="block md:inline list-none underline-hover pr-2 mr-2 cursor-pointer dark:text-white py-2 md:py-0"
           style={{ marginLeft: 0 }}
         >
           About
         </Link>
         <Link
           href="/project"
           className="block md:inline list-none underline-hover  pr-2 mr-2 cursor-pointer dark:text-white py-2 md:py-0"
           style={{ marginLeft: 0 }}
         >
           Project
         </Link>
         <Link
           href="/blog"
           className="block md:inline list-none underline-hover  pr-2 mr-2 cursor-pointer dark:text-white py-2 md:py-0"
           style={{ marginLeft: 0 }}
         >
           Blog
         </Link>
         <ThemeSwitch />
       </nav>
     </header>
   );
};

export default Header;
