import { CartState, Product } from '@models/Cart';

export enum CartAction {
  SET_CART = 'CART/SET_CART',
  CLEAR_CART = 'CART/CLEAR_CART',
  ADD_CART = 'CART/ADD_CART'
}

export interface SetCartAction {
  type: typeof CartAction.SET_CART;
  payload: Partial<CartState>;
}

export interface AddToCartAction {
  type: typeof CartAction.ADD_CART;
  payload: Partial<Product>;
}

export interface ClearCartAction {
  type: typeof CartAction.CLEAR_CART;
}

export type CartActionTypes = SetCartAction | ClearCartAction | AddToCartAction;
