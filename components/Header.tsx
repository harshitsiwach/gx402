import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300 px-3 py-2 text-sm font-medium">
    {children}
  </a>
);

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white glow-text">GX402</span>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#problem">Problem & Solution</NavLink>
              <NavLink href="#architecture">Architecture</NavLink>
              <NavLink href="#platforms">Platforms</NavLink>
              <NavLink href="#roadmap">Roadmap</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#start">Docs</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};