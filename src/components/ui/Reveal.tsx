"use client";

import React, { useEffect, useRef } from 'react';

export function Reveal({ 
  children, 
  delay = 0, 
  as: Tag = 'div', 
  className = '', 
  once = true, 
  ...rest 
}: any) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('in');
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove('in');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  
  const delayClass = delay ? `d${Math.min(4, delay)}` : '';
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
