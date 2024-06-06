import React from 'react'

export default function Side() {
  return (
    <div className="bg-white dark:bg-gray-800 w-64 flex flex-col py-8 px-4 shadow-lg rounded-lg max-h-[464px]">
      <img
        className="bg-slate-500 w-24 h-24 rounded-full self-center"
        src=""
        alt=""
      />
      <p className="text-center mt-4 pb-2 border-b-4 border-gray-200 dark:border-gray-700">
        Muhammad Syaifullah Al Arief
      </p>
      <div className="mt-4 space-y-2">
        <p className="text-left">Total Project: 2</p>
        <p className="text-left">Fullstack Web: 1</p>
        <p className="text-left">Frontend Web: 1</p>
        <p className="text-left">Backend Web: 1</p>
        <p className="text-left">Mobile Apps: 1</p>
        <p className="text-left">IoT project: 1</p>
      </div>
    </div>
  );
}
