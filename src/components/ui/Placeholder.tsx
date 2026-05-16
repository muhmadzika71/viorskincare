import React from 'react';

export function Placeholder({ tone = 'blush', label, sub, className = '', children }: any) {
  const cls = ({
    blush: 'ph-blush', 
    lav: 'ph-lav', 
    sage: 'ph-sage', 
    cream: 'ph-cream', 
    ink: 'ph-ink', 
    plum: 'ph-plum', 
    coral: 'ph-coral',
  } as any)[tone] || 'ph-cream';
  
  const labelColor = (tone === 'ink' || tone === 'plum' || tone === 'coral') 
    ? 'text-white/70' 
    : 'text-[color:var(--ink-soft)]';
    
  return (
    <div className={`relative overflow-hidden ph-stripes ${cls} ${className}`}>
      <div className="absolute inset-0 flex items-end p-4">
        <div className={`font-mono text-[10px] tracking-[0.16em] uppercase ${labelColor}`}>
          {label}{sub && <span className="opacity-60"> · {sub}</span>}
        </div>
      </div>
      {children}
    </div>
  );
}
