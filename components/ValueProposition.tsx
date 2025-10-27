import React from 'react';
import { Layers, Zap, Cpu, Globe, Puzzle, ShieldCheck } from 'lucide-react';

const ValueItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-6 section-bg rounded-xl card-glow-border transition-transform transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-blue-900/50 rounded-lg mr-4 text-blue-300">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export const ValueProposition: React.FC = () => {
  const values = [
    { icon: <Layers className="h-6 w-6" />, title: "One SDK, All Platforms", description: "Single integration for Unity, Unreal, Web, Mobile, and Mini Apps." },
    { icon: <Zap className="h-6 w-6" />, title: "Built-in Facilitator", description: "Managed infrastructure for seamless, reliable payment processing." },
    { icon: <Globe className="h-6 w-6" />, title: "Multi-Chain Support", description: "Connect to EVM and non-EVM chains with a unified API." },
    { icon: <Cpu className="h-6 w-6" />, title: "AI Agent Ready", description: "Natively support autonomous, machine-to-machine micropayments." },
    { icon: <Puzzle className="h-6 w-6" />, title: "Genre-Specific Templates", description: "Pre-built payment logic for Battle Royales, RPGs, and more." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Zero Blockchain Knowledge", description: "Abstracting all web3 complexity for developers." },
  ];

  return (
    <section id="value-prop" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">Core Value Proposition</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">The power of GX402 in a nutshell. We handle the complexity, so you can focus on building great games.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <ValueItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};