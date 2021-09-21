import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './superSale.module.css';

import { Book } from '@models/Book';
import { ProductCardHorizontal } from '@app/components/ProductCardHorizontal';

export interface SuperSaleProps {
  bookSales: Book[];
}

const settingSliders = {
  arrows: false,
  dots: true,
  speed: 750,
  swipeToSlide: true,
  variableWidth: true,
  infinite: false,
  appendDots: (dots: any) => <ul>{dots}</ul>,
  customPaging: () => <div className={s.slickInactive} />,
  dotsClass: 'slick-dots slick-thumb'
};

export const SuperSale: React.FC<SuperSaleProps> = ({ bookSales }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Siêu sale mở bán ngày 23/04</div>
      <Slider className={s.slider} {...settingSliders}>
        {bookSales?.map((book, index) => (
          <div key={`super-sale-book-${index}`}>
            <ProductCardHorizontal book={book} style={{ marginLeft: '8px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
