import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiPostgresql } from 'react-icons/si';

export default function Bio() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="p-4 md:p-6 flex flex-col items-center">
          <img
            src="https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp"
            alt="Profile"
            className="w-44 h-56 rounded-lg shadow-md mb-4"
          />
          <p className="text-xl font-semibold">Muhammad Syaifullah Al Arief</p>
        </div>
        <div className="p-4 md:p-6 flex-1">
          <p className="text-lg font-semibold mb-2">Description:</p>
          <p className="mb-4">
            Saya seorang freshgraduate dari Politeknik Negeri Jember. Lulusan
            dengan nilai IPK 3.86. Pada semester 5 perkuliahan, saya gunakan
            untuk mengikuti studi independent kampus merdeka IoT engineer camp
            indobot academy. Pada studi independent tersebut saya belajar cara
            memprogram smart device, mengontrol, memonitoring melalui web dan
            aplikasi android. Selain itu, saya juga mengikuti beberapa pelatihan
            dan khursus yang berkaitan dengan pengembangan web seperti,
            React.js, Vue.js, Laravel, Node.js (Adonis), dan Golang
          </p>
          <p className="text-lg font-semibold mb-2">Main Tech:</p>
          <div className="flex space-x-4 mb-4">
            <FaReact className="text-blue-500 text-3xl" title="React" />
            <SiExpress
              className="text-gray-800 dark:text-white text-3xl"
              title="Express"
            />
            <SiPostgresql
              className="text-blue-800 text-3xl"
              title="PostgreSQL"
            />
            <SiJavascript
              className="text-yellow-500 text-3xl"
              title="JavaScript"
            />
          </div>
          {/* <p className="text-lg font-semibold mb-2">Other Tech:</p>
          <div className="flex space-x-4">
            <FaGolang className="text-blue-600 text-3xl" title="Golang" />
            <FaVuejs className="text-green-500 text-3xl" title="Vue.js" />
            <FaDocker className="text-blue-400 text-3xl" title="Docker" />
            <FaGit className="text-orange-600 text-3xl" title="Git" />
            <FaLaravel className="text-red-600 text-3xl" title="Laravel" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
