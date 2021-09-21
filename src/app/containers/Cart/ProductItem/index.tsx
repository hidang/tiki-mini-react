import React from 'react';
import s from './productItem.module.css';
// import { toVNDString } from '@app/shared/utils/price';
import { Product } from '@models/Cart';
import CloseIcon from '@core-ui/assets/icons/Close.svg';
import PlusIcon from '@core-ui/assets/icons/Plus.svg';
import MinusIcon from '@core-ui/assets/icons/Minus.svg';
import { ButtonAction } from './ButtonAction';
import { deleteToCart } from '@store/cart/actions';
import { useDispatch } from 'react-redux';

export interface PaymentBarProps {
  product: Product;
}

export const ProductItem: React.FC<PaymentBarProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div style={{ display: 'flex' }}>
        <img
          src={product.thumbnail_url}
          alt={product.name}
          width={'40px'}
          height={'40px'}
        />
        <div className={s.contentAction}>
          <div>hdiang</div>
          <div>dange</div>
          <div style={{ display: 'flex' }}>
            <ButtonAction state="disable">
              <img src={MinusIcon} alt="-" width={'20px'} />
            </ButtonAction>
            <ButtonAction style={{ margin: '0 4px' }}>1</ButtonAction>
            <ButtonAction state="active">
              <img src={PlusIcon} alt="X" width={'20px'} />
            </ButtonAction>
          </div>
        </div>
      </div>
      <div
        className={s.removeButton}
        onClick={() => {
          dispatch(deleteToCart(product));
        }}
      >
        <img src={CloseIcon} alt="X" width={'16px'} />
      </div>
    </div>
  );
};
