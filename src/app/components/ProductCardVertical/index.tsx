import { Book } from '@models/Book';
import { Product } from '@models/Cart';
import { addToCart } from '@store/cart/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { StartRating } from '../StartRating';
import s from './productCard.module.css';
import TikiNow from '@app/assets/icons/TikiNow.svg';
import { toVNDString } from '@app/shared/utils/price';
import { Label } from '@core-ui/Label';

export interface ProductCardVerticalProps {
  book: Book;
}

export const ProductCardVertical: React.FC<ProductCardVerticalProps> = ({
  book
}) => {
  const dispatch = useDispatch();
  const dispatchSetCart = (item: Product) => {
    dispatch(addToCart(item));
  };

  return (
    <div className={s.cardContainer} onClick={() => dispatchSetCart(book)}>
      <img className={s.thumbnail} src={book.thumbnail_url} alt={book.name} />
      <div className={s.content}>
        {book.badges.find((b: any) => b.code == 'tikinow') && (
          <img src={TikiNow} width="56px" alt="titkiNow" />
        )}
        <div className={s.name}>{book.name}</div>

        <div className={s.flexLine}>
          <div className={s.wrapStart}>
            <StartRating ratingAverage={book.rating_average} />
          </div>
          <div className={s.reviewCount}>({book.review_count})</div>
        </div>

        <div className={s.flexLine} style={{ marginTop: '8px' }}>
          <div className={s.price}>{toVNDString(book.price)}</div>
          {book.discount_rate > 0 && (
            <div style={{ marginLeft: '4px' }}>
              <Label>{`-${book.discount_rate}%`}</Label>
            </div>
          )}
        </div>
        {book.discount_rate > 0 && (
          <div className={s.originalPrice}>
            {toVNDString(book.original_price)}
          </div>
        )}
      </div>
    </div>
  );
};
