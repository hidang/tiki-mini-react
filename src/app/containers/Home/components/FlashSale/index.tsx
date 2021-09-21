import { api } from '@apis/index';
import { ProductCardVertical } from '@app/components/ProductCardVertical';
import { Tab } from '@core-ui/Tab';
import { TabContentType } from '@core-ui/Tab/type';
import { Book } from '@models/Book';

import React, { useEffect, useMemo, useState } from 'react';
import FlashSaleHeader from './images/flashSaleHeader.svg';
import s from './uniqueSale.module.css';

const timeFilter: string[] = ['10:00', '15:00', '18:00', '20:00'];
let tabContent: TabContentType[] = [];

export const FlashSale: React.FC = () => {
  const [bookSales, setBookSales] = useState<Book[]>([]);
  useMemo(() => {
    tabContent = [];
    let listBooksFiltered: Book[][] = [];
    timeFilter.map(() => {
      // TODO: --> filter by time in here <--
      listBooksFiltered.push(bookSales);
    });
    timeFilter.map((time, index) => {
      tabContent.push({
        title: time,
        content: (
          <div className={s.listBook}>
            {listBooksFiltered[index].map((book, index) => (
              <ProductCardVertical
                book={book}
                key={`book-flash-sale-${index}`}
              />
            ))}
          </div>
        )
      });
    });
  }, [bookSales]);

  useEffect(() => {
    (async () => {
      await api
        .getBooksSale('?limit=8&is_mweb=1&category=316&page=1')
        .then(setBookSales);
    })();
  }, []);

  return (
    <div className={s.container}>
      <img src={FlashSaleHeader} className={s.imageHeader} />
      <Tab.Tab>
        {tabContent?.map((tab: any, index: number) => (
          <Tab.TabPane key={`tab-${index}`} tab={tab.title}>
            {tab.content}
          </Tab.TabPane>
        ))}
      </Tab.Tab>
    </div>
  );
};
