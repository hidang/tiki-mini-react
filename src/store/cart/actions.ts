import { CartState } from '@models/Cart';
import { CartAction, CartActionTypes } from '@store/cart/types';

export const setCart = (product: Partial<CartState>): CartActionTypes => ({
  type: CartAction.SET_CART,
  payload: product
});

export const addToCart = (product: Partial<CartState>): CartActionTypes => ({
  type: CartAction.ADD_CART,
  payload: product
});

export const clearCart = (): CartActionTypes => ({
  type: CartAction.CLEAR_CART
});
