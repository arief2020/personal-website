import Link from "next/link";
import ThemeSwitch from "./parts/ThemeSwitch";

const Header = () => {
  return (
    // <header className="navbar bg-base-100 dark:bg-gray-900 shadow-lg flex justify-between px-8">
    //   <a className="btn btn-ghost text-xl dark:text-white">Musarif</a>
    //   <nav className="flex space-x-4 items-center dark:text-white">
    //     <Link
    //       href="/"
    //       className="list-none underline-hover mr-2 cursor-pointer "
    //     >
    //       Home
    //     </Link>
    //     <Link href="" className="list-none underline-hover mr-2 cursor-pointer">
    //       About
    //     </Link>
    //     <Link href="" className="list-none underline-hover mr-2 cursor-pointer">
    //       Projects
    //     </Link>
    //     <Link href="" className="list-none underline-hover mr-2 cursor-pointer">
    //       Blog
    //     </Link>
    //     <ThemeSwitch />
    //   </nav>
    // </header>
    <header className="navbar bg-white dark:border-slate-950 dark:bg-gray-900 shadow-lg flex justify-between px-8 py-4 fixed transition duration-300">
      <a className="btn btn-ghost text-xl dark:text-white">Musarif</a>
      <nav className="flex space-x-4 items-center">
        <Link
          href="/"
          className="list-none underline-hover mr-2 cursor-pointer dark:text-white"
        >
          Home
        </Link>
        <Link
          href="/"
          className="list-none underline-hover mr-2 cursor-pointer dark:text-white"
        >
          About
        </Link>
        <Link
          href="/"
          className="list-none underline-hover mr-2 cursor-pointer dark:text-white"
        >
          Project
        </Link>
        <Link
          href="/"
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
