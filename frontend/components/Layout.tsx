import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'ArtBridge - Indian Artisan Marketplace',
  description = 'Discover authentic Indian art directly from artisans',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-2xl text-indigo-600">
            🎨 ArtBridge
          </a>
          <div className="flex items-center gap-6">
            <a href="/products" className="hover:text-indigo-600">
              Shop
            </a>
            <a href="/artists" className="hover:text-indigo-600">
              Artists
            </a>
            <a href="/cart" className="hover:text-indigo-600">
              Cart
            </a>
            <a href="/onboard" className="bg-indigo-600 text-white px-4 py-2 rounded">
              Sell Art
            </a>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-gray-50">{children}</main>
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 ArtBridge. Connecting artisans with the world.</p>
        </div>
      </footer>
    </>
  );
}
