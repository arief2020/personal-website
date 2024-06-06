import Link from "next/link";
import ThemeSwitch from "./parts/ThemeSwitch";

const Header = () => {
  return (
    <header className="navbar bg-white dark:border-slate-950 dark:bg-gray-900 shadow-lg flex justify-between px-8 py-4 fixed transition duration-300 z-50">
      <a className="btn btn-ghost text-xl dark:text-white">Musarif</a>
      <nav className="flex space-x-4 items-center">
        <Link
          href="/"
          className="list-none underline-hover mr-2 cursor-pointer dark:text-white"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="list-none underline-hover mr-2 cursor-pointer dark:text-white"
        >
          About
        </Link>
        <Link
          href="/project"
          className="list-none underline-hover mr-2 cursor-pointer dark:text-white"
        >
          Project
        </Link>
        <Link
          href="/blog"
          className="list-none underline-hover mr-2 cursor-pointer dark:text-white"
        >
          Blog
        </Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
