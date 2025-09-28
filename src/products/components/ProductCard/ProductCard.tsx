'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IoAddCircleOutline, IoTrashOutline } from 'react-icons/io5';

import { Product } from '@/products/types';
import {
  addProductToCart,
  removeProductFromCart,
} from '@/shopping-card/actions/';
import style from './ProductCard.module.css';

export const ProductCard = ({ id, name, price, rating, image }: Product) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow rounded-lg max-w-sm border-gray-100">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={image}
          alt="product image"
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className={style.h3}>{name}</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {
            /* Stars */
            Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <Star key={index} />
            ))
          }

          {/* Rating Number */}
          <span className={style.ratingNumber}>{rating.toFixed(2)}</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{`$${price.toFixed(2)}`}</span>

          <div className="flex">
            <button
              onClick={() => {
                addProductToCart(id);
                router.refresh();
              }}
              className={style.addbutton}
            >
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={() => {
                removeProductFromCart(id);
                router.refresh();
              }}
              className={style.delButton}
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Star() {
  return (
    <svg
      className="w-5 h-5 text-yellow-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
}
