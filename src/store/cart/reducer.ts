import { CartState, Product } from '@models/Cart';
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
      let _products: Product[] = prevState.products;
      let _indexProduct: number = _products
        ? _products?.findIndex((p) => p.id == action.payload.id)
        : -1;
      if (_products == [] || _indexProduct == -1) {
        action.payload.quantity_in_cart = 1;
        _products?.push(action.payload);
      } else {
        _indexProduct >= 0 &&
          _products[_indexProduct].quantity_in_cart + 1 <=
            _products[_indexProduct].stock_item?.max_sale_qty &&
          ++_products[_indexProduct].quantity_in_cart;
      }
      prevState.products = [..._products];
      return {
        ...prevState
      };
    }
    case CartAction.REMOVE_CART: {
      let _products: Product[] = prevState.products;
      let _indexProduct: number = _products
        ? _products?.findIndex((p) => p.id == action.payload.id)
        : -1;
      if (_products != [] || _indexProduct != -1) {
        _products[_indexProduct].quantity_in_cart - 1 >=
          _products[_indexProduct].stock_item?.min_sale_qty &&
          --_products[_indexProduct].quantity_in_cart;
      }
      prevState.products = [..._products];
      return {
        ...prevState
      };
    }
    case CartAction.DELETE_CART: {
      let _products: Product[] = prevState.products;
      let _indexProduct: number = _products
        ? _products?.findIndex((p) => p.id == action.payload.id)
        : -1;
      if (_products != [] || _indexProduct != -1) {
        _products?.splice(_indexProduct, 1);
      }
      prevState.products = [..._products];
      return {
        ...prevState
      };
    }
    case CartAction.CLEAR_CART:
      prevState.products = [...[]];
      return { ...prevState };
    default:
      return prevState;
  }
};
