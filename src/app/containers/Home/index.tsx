import React, { useEffect, useState } from 'react';
import { NavigationBar } from '@app/components/NavigationBar';
import common from '@app/shared/styles/common.module.css';
import { BannerHeader } from './components/BannerHeader';
import s from './home.module.css';
import { UniqueSale } from './components/UniqueSale';
import { api } from '@apis/index';
import { Book } from '@models/Book';

export const Home: React.FC = () => {
  const [bookSales, setBookSales] = useState<Book[]>([]);

  useEffect(() => {
    api
      .getBooksSale('?limit=8&is_mweb=1&category=8322&page=1')
      .then(setBookSales);
  }, []);

  return (
    <div>
      <NavigationBar style={{ backgroundColor: '#C7E9F9' }} />
      <div className={[common.skipNavigationBottom, s.container].join(' ')}>
        <BannerHeader />
        <UniqueSale bookSales={bookSales} />
      </div>
    </div>
  );
};
