import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Ayoub</h1>
      <p className="text-xl mb-6">Full-Stack Developer | React & Tailwind</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        View My Work
      </a>
    </section>
  );
}
