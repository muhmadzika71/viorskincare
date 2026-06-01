import React from "react";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Bento } from "../components/sections/Bento";
import { ProductLine } from "../components/sections/ProductLine";
import { Showcase } from "../components/sections/Showcase";
import { Testimonials } from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bento />
        <ProductLine />
        <Showcase />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
