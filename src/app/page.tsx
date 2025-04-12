import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';

const mockProducts = [
  { id: 1, name: 'Brake Pads', price: 1500, image: '/brake-pads.jpg' },
  { id: 2, name: 'Oil Filter', price: 500, image: '/oil-filter.jpg' },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar /> {/* Add this line */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}