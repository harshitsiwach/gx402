import React from 'react';
import { Check } from 'lucide-react';

const TierCard: React.FC<{ title: string; price: string; description: string; features: string[]; isFeatured?: boolean }> = ({ title, price, description, features, isFeatured }) => (
  <div className={`p-8 rounded-xl h-full flex flex-col ${isFeatured ? 'bg-blue-900/20 card-glow-border' : 'section-bg border border-gray-800'}`}>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 mt-2 mb-4 flex-grow">{description}</p>
    <div className="my-6">
      <span className="text-4xl font-extrabold text-white">{price}</span>
      <span className="text-gray-400 ml-2">facilitator fee</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-gray-300">
          <Check className="w-5 h-5 text-green-500/80 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full mt-auto py-3 font-semibold rounded-lg transition-colors ${isFeatured ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-700/50 hover:bg-gray-700 text-gray-200'}`}>
      Select Plan
    </button>
  </div>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">Fair & Simple Pricing</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Scale with us. Our fees decrease as your volume grows. No hidden costs, no surprises.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TierCard
          title="Free"
          price="2%"
          description="For hobbyists and new projects."
          features={["0 - $1K monthly volume", "Standard SDK Access", "Community Support"]}
        />
        <TierCard
          title="Startup"
          price="1.5%"
          description="For growing indie studios."
          features={["$1K - $10K monthly volume", "All Free Tier features"]}
        />
        <TierCard
          title="Growth"
          price="1%"
          isFeatured
          description="For established games scaling up."
          features={["$10K - $100K monthly volume", "Priority Support", "Basic Analytics"]}
        />
        <TierCard
          title="Enterprise"
          price="0.5%+"
          description="For large-scale operations."
          features={["$100K+ monthly volume", "Custom Terms", "Dedicated Support"]}
        />
      </div>
       <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-white">Need More?</h3>
        <p className="text-gray-400 mt-2">Optional SaaS plans are available for advanced analytics, support, and multi-chain features.</p>
      </div>
    </section>
  );
};