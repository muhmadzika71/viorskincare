import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  imageSrc: string;
  rating?: string;
  reviews?: string;
}

export function ProductCard({ id, name, category, price, imageSrc, rating, reviews }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-lavender/30 mb-4 flex items-center justify-center p-6 cursor-pointer">
        <Link href={`/contact?product=${encodeURIComponent(name)}`} className="absolute inset-0 z-10" aria-label={`Inquire about ${name}`}></Link>
        <div className="relative w-full h-full">
          <Image 
            src={imageSrc}
            alt={name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Quick Add Button -> Routes to Contact */}
        <Link href={`/contact?product=${encodeURIComponent(name)}`} className="absolute bottom-4 right-4 w-10 h-10 bg-ink text-white rounded-full flex items-center justify-center opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-purple-btn shadow-lg z-20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
        </Link>
      </div>
      
      <div className="flex flex-col">
        <h3 className="font-bold text-ink uppercase text-sm tracking-wider mb-1">{name}</h3>
        <p className="text-sm text-ink-soft mb-2">{category}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-ink">{price}</span>
          {rating && (
            <div className="flex items-center text-xs text-ink-soft">
              <span className="text-coral mr-1">★</span>
              {rating} {reviews && `(${reviews})`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
