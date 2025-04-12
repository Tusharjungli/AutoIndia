import { Suspense } from 'react';
import Navbar from '@/components/Navbar'; // Add this import
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';

async function getProducts(query: string) {
  const res = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  const products = await getProducts(query);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}