import React, { useEffect, useState } from 'react';
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
  const [total, setTotal] = useState<number>(0);
  const [shipFee, setShipFee] = useState<number>(0);

  useEffect(() => {
    if (products.length > 0) {
      setShipFee(15000); //FIXME: just for demo
      let _total = 0;
      products.map((product) => {
        _total += product.price * product.quantity_in_cart;
      });
      setTotal(_total);
    } else {
      setTotal(0);
      setShipFee(0);
    }
  }, [products]);

  return (
    <div>
      <NavigationBar
        fixed={true}
        style={{ backgroundColor: 'var(--color-orange)' }}
        prefixRender={() => <div className={s.header}>Giỏ hàng</div>}
      />

      <div className={[common.skipNavigationBar, s.container].join(' ')}>
        <div className={s.title}>Chi tiết đơn hàng</div>
        {products.length > 0 && (
          <div className={s.orderCard}>
            {products?.map((product, index) => (
              <div key={`product-item-${index}`}>
                <ProductItem product={product} />
                <div className={s.lineX} />
              </div>
            ))}

            <div className={s.labelValue}>
              <span className={s.label}>Tạm tính</span>
              <span className={s.value}>{toVNDString(total)}</span>
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
              <span className={s.value}>{toVNDString(shipFee)}</span>
            </div>

            <div className={s.labelValue}>
              <span className={s.label}>Tổng cộng</span>
              <span className={s.value}>{toVNDString(total + shipFee)}</span>
            </div>
          </div>
        )}
      </div>

      <PaymentBar price={total + shipFee} />
    </div>
  );
};
