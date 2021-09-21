import { Button } from '@core-ui/Button';
import React from 'react';
import s from './paymentBar.module.css';
import { toVNDString } from '@app/shared/utils/price';

export interface PaymentBarProps {
  price: string | number;
}

export const PaymentBar: React.FC<PaymentBarProps> = ({ price }) => {
  return (
    <div className={s.container}>
      <div className={s.labelValue}>
        <span className={s.label}>Tổng cộng</span>
        <span className={s.value}>{toVNDString(price)}</span>
      </div>
      <div className={s.lineX} />
      <Button className={s.buttonPayment}>Thanh toán</Button>
    </div>
  );
};
