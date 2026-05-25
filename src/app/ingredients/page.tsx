import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";

export default function IngredientsPage() {
  const ingredients = [
    {
      name: "Hyaluronic Acid",
      benefit: "Intense Hydration",
      desc: "A powerful humectant that draws moisture into the skin, plumping fine lines and delivering a dewy glow. Found in our Micellar H2O Ultra and Cica Cream."
    },
    {
      name: "Centella Asiatica (Cica)",
      benefit: "Soothing & Repairing",
      desc: "Known as 'tiger grass', this botanical extract is famous for its healing properties, significantly reducing redness and repairing the skin barrier."
    },
    {
      name: "Niacinamide",
      benefit: "Brightening & Refining",
      desc: "Vitamin B3 works to visibly improve enlarged pores, uneven skin tone, fine lines, and dullness while strengthening the skin's surface."
    },
    {
      name: "PRO Vitamin B5 (Panthenol)",
      benefit: "Barrier Support",
      desc: "Deeply moisturizes and heals the skin by attracting and holding water. It reduces inflammation and promotes skin regeneration."
    },
    {
      name: "Ceramides",
      benefit: "Moisture Lock",
      desc: "Lipids that form a protective layer to prevent moisture loss and protect against environmental damage. Crucial for our 24H Moisturizing Cream."
    },
    {
      name: "Green Tea Extract & Turmeric Root",
      benefit: "Antioxidant Protection",
      desc: "Nature's powerful antioxidants that neutralize free radicals, reduce inflammation, and naturally brighten the complexion."
    }
  ];

  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / OUR INGREDIENTS
          </div>
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Science In Every Drop</h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            We believe in complete transparency. Our formulations combine the best of clinical science and natural botanicals to deliver visible results without irritation. All our products are Fragrance-Free, Paraben-Free, and Hypoallergenic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {ingredients.map((ing, i) => (
             <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="text-coral font-bold text-sm tracking-widest uppercase mb-2">{ing.benefit}</div>
                <h3 className="font-display text-2xl font-bold text-ink mb-4">{ing.name}</h3>
                <p className="text-ink-soft leading-relaxed">{ing.desc}</p>
             </div>
           ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
