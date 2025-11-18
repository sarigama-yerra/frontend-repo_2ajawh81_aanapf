import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.05)_60%,rgba(0,0,0,0.15)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 py-20">
        <div className="md:col-span-7">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Unlock the True Value of Your Music.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-2xl">
            MuDING is a P2P lending platform that empowers you to turn your Master Recording Rights into collateral for instant funding, without selling your ownership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#verification" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm md:text-base font-semibold shadow-lg shadow-slate-900/10 hover:opacity-90 transition">
              Start Asset Verification
            </a>
            <a href="#marketplace" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 ring-1 ring-slate-900/10 px-6 py-3 text-sm md:text-base font-semibold hover:bg-slate-50 transition">
              Explore Marketplace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
