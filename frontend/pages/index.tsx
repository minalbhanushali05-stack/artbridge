import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="ArtBridge - Authentic Indian Art Marketplace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Discover Authentic Indian Art</h1>
          <p className="text-xl text-gray-600 mb-8">
            Direct from artisans. Fair prices. World-class delivery. Guaranteed authenticity.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/products" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
              Explore Art
            </Link>
            <Link href="/onboard" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50">
              Sell Your Art
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Listings</h3>
            <p className="text-gray-600">Artists upload photos. AI generates descriptions, pricing, and stories.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Multi-currency checkout. International shipping. Insured delivery.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Verified Authentic</h3>
            <p className="text-gray-600">Every artwork verified. QR codes link to artist profiles and stories.</p>
          </div>
        </div>

        {/* CTA Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">For Collectors</h2>
            <ul className="space-y-2 mb-6">
              <li>✓ Browse 100+ authentic artworks</li>
              <li>✓ Read artist stories and cultural context</li>
              <li>✓ Insured global shipping</li>
              <li>✓ Money-back guarantee</li>
            </ul>
            <Link href="/products" className="inline-block bg-white text-indigo-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">
              Start Shopping
            </Link>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">For Artisans</h2>
            <ul className="space-y-2 mb-6">
              <li>✓ WhatsApp-based registration</li>
              <li>✓ AI generates listings from photos</li>
              <li>✓ Fair pricing & direct payments</li>
              <li>✓ No middlemen, no commissions</li>
            </ul>
            <Link href="/onboard" className="inline-block bg-white text-orange-500 px-6 py-2 rounded font-semibold hover:bg-gray-100">
              Sell Your Art
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
