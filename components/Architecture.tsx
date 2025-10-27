import React from 'react';
import { ArrowDown } from 'lucide-react';

const ArchLayer: React.FC<{ title: string; items: string[]; isMultiLine?: boolean }> = ({ title, items, isMultiLine = false }) => (
  <div className="w-full max-w-2xl text-center">
    <h3 className="font-semibold text-blue-400 mb-4 tracking-wider uppercase text-sm">{title}</h3>
    <div className={`flex justify-center gap-2 ${isMultiLine ? 'flex-wrap' : 'flex-nowrap overflow-x-auto p-2'}`}>
      {items.map((item, i) => (
        <span key={i} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-md text-xs font-mono whitespace-nowrap">{item}</span>
      ))}
    </div>
  </div>
);

const ArchService: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="w-full max-w-2xl p-6 border border-gray-700 rounded-lg section-bg text-center">
        <h3 className="font-semibold text-blue-400 mb-4 tracking-wider uppercase text-sm">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {items.map((item, i) => (
                <p key={i} className="text-gray-300 text-sm font-mono text-left sm:text-center">
                    {item}
                </p>
            ))}
        </div>
    </div>
);


export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">System Architecture</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">A high-level overview of the GX402 technology stack, designed for scalability and simplicity.</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <ArchLayer title="GX402 SDK Layer" items={['Unity', 'Unreal', 'Web (JS)', 'iOS/Android', 'Mini Apps']} isMultiLine />
        
        <ArrowDown className="w-8 h-8 text-gray-600 my-4" />
        
        <ArchService title="GX402 Facilitator Service" items={['Payment Processing', 'Signature Verification', 'Multi-chain Routing', 'Status Webhooks', 'Analytics Dashboard']} />
        
        <ArrowDown className="w-8 h-8 text-gray-600 my-4" />
        
        <ArchLayer title="Blockchain Settlement Layer" items={['Base (L2)', 'Ethereum', 'Polygon', 'Solana', 'Arbitrum']} isMultiLine />
      </div>
    </section>
  );
};