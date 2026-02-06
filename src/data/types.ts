import React from 'react';

export interface Category {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Article {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  readTimeMinutes: number;
  lastUpdated: string;
  imageUrl: string;
  content: React.ReactNode;
}