import prisma from './prisma';

async function test() {
  try {
    const products = await prisma.product.findMany();
    console.log('Database connected:', products);
  } catch (error) {
    console.error('Database error:', error);
  }
}

test();