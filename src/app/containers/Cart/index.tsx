import React from 'react';
import { NavigationBar } from '@app/components/NavigationBar';
import s from './cart.module.css';
import common from '@app/shared/styles/common.module.css';
import InfoIcon from '@core-ui/assets/icons/Info.svg';
import { PaymentBar } from './PaymentBar';
import { toVNDString } from '@app/shared/utils/price';
import { useSelector } from 'react-redux';
import { selectProducts } from '@store/cart/selectors';
import { ProductItem } from './ProductItem';

export const Cart: React.FC = () => {
  const products = useSelector(selectProducts);

  return (
    <div>
      <NavigationBar
        fixed={true}
        style={{ backgroundColor: 'var(--color-orange)' }}
        prefixRender={() => <div className={s.header}>Giỏ hàng</div>}
      />

      <div className={[common.skipNavigationBar, s.container].join(' ')}>
        <div className={s.title}>Chi tiết đơn hàng</div>

        <div className={s.orderCard}>
          {products?.map((product, index) => (
            <ProductItem product={product} key={`product-item-${index}`} />
          ))}
          <div className={s.lineX} />
          <div className={s.labelValue}>
            <span className={s.label}>Tạm tính</span>
            <span className={s.value}>{toVNDString(0)}</span>
          </div>
          <div className={s.labelValue} style={{ margin: '16px 0' }}>
            <span
              className={s.label}
              style={{ display: 'flex', alignContent: 'center' }}
            >
              Phí vận chuyển
              <img
                src={InfoIcon}
                alt="infoIcon"
                style={{ marginLeft: '4px' }}
              />
            </span>
            <span className={s.value}>{toVNDString(0)}</span>
          </div>
          <div className={s.labelValue}>
            <span className={s.label}>Tổng cộng</span>
            <span className={s.value}>{toVNDString(0)}</span>
          </div>
        </div>
      </div>

      <PaymentBar price={0} />
    </div>
  );
};
