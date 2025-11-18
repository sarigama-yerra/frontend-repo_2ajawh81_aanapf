import React from 'react';

const QA = ({ q, a }) => (
  <div className="p-6 rounded-xl border border-slate-200 bg-white">
    <h5 className="font-semibold text-slate-900">{q}</h5>
    <p className="mt-2 text-slate-700 text-sm leading-relaxed">{a}</p>
  </div>
);

export default function FAQ() {
  const items = [
    {
      q: 'What happens if I default on the loan?',
      a: 'If the loan is not repaid by the due date, the escrow smart contract will automatically transfer ownership of your NFT to the lender. This is final. The lender will then own the rights to the royalty percentage of that track.'
    },
    {
      q: 'How does MuDING ensure royalty revenue is actually distributed?',
      a: 'Through a binding legal agreement at the start, 100% of the revenue from the distributor is redirected to us. We then use smart contracts to split it automatically. The artist never holds 100% of the revenue upfront, eliminating the risk of fraud.'
    },
    {
      q: 'Do I have to tokenize 100% of my song?',
      a: 'No. You have full flexibility. You can decide to tokenize only 10%, 25%, or any other percentage of your song\'s revenue, depending on your funding needs.'
    },
    {
      q: 'Is this safe?',
      a: 'Our security is multi-layered. We use real-world legal agreements to secure revenue streams, and professionally audited smart contracts on the blockchain to automate lending and distribution, removing human error or manipulation.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Frequently Asked Questions</h3>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <QA key={idx} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
