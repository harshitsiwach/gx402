import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const CodeSnippet: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <div className="bg-[#0c0c0c] rounded-lg overflow-hidden border border-gray-800 h-full">
    <div className="px-4 py-2 bg-gray-800/50 text-gray-400 text-xs font-mono flex items-center">
        <Terminal className="w-4 h-4 mr-2" /> {language}
    </div>
    <pre className="p-4 text-sm overflow-x-auto">
      <code className={`language-${language.toLowerCase()}`}>{code}</code>
    </pre>
  </div>
);

export const GettingStarted: React.FC = () => {
  return (
    <section id="start" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white glow-text">Start Building in Minutes</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Integrate powerful, low-cost payments with just a few lines of code.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <CodeSnippet 
            language="JavaScript (Web/Telegram)"
            code={`import { GX402Client } from '@gx402/sdk';

const gx402 = new GX402Client({
  receiverAddress: '0xYourAddress',
  network: 'base',
});

async function buyItem() {
  const tx = await gx402.purchase({
    itemId: 'speed_boost',
    price: '0.25', // in USDC
  });
  console.log('Purchase successful!', tx.hash);
}`}
          />
          <CodeSnippet 
            language="C# (Unity)"
            code={`using GX402;

public class GameStore : MonoBehaviour {
  private GX402Client client;

  void Start() {
    client = new GX402Client(
      "0xYourWalletAddress",
      Network.Base
    );
  }

  public async void BuyItem(string itemId) {
    var request = new PurchaseRequest { 
        ItemId = itemId, Price = 0.50m 
    };
    var result = await client.Purchase(request);
    // Grant item to player
  }
}`}
          />
      </div>

      <div className="text-center">
        <a
          href="https://gx402.io/beta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-black bg-white hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg shadow-white/10"
        >
          Join the Beta
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
        <p className="text-gray-500 mt-4 text-sm">
          Want to dive deeper? <a href="https://docs.gx402.io" className="text-blue-400 hover:underline">Read the full documentation</a>.
        </p>
      </div>
    </section>
  );
};