import React from 'react';
import Link from 'next/link';
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}