import React from 'react';

export default function Comparison() {
  const rows = [
    { feature: 'Asset Ownership', muding: "Artist Retains", labels: 'Often Taken Over', banks: 'Irrelevant' },
    { feature: 'Creative Control', muding: '100% Artist\'s', labels: 'Often Lost / Restricted', banks: '100% Artist\'s' },
    { feature: 'Speed of Funds', muding: 'Fast (Days/Hours)', labels: 'Slow (Months)', banks: 'Very Slow (Months)' },
    { feature: 'Process', muding: 'Transparent & Automated', labels: 'Opaque & Complex', banks: 'Bureaucratic' },
    { feature: 'Access', muding: 'Global, 24/7', labels: 'Very Limited', banks: 'Limited Locally' },
  ];

  return (
    <section className="py-20 bg-slate-50" id="comparison">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900">MuDING vs. Traditional</h3>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-slate-600 text-sm">
                <th className="py-2 pr-4">Feature</th>
                <th className="py-2 pr-4">MuDING</th>
                <th className="py-2 pr-4">Record Labels</th>
                <th className="py-2 pr-4">Banks</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition">
                  <td className="py-3 px-4 rounded-l-lg font-medium text-slate-900">{r.feature}</td>
                  <td className="py-3 px-4 text-slate-700">{r.muding}</td>
                  <td className="py-3 px-4 text-slate-700">{r.labels}</td>
                  <td className="py-3 px-4 rounded-r-lg text-slate-700">{r.banks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
