import React, { useMemo } from 'react';
import s from './productItem.module.css';
import { toVNDString } from '@app/shared/utils/price';
import { Product } from '@models/Cart';
import CloseIcon from '@core-ui/assets/icons/Close.svg';
import PlusActive from '@core-ui/assets/icons/PlusActive.svg';
import PlusInactive from '@core-ui/assets/icons/PlusInactive.svg';
import MinusActive from '@core-ui/assets/icons/MinusActive.svg';
import MinusInavtive from '@core-ui/assets/icons/MinusInavtive.svg';
import { ButtonAction } from './ButtonAction';
import { addToCart, deleteToCart, removeToCart } from '@store/cart/actions';
import { useDispatch } from 'react-redux';

export interface PaymentBarProps {
  product: Product;
}

export const ProductItem: React.FC<PaymentBarProps> = ({ product }) => {
  const dispatch = useDispatch();

  const isMinus = useMemo(() => {
    return product.quantity_in_cart - 1 >= product.stock_item.min_sale_qty
      ? 'active'
      : 'inactive';
  }, [product.quantity_in_cart, product.stock_item.min_sale_qty]);

  const isPlus = useMemo(() => {
    return product.quantity_in_cart + 1 <= product.stock_item.max_sale_qty
      ? 'active'
      : 'inactive';
  }, [product.quantity_in_cart, product.stock_item.max_sale_qty]);

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
          <div className={s.name}>{product.name}</div>
          <div className={s.priceRow}>
            <div className={s.price}>{toVNDString(product.price)}</div>
            {product.discount_rate > 0 && (
              <div className={s.originalPrice}>
                {toVNDString(product.original_price)}
              </div>
            )}
          </div>
          <div style={{ display: 'flex' }}>
            <ButtonAction
              state={isMinus}
              onClick={() =>
                isMinus == 'active' && dispatch(removeToCart(product))
              }
            >
              <img
                src={isMinus == 'active' ? MinusActive : MinusInavtive}
                alt="-"
                width={'20px'}
              />
            </ButtonAction>
            <ButtonAction style={{ margin: '0 4px' }}>
              {product.quantity_in_cart}
            </ButtonAction>
            <ButtonAction
              state={isPlus}
              onClick={() => isPlus == 'active' && dispatch(addToCart(product))}
            >
              <img
                src={isPlus == 'active' ? PlusActive : PlusInactive}
                alt="X"
                width={'20px'}
              />
            </ButtonAction>
          </div>
        </div>
      </div>
      <div
        className={s.removeButton}
        onClick={() => dispatch(deleteToCart(product))}
      >
        <img src={CloseIcon} alt="X" width={'16px'} />
      </div>
    </div>
  );
};
