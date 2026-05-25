import React from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";
import { ProductCard } from "../../components/ui/ProductCard";

export default function ShopPage() {
  const allProducts = [
    {
      id: "1",
      name: "CICA CREAM PRO B5",
      category: "Multi-Correction | Triple Skin Repair",
      price: "$42.00",
      imageSrc: "/vior_cica_cream.png",
      rating: "4.9",
      reviews: "1.1k"
    },
    {
      id: "2",
      name: "HYALURONIC MICELLAR H2O Ultra",
      category: "Hydrates & refines",
      price: "$48.00",
      imageSrc: "/vior_micellar_water.png",
      rating: "4.9",
      reviews: "1.2k"
    },
    {
      id: "3",
      name: "MOISTURIZING CREAM 24H",
      category: "Barrier Recovery",
      price: "$32.00",
      imageSrc: "/vior_moisturizer.png",
      rating: "4.8",
      reviews: "850"
    },
    {
      id: "4",
      name: "DERMASHIELD LX SUNSCREEN",
      category: "SPF 60+ UVA/UVB Protection",
      price: "$38.00",
      imageSrc: "/vior_sunscreen.png",
      rating: "4.7",
      reviews: "640"
    },
    {
      id: "5",
      name: "BALANCING TONER",
      category: "Gentle & Hydrating",
      price: "$28.00",
      imageSrc: "/vior_toner.png",
      rating: "4.9",
      reviews: "982"
    }
  ];

  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Shop All Products</h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            Discover our complete range of science-backed skincare solutions. Click the + icon to inquire about purchasing any of our clean, effective products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
