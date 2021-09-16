import React from 'react';
import { NavigationBar } from '../../components/NavigationBar';
import s from './cart.module.css';
import common from '../../shared/styles/common.module.css';

export const Cart: React.FC = () => {
  return (
    <div>
      <NavigationBar
        fixed={true}
        style={{ backgroundColor: 'var(--color-orange)' }}
        prefixRender={() => <div className={s.titleHeader}>Giỏ hàng</div>}
      />
      <div className={[common.skipNavigationBar, s.container].join(' ')}></div>
    </div>
  );
};
