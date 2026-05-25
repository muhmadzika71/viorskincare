import React from "react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Vior has transformed my skin! It's glowing, hydrated, and so much smoother.",
      author: "Jessica R.",
      location: "New York, USA",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      id: 2,
      quote: "Finally found skincare that's gentle and effective. My face has never looked better!",
      author: "Amanda L.",
      location: "London, UK",
      avatar: "https://i.pravatar.cc/100?img=9"
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border mt-12">
      <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
        / REAL RESULTS
      </div>
      <h2 className="font-display text-4xl font-bold text-ink mb-12">
        Real People, Real Results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-border">
            <div className="text-4xl font-display text-coral mb-4">"</div>
            <p className="text-xl text-ink font-medium mb-8 leading-relaxed">
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-ink text-sm">{t.author}</h4>
                <p className="text-xs text-ink-soft">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 gap-2">
        <div className="w-2 h-2 rounded-full bg-ink"></div>
        <div className="w-2 h-2 rounded-full bg-border"></div>
        <div className="w-2 h-2 rounded-full bg-border"></div>
        <div className="w-2 h-2 rounded-full bg-border"></div>
      </div>
    </section>
  );
}
