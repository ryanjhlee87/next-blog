'use client';

import Link from 'next/link';
import React from 'react';

export default function Header() {
  const menu = ['home', 'about', 'posts', 'contact'];

  return (
    <nav className="flex justify-between items-center h-12">
      <h1 className="text-3xl">
        <Link href="/">{"Ryan's Blog"}</Link>
      </h1>

      <ul className="flex items-center">
        {menu.map(item => (
          <li key={item} className="px-2 hover:cursor-pointer">
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
