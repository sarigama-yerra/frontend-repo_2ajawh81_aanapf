import React from 'react';

const Step = ({ title, children }) => (
  <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
    <h4 className="font-semibold text-slate-900 text-lg">{title}</h4>
    <div className="mt-3 text-slate-700 text-sm space-y-2">{children}</div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50" id="process">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <header className="max-w-3xl">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Our Process: Verified in the Real World, Automated on Blockchain</h3>
          <p className="mt-4 text-slate-700 text-lg">
            Security and trust are our foundations. We combine rigorous real-world due diligence with tamper-proof smart contract automation.
          </p>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Step title="Verification & Tokenization (Off-Chain)">
            <p><strong>Submission:</strong> Artists submit assets (master rights) along with proof of ownership and historical revenue reports (minimum 2 years).</p>
            <p><strong>Due Diligence:</strong> Our legal and analyst teams verify every document to ensure legitimacy and revenue performance.</p>
            <p><strong>Legal Agreement:</strong> The artist signs a binding agreement, including a "Royalty Assignment Agreement," instructing distributors to redirect 100% of the track's revenue to a MuDING account.</p>
            <p><strong>NFT Minting:</strong> Once approved, MuDING mints a unique NFT representing a specific percentage of those income rights (e.g., 25% of song "XYZ").</p>
          </Step>

          <Step title="P2P Lending Process (On-Chain)">
            <p><strong>Asset Listing:</strong> Artists list their NFTs on the MuDING marketplace to auction their loan request.</p>
            <p><strong>Bidding:</strong> Lenders view the asset's revenue data and place loan offers (amount, interest rate, duration).</p>
            <p><strong>Loan Execution:</strong> The artist accepts the best offer. Funds are sent instantly, and the NFT is locked in a secure escrow smart contract.</p>
          </Step>

          <Step title="Distribution & Settlement (Automated)">
            <p><strong>Royalty Bridge:</strong> Royalty income arrives in the MuDING account, is converted into stablecoins, and deposited into the distribution smart contract.</p>
            <p><strong>Automated Split:</strong> The contract instantly splits funds to the NFT holder and the artist per the set percentages.</p>
            <p><strong>Settlement:</strong> Upon repayment, the NFT is returned to the artist. If in default, it transfers to the lender who then owns the income rights.</p>
          </Step>
        </div>
      </div>
    </section>
  );
}
