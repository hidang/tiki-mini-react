import { CartState } from '@models/Cart';
import { Reducer } from 'react';
import { CartAction, CartActionTypes } from '@store/cart/types';

const cartInitialState: CartState = {
  products: []
};

export const cartReducer: Reducer<CartState, CartActionTypes> = (
  prevState = cartInitialState,
  action
) => {
  switch (action.type) {
    case CartAction.SET_CART:
      return {
        ...prevState,
        ...action.payload
      };
    case CartAction.ADD_CART:
      prevState.products?.push(action.payload);
      return {
        ...prevState
      };
    case CartAction.CLEAR_CART:
      return {};
    default:
      return prevState;
  }
};
