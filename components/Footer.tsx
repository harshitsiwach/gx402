import React from 'react';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-900 bg-[#050505]">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className="text-lg font-bold glow-text">GX402</span>
            <p className="text-sm text-gray-600 mt-1">The Future of In-Game Payments</p>
          </div>
          <div className="flex items-center space-x-6">
            <SocialIcon href="https://github.com/gx402">
              <Github className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/gx402dev">
              <Twitter className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="https://discord.gg/gx402">
              <MessageSquare className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} GX402. All rights reserved.</p>
          <p className="mt-1">Contact: <a href="mailto:founders@gx402.io" className="hover:text-blue-400">founders@gx402.io</a></p>
        </div>
      </div>
    </footer>
  );
};