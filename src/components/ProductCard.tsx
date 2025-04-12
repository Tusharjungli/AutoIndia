'use client';

import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: product.price }),
      });
      const order = await res.json();
      if (order.error) throw new Error(order.error);
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        handler: function (response: any) {
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert('Payment failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
    setLoading(false);
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg bg-primary-light dark:bg-primary-dark">
      <img
        src={product.image || '/placeholder.jpg'}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-accent font-bold">₹{product.price}</p>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="mt-2 bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Buy Now'}
      </button>
    </div>
  );
}