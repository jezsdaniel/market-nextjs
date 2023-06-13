import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface BreadcrumsProps {
  pages: {
    name: string;
    href: string;
  }[];
  current?: string;
  className?: string;
}

export const Breadcrums: React.FC<BreadcrumsProps> = ({ pages, current, className }) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center w-full pt-4 pb-2 px-4 border-y border-neutral-150',
        className,
      )}
    >
      <nav className="flex flex-wrap items-center mr-3 w-full max-w-7xl text-xs font-medium">
        {pages.map((page, index) => {
          return (
            <div key={index} className="flex items-center mr-3 mb-2">
              <Link href={page.href} className="text-amber hover:underline mr-3">
                {page.name}
              </Link>
              <span>/</span>
            </div>
          );
        })}
        {current && <span className="mb-2">{current}</span>}
      </nav>
    </div>
  );
};
