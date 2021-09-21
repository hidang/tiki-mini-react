import { combineReducers } from 'redux';
import { CartState } from '@models/Cart';
import { cartReducer } from '@store/cart/reducer';

export interface RootState {
  cart: CartState;
}

export const rootReducer = combineReducers({
  cart: cartReducer
});
