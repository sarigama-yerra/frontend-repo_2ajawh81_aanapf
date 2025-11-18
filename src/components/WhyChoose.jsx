import React from 'react';

const Pill = ({ children }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{children}</span>
);

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <header className="max-w-3xl">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">The MuDING Advantage</h3>
          <p className="mt-4 text-slate-700 text-lg">We are designed to benefit every stakeholder in the music ecosystem.</p>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-xl">For Musicians & Rights Holders (Borrowers)</h4>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              <li>Liquidity Without Selling: Access cash without selling your master rights forever.</li>
              <li>Retain Control: Keep full creative control; we only facilitate the loan.</li>
              <li>Global Access: Secure funding from a global network of lenders.</li>
              <li>Fast & Transparent: Smart contract-based processes beat traditional systems.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-xl">For Lenders</h4>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              <li>New Asset Class: Access music royalties uncorrelated with traditional markets.</li>
              <li>Verified Collateral: Every loan is backed by strict due diligence.</li>
              <li>Secure Passive Income: Earn interest; in default, receive the revenue-generating NFT.</li>
              <li>Support Creators: Participate directly in the success of musicians.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200">
            <h5 className="font-semibold text-slate-900">P2P Lending Marketplace</h5>
            <p className="mt-2 text-slate-700 text-sm">List NFTs, view loan offers, and manage portfolios with ease.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <h5 className="font-semibold text-slate-900">Asset Verification System (KYA)</h5>
            <p className="mt-2 text-slate-700 text-sm">Every asset is backed by legitimate, valuable real-world data.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <h5 className="font-semibold text-slate-900">Automated Royalty Bridge</h5>
            <p className="mt-2 text-slate-700 text-sm">Converts fiat to stablecoins and distributes on-chain.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <h5 className="font-semibold text-slate-900">Escrow Smart Contract</h5>
            <p className="mt-2 text-slate-700 text-sm">Audited contracts ensure fair and automated releases.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <h5 className="font-semibold text-slate-900">Asset Analytics Dashboard</h5>
            <p className="mt-2 text-slate-700 text-sm">Transparency on historical revenue and streaming performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
