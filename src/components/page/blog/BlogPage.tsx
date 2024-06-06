import Contact from "@/components/parts/Contact";
import React from "react";

export default function BlogPage() {
  const blog = [
    {
      title: "Pengenalan React Hooks",
      description:
        "React Hooks adalah fitur baru yang diperkenalkan dalam React versi 16.8. Hooks memungkinkan pengembang untuk menggunakan state",
      url: "https://muhammadsyaifullahalarief.hashnode.dev/pengenalan-react-hooks",
    },
    {
      title: "JSX di ReactJS",
      description:
        "JSX, singkatan dari JavaScript XML, adalah ekstensi sintaksis yang digunakan dalam React untuk mendefinisikan tampilan komponen. Ini memungkinkan kita untuk menulis kode HTML-like di dalam JavaScript",
      url: "https://muhammadsyaifullahalarief.hashnode.dev/jsx-di-reactjs",
    },
    {
      title: "Setup ESLint, Prettier, dan Husky di ReactJS",
      description:
        "Pengembangan perangkat lunak adalah proses yang kompleks dan memerlukan perhatian terhadap detail-detail kecil untuk memastikan kualitas kode yang baik. Salah satu cara untuk mencapai ini adalah dengan menggunakan alat bantu seperti ESLint, Prettier, dan Husky dalam proyek React.",
      url: "https://muhammadsyaifullahalarief.hashnode.dev/jsx-di-reactjs",
    },
    {
      title: "Introduction to React",
      description:
        "React adalah sebuah perpustakaan JavaScript yang kuat dan populer untuk membangun antarmuka pengguna (UI) yang dinamis dan interaktif dalam aplikasi web. Dikembangkan oleh Facebook, React telah menjadi salah satu alat utama dalam pengembangan aplikasi web modern. ",
      url: "https://muhammadsyaifullahalarief.hashnode.dev/introduction-to-react",
    },
    {
      title: "Apa itu JavaScript",
      description:
        "JavaScript adalah bahasa pemrograman yang digunakan oleh para pengembang untuk membuat halaman web menjadi lebih menarik dan berinteraksi. Dari menghadirkan fitur-fitur seperti pembaruan otomatis di media sosial hingga animasi yang menarik perhatian ",
      url: "https://muhammadsyaifullahalarief.hashnode.dev/apa-itu-javascript",
    },
  ];
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-8 transition duration-300 pt-24">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{blog.map((item, index) => (
        <div key={index} className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-semibold mb-4">
              {item.title}
            </h2>
            <p className="mb-4">
              {item.description}
            </p>
            <div className="card-actions justify-end">
              <a href={item.url} className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
			
		))}
        
      </div>
    </main>
  );
}
