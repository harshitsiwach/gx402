import React from 'react';
import { ArrowRight, BookOpen, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-4">
        <span className="glow-text bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
          GX402: Universal Gaming
        </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Payment SDK
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
        Next-Generation x402 Payment Integration for Game Developers. One line of code, zero blockchain knowledge required.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://docs.gx402.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-white hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg shadow-white/10"
        >
          Read the Docs
          <BookOpen className="ml-2 h-5 w-5" />
        </a>
        <a
          href="https://github.com/gx402"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-200 bg-black/20 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300"
        >
          View on GitHub
          <Github className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};