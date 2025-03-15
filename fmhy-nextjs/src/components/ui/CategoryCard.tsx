'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: ReactNode;
}

export default function CategoryCard({ id, title, description, color, icon }: CategoryCardProps) {
  return (
    <Link href={`/${id}`}>
      <div 
        className="rounded-lg p-6 h-full transition-all duration-200 hover:shadow-lg hover:scale-105"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col h-full">
          <div className="bg-white/30 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-700 flex-grow">{description}</p>
        </div>
      </div>
    </Link>
  );
}
