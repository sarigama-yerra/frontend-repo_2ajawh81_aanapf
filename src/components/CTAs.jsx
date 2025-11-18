import React from 'react';

export default function CTAs() {
  return (
    <section className="py-20 bg-white" id="ctas">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <h4 className="text-2xl font-bold text-slate-900">Your work has value. Don\'t let it stay locked.</h4>
          <p className="mt-3 text-slate-700">Start your asset verification process today and get the funding you deserve.</p>
          <a href="#verification" className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 font-medium shadow hover:opacity-90 transition">
            Learn Verification Criteria
          </a>
        </div>
        <div className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <h4 className="text-2xl font-bold text-slate-900">Be part of the music finance revolution.</h4>
          <p className="mt-3 text-slate-700">Diversify your portfolio with assets backed by real revenue and support talented creators.</p>
          <a href="#marketplace" className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-slate-900 ring-1 ring-slate-900/10 px-5 py-3 font-medium hover:bg-slate-50 transition">
            View Available Assets
          </a>
        </div>
      </div>
    </section>
  );
}
