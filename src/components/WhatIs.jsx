import React from 'react';

export default function WhatIs() {
  return (
    <section className="relative py-20 bg-white" id="what-is">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">MuDING: Bridging Music and Decentralized Finance</h2>
          <p className="mt-4 text-slate-700 text-lg">
            MuDING (Music Lending) is a revolutionary peer-to-peer (P2P) lending protocol built on blockchain technology. We solve one of the biggest problems for musicians and copyright holders: illiquid assets.
          </p>
        </header>

        <div className="mt-8 grid md:grid-cols-2 gap-8 text-slate-700">
          <p>
            Your most valuable asset—your master recording rights—generates income, but it cannot easily be used to access cash. MuDING changes this.
          </p>
          <p>
            We enable you to:
          </p>
        </div>

        <ul className="mt-6 space-y-3 text-slate-700 list-disc pl-6">
          <li>Tokenize a portion of the income rights from your master recording into a unique Non-Fungible Token (NFT).</li>
          <li>Collateralize that NFT on our global marketplace.</li>
          <li>Secure loans (in stablecoins) quickly and transparently directly from a network of lenders.</li>
        </ul>

        <p className="mt-6 text-slate-700 max-w-4xl">
          Essentially, MuDING gives you financial power over your work, allowing you to fund your next project, tour, or personal needs while maintaining full control over your music.
        </p>
      </div>
    </section>
  );
}
