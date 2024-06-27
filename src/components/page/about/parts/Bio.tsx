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
            src="/photo-profile.png"
            alt="Profile"
            className="w-72 object-cover p-5 dark:bg-slate-500 bg-slate-100 rounded-xl"
          />
          <p className="text-xl font-semibold">Muhammad Syaifullah Al Arief</p>
        </div>
        <div className="p-4 md:p-6 flex-1">
          <p className="text-lg font-semibold mb-2">Description:</p>
          <p className="mb-4">
            I am a fresh graduate of Jember State Polytechnic, Computer
            Engineering Study Program. Graduate with a GPA of 3.86. During
            college, I took part in a lot of IT training outside campus, such as
            study independent IoT engineer camp, Indobot Academy, Google IT
            Support, and several Web development courses. After college I tried
            taking bootcamps and writing several blogs related to web
            development
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
