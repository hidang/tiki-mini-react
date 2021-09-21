import { ProductCardVertical } from '@app/components/ProductCardVertical';
import { Book } from '@models/Book';
import React from 'react';
import UniqueSaleHeader from './images/uniqueSaleHeader.svg';
import s from './uniqueSale.module.css';

export interface UniqueSaleProps {
  bookSales: Book[];
}

export const UniqueSale: React.FC<UniqueSaleProps> = (props) => {
  return (
    <div className={s.container}>
      <img src={UniqueSaleHeader} width={'100%'} />
      <div className={s.listBook}>
        {props.bookSales.map((book, index) => (
          <ProductCardVertical key={index} book={book} />
        ))}
      </div>
    </div>
  );
};
