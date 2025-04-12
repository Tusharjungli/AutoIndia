import Link from 'next/link';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AutoSpares
        </Link>
        <div className="flex space-x-6 items-center">
          <Link href="/products" className="flex items-center">
            Products
          </Link>
          <Link href="/cart" className="flex items-center">
            <ShoppingCartIcon className="w-5 h-5 mr-1" />
            Cart
          </Link>
          <Link href="/login" className="flex items-center">
            <UserIcon className="w-5 h-5 mr-1" />
            Login
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}