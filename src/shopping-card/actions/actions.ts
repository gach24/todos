'use-client';

import { getCookie, setCookie } from 'cookies-next';
import { update } from '../../todos/helpers/api-todo';

export const getProductFromCart = (): { [id: string]: number } =>
  JSON.parse((getCookie('cart') as string) ?? '{}');

export const addProductToCart = (id: string) => {
  const cart = getProductFromCart();
  cart[id] = (cart[id] || 0) + 1;
  setCookie('cart', JSON.stringify(cart));
};

export const removeProductFromCart = (id: string) => {
  const cart = getProductFromCart();
  delete cart[id];
  setCookie('cart', JSON.stringify(cart));
};

export const decrementProductFromCart = (id: string) => {
  const cart = getProductFromCart();
  if (cart[id]) {
    cart[id] = cart[id] - 1;
    if (cart[id] <= 0) {
      delete cart[id];
    }
    setCookie('cart', JSON.stringify(cart));
  }
};
