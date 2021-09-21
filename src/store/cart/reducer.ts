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
    case CartAction.ADD_CART: {
      let _indexProduct: number = prevState.products
        ? prevState.products?.findIndex((p) => p.id == action.payload.id)
        : -1;
      if (prevState.products == [] || _indexProduct == -1) {
        action.payload.quantity_in_cart = 1;
        prevState.products?.push(action.payload);
      } else {
        prevState.products &&
          _indexProduct >= 0 &&
          prevState.products[_indexProduct].quantity_in_cart + 1 <=
            prevState.products[_indexProduct].stock_item?.max_sale_qty &&
          ++prevState.products[_indexProduct].quantity_in_cart;
      }
      return {
        ...prevState
      };
    }
    case CartAction.REMOVE_CART: {
      let _indexProduct: number = prevState.products
        ? prevState.products?.findIndex((p) => p.id == action.payload.id)
        : -1;
      if (prevState.products != [] || _indexProduct != -1) {
        prevState.products &&
          prevState.products[_indexProduct].quantity_in_cart - 1 <=
            prevState.products[_indexProduct].stock_item?.min_sale_qty &&
          --prevState.products[_indexProduct].quantity_in_cart;
      }
      return {
        ...prevState
      };
    }
    case CartAction.DELETE_CART: {
      let _indexProduct: number = prevState.products
        ? prevState.products?.findIndex((p) => p.id == action.payload.id)
        : -1;
      if (prevState.products != [] || _indexProduct != -1) {
        prevState.products?.splice(_indexProduct, 1);
      }
      return {
        ...prevState
      };
    }
    case CartAction.CLEAR_CART:
      prevState.products = [];
      return { ...prevState };
    default:
      return prevState;
  }
};
