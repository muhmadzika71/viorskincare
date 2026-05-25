"use client";
import React, { useState } from "react";
import { Nav } from "../../components/layout/Nav";
import { Footer } from "../../components/layout/Footer";
import { ProductCard } from "../../components/ui/ProductCard";

type QuizGoal = "acne" | "anti-aging" | "brightening" | "hydration" | null;

export default function QuizPage() {
  const [selectedGoal, setSelectedGoal] = useState<QuizGoal>(null);

  const goals = [
    {
      id: "acne",
      title: "Acne Care",
      desc: "Clear and calm your skin."
    },
    {
      id: "anti-aging",
      title: "Anti-Aging",
      desc: "Reduce fine lines and wrinkles."
    },
    {
      id: "brightening",
      title: "Brightening",
      desc: "Boost radiance and even tone."
    },
    {
      id: "hydration",
      title: "Hydration",
      desc: "Deep moisture for all day glow."
    }
  ];

  // Logic to recommend products based on goal
  const getRecommendations = () => {
    switch(selectedGoal) {
      case "acne":
        return [
          {
            id: "2",
            name: "HYALURONIC MICELLAR H2O Ultra",
            category: "Hydrates & refines",
            price: "$48.00",
            imageSrc: "/vior_micellar_water.png",
          },
          {
            id: "5",
            name: "BALANCING TONER",
            category: "Gentle & Hydrating",
            price: "$28.00",
            imageSrc: "/vior_toner.png",
          }
        ];
      case "anti-aging":
        return [
          {
            id: "3",
            name: "MOISTURIZING CREAM 24H",
            category: "Barrier Recovery",
            price: "$32.00",
            imageSrc: "/vior_moisturizer.png",
          },
          {
            id: "4",
            name: "DERMASHIELD LX SUNSCREEN",
            category: "SPF 60+ UVA/UVB Protection",
            price: "$38.00",
            imageSrc: "/vior_sunscreen.png",
          }
        ];
      case "brightening":
        return [
          {
            id: "1",
            name: "CICA CREAM PRO B5",
            category: "Multi-Correction | Triple Skin Repair",
            price: "$42.00",
            imageSrc: "/vior_cica_cream.png",
          },
          {
            id: "5",
            name: "BALANCING TONER",
            category: "Gentle & Hydrating",
            price: "$28.00",
            imageSrc: "/vior_toner.png",
          }
        ];
      case "hydration":
        return [
          {
            id: "1",
            name: "CICA CREAM PRO B5",
            category: "Multi-Correction | Triple Skin Repair",
            price: "$42.00",
            imageSrc: "/vior_cica_cream.png",
          },
          {
            id: "3",
            name: "MOISTURIZING CREAM 24H",
            category: "Barrier Recovery",
            price: "$32.00",
            imageSrc: "/vior_moisturizer.png",
          }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="relative bg-[var(--bg)] min-h-screen">
      <Nav />
      <main className="pt-40 pb-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest text-ink-soft uppercase mb-4">
            / SKINCARE QUIZ
          </div>
          <h1 className="font-display text-5xl font-bold text-ink mb-6">Find Your Perfect Routine</h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            Select your primary skin goal below and we'll recommend the ideal VioR products tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {goals.map((goal) => (
            <div 
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id as QuizGoal)}
              className={`p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                selectedGoal === goal.id 
                  ? "border-coral bg-white shadow-md transform scale-[1.02]" 
                  : "border-border bg-white/50 hover:bg-white hover:border-ink/20"
              }`}
            >
              <h3 className="font-bold text-xl text-ink mb-2">{goal.title}</h3>
              <p className="text-ink-soft">{goal.desc}</p>
            </div>
          ))}
        </div>

        {selectedGoal && (
          <div className="bg-lavender/30 rounded-3xl p-12 border border-border mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-display text-3xl font-bold text-ink mb-2 text-center">Your Recommended Routine</h2>
            <p className="text-center text-ink-soft mb-12">Based on your selection, here are the best products for your skin.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {getRecommendations().map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
