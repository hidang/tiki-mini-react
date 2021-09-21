import { Book } from '@models/Book';
import { Product } from '@models/Cart';
import { addToCart } from '@store/cart/actions';
import { selectCart } from '@store/cart/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StartRating } from '../StartRating';
import s from './productCard.module.css';

export interface ProductCardVerticalProps {
  book: Book;
}

export const ProductCardVertical: React.FC<ProductCardVerticalProps> = ({
  book
}) => {
  const productList = useSelector(selectCart);
  const dispatch = useDispatch();
  const dispatchSetCart = (item: Product) => {
    console.log(productList);
    dispatch(addToCart(item));
  };

  return (
    <div className={s.cardContainer} onClick={() => dispatchSetCart(book)}>
      <img className={s.thumbnail} src={book.thumbnail_url} />
      <div>
        <div>{book.name}</div>
        <div>{book.price}</div>
        <div>{book.discount_rate}</div>
        <div>{book.original_price}</div>
        <StartRating ratingAverage={book.rating_average} />
        <div>{book.review_count}</div>
      </div>
    </div>
  );
};
