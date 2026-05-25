import React from "react";
import Link from "next/link";
import { ProductCard } from "../ui/ProductCard";

export function FeaturedCollection() {
  const products = [
    {
      id: "1",
      name: "HYALURONIC MICELLAR H2O Ultra",
      category: "Hydrates & refines",
      price: "$48.00",
      imageSrc: "/vior_micellar_water.png",
      rating: "4.9",
      reviews: "1.2k"
    },
    {
      id: "2",
      name: "BALANCING TONER",
      category: "Gentle & Hydrating",
      price: "$28.00",
      imageSrc: "/vior_toner.png",
      rating: "4.9",
      reviews: "982"
    },
    {
      id: "3",
      name: "CICA CREAM PRO B5",
      category: "Deep Hydration",
      price: "$42.00",
      imageSrc: "/vior_cica_cream.png",
      rating: "4.9",
      reviews: "1.1k"
    },
    {
      id: "4",
      name: "MOISTURIZING CREAM 24H",
      category: "Barrier Recovery",
      price: "$32.00",
      imageSrc: "/vior_moisturizer.png",
      rating: "4.8",
      reviews: "850"
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-border mt-12">
      <div className="flex justify-between items-end mb-12">
        <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase">
          / FEATURED COLLECTION
        </div>
        <Link href="/shop" className="text-sm font-bold text-ink hover:text-coral transition-colors flex items-center gap-1">
          View All Products
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
