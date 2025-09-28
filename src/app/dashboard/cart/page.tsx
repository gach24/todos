import { products } from '@/products/data';
import { Product } from '@/products/types';
import { ItemCard } from '@/shopping-card/components';
import { cookies } from 'next/headers';
import { WidgetItem } from '../../../components/widgetitem/WidgetItem';

export const metadata = {
  title: 'Productos en el carrito',
  description: 'Productos en el carrito',
};

export default async function CartPage() {
  const cart = JSON.parse((await cookies()).get('cart')?.value ?? '{}');

  const productsInCart = Object.entries(cart).reduce(
    (result, [key, value]) => {
      const product = products.find(p => p.id === key);

      return product
        ? [...result, { product, quantity: Number(value) }]
        : result;
    },
    [] as {
      product: Product;
      quantity: number;
    }[]
  );

  const total = productsInCart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(p => (
            <ItemCard key={p.product.id} {...p} />
          ))}
        </div>

        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Total a pagar">
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">
                ${(total * 1.15).toFixed(2)}
              </h3>
            </div>
            <span className="font-bold text-center text-gray-500">
              Impuestos 15%: ${(total * 0.15).toFixed(2)}
            </span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
