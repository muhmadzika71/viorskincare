import React from 'react';

export const Icons = {
  tag: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20.5 12.5 12.5 20.5a1.5 1.5 0 0 1-2.1 0L3.5 13.6V3.5h10.1l6.9 6.9a1.5 1.5 0 0 1 0 2.1Z"/>
      <circle cx="8.5" cy="8.5" r="1.2"/>
    </svg>
  ),
  shield: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 4 6v6c0 4.5 3.3 8.3 8 9 4.7-.7 8-4.5 8-9V6l-8-3Z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  sparkle: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>
    </svg>
  ),
  leaf: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 4c-9 0-15 4-15 12 0 2 1 4 3 4 8 0 12-6 12-16Z"/>
      <path d="M5 20c4-6 8-10 14-14"/>
    </svg>
  ),
  arrow: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  plus: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  star: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.5 14.6 9 21.5 9.6l-5.2 4.5 1.6 6.8L12 17.3 6.1 20.9l1.6-6.8L2.5 9.6 9.4 9 12 2.5Z"/>
    </svg>
  ),
  play: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M7 4v16l13-8L7 4Z"/></svg>
  ),
  pause: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
  ),
  cart: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6"/>
      <circle cx="10" cy="20" r="1.2"/>
      <circle cx="17" cy="20" r="1.2"/>
    </svg>
  ),
  search: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
      <circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/>
    </svg>
  ),
  user: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
      <circle cx="12" cy="8" r="3.5"/><path d="M4.5 20c1.5-3.5 4.5-5 7.5-5s6 1.5 7.5 5"/>
    </svg>
  ),
};
