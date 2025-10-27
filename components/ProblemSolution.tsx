import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-20">
       <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">Bridging Worlds</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">From fragmented and expensive to unified and efficient.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Problem */}
        <div className="p-8 section-bg rounded-xl border border-gray-800">
          <h3 className="text-2xl font-bold text-gray-300 mb-6">The Old Way: A Broken System</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Friction in Monetization</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start"><XCircle className="h-5 w-5 text-red-500/70 mr-3 mt-1 flex-shrink-0" /><span>Traditional in-app purchases incur 15-30% platform fees.</span></li>
                <li className="flex items-start"><XCircle className="h-5 w-5 text-red-500/70 mr-3 mt-1 flex-shrink-0" /><span>High gas fees make true micropayments unviable.</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Web3 Gaming Barriers</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start"><XCircle className="h-5 w-5 text-red-500/70 mr-3 mt-1 flex-shrink-0" /><span>Complex wallet setup deters mainstream players.</span></li>
                <li className="flex items-start"><XCircle className="h-5 w-5 text-red-500/70 mr-3 mt-1 flex-shrink-0" /><span>Poor developer experience integrating crypto payments.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="p-8 bg-blue-900/10 rounded-xl border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">The GX402 Way: A New Paradigm</h3>
          <div className="space-y-4">
            <p className="text-blue-200/80">GX402 addresses these pain points directly:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400/80 mr-3 mt-1 flex-shrink-0" /><span><strong>Reduce fees to &lt;1%</strong> through the x402 protocol (gas costs only).</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400/80 mr-3 mt-1 flex-shrink-0" /><span><strong>Enable true micropayments</strong> ($0.001 - $0.10) for any in-game action.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400/80 mr-3 mt-1 flex-shrink-0" /><span><strong>Abstract complexity</strong> with a simple, one-line SDK integration.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400/80 mr-3 mt-1 flex-shrink-0" /><span><strong>Provide instant settlement</strong> in seconds on Layer 2 networks like Base.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};