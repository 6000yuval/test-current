import React from 'react';

export const PlainText = ({ children }: { children?: React.ReactNode }) => (
  <div className="space-y-6 text-lg leading-relaxed text-slate-800 text-justify">
    {children}
  </div>
);