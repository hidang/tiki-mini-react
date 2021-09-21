import { RootState } from '@store/index';

export const selectCart = (state: RootState) => state.cart;

export const selectProducts = (state: RootState) => state.cart.products;
