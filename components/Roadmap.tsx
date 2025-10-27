import React from 'react';
import { Check, Circle } from 'lucide-react';

interface RoadmapItemProps {
  title: string;
  tasks: { name: string; done: boolean }[];
  isLast?: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, tasks, isLast }) => (
  <div className="relative pl-10">
    <div className="absolute left-[3px] top-0 flex flex-col items-center h-full">
      <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#050505] z-10"></div>
      {!isLast && <div className="w-0.5 grow bg-gray-800"></div>}
    </div>
    <div className="pb-12">
      <h3 className="text-xl font-bold text-white mb-2 -translate-y-1">{title}</h3>
      <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg space-y-2">
        {tasks.map((task, i) => (
          <div key={i} className={`flex items-center font-mono text-sm ${task.done ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
            {task.done ? <Check className="w-4 h-4 mr-3 text-green-500" /> : <Circle className="w-4 h-4 mr-3 text-gray-600" />}
            <span>{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Roadmap: React.FC = () => {
  const roadmapData = [
    {
      title: "Q4 2025: Foundation",
      tasks: [
        { name: "Protocol Research & Architecture", done: true },
        { name: "Core Facilitator Backend (Node.js)", done: true },
        { name: "Unity SDK v0.1", done: false },
        { name: "Developer Documentation", done: false },
        { name: "Testnet Deployment", done: false },
      ],
    },
    {
      title: "Q1 2026: Public Launch",
      tasks: [
        { name: "Unity SDK v1.0 (Asset Store)", done: false },
        { name: "Web SDK v1.0 (NPM)", done: false },
        { name: "GX402 Dashboard", done: false },
        { name: "Mainnet Launch (Base)", done: false },
      ],
    },
    {
      title: "Q2 2026: Ecosystem Expansion",
      tasks: [
        { name: "Telegram Mini App SDK", done: false },
        { name: "Smart Wallet Integration", done: false },
        { name: "Fiat Onramp Partner", done: false },
        { name: "Genre Template Library", done: false },
      ],
    },
    {
      title: "Q3 2026: Scale & Features",
      tasks: [
        { name: "Native Mobile SDKs", done: false },
        { name: "Subscription Payments", done: false },
        { name: "Dynamic Pricing Engine", done: false },
        { name: "Webhook Management", done: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">Technical Roadmap</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Our journey to build the future of gaming payments.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        {roadmapData.map((item, index) => (
          <RoadmapItem key={index} {...item} isLast={index === roadmapData.length - 1} />
        ))}
      </div>
    </section>
  );
};