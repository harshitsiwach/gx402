import React from 'react';
import { CheckCircle } from 'lucide-react';

const PlatformCard: React.FC<{ title: string; description: string; features: string[] }> = ({ title, description, features }) => (
  <div className="p-6 section-bg rounded-xl card-glow-border flex flex-col h-full">
    <h3 className="text-2xl font-bold text-blue-300 mb-2">{title}</h3>
    <p className="text-gray-400 mb-6 flex-grow">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-sm font-mono text-gray-300">
          <CheckCircle className="w-4 h-4 mr-2 text-green-500/80 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const Platforms: React.FC = () => {
  return (
    <section id="platforms" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">One SDK, All Platforms</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Ready-to-deploy integrations for every major gaming engine and platform.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PlatformCard
          title="Unity SDK (C#)"
          description="Native integration with Unity's MonoBehaviour lifecycle for desktop, mobile, and WebGL."
          features={["WebGL & Desktop Support", "Visual Inspector Config", "Built-in Wallet Connection UI", "Asset Store Distribution"]}
        />
        <PlatformCard
          title="Unreal Engine SDK (C++)"
          description="Compatible with UE 5.3-5.5, leveraging a Rust-based core for maximum performance."
          features={["Blueprint Async Tasks", "Cross-platform Support", "Marketplace Distribution", "High-performance Core"]}
        />
        <PlatformCard
          title="Web3 SDK (TypeScript)"
          description="A framework-agnostic library for web games, Telegram Mini Apps, and Farcaster Frames."
          features={["React, Vue, Svelte", "Telegram Mini App Optimized", "Coinbase Smart Wallet", "NPM Package Distribution"]}
        />
        <PlatformCard
          title="Mobile SDKs (Swift/Kotlin)"
          description="Native SDKs for iOS and Android, ensuring deep integration and compliance."
          features={["Native SwiftUI & Jetpack Compose", "React Native/Expo Compatible", "Deep Wallet Linking", "App Store Compliant"]}
        />
      </div>
    </section>
  );
};