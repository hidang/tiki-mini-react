import React, { CSSProperties } from 'react';
import classname from 'classnames';
import s from './buttonAction.module.css';

export interface ButtonActionProps {
  children?: React.ReactNode;
  state?: 'active' | 'disable';

  style?: CSSProperties;
  className?: string;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  state,
  style
}) => {
  return (
    <div
      style={style}
      className={classname(
        s.container,
        state === 'active' ? s.active : state === 'disable' && s.disable
      )}
    >
      {children}
    </div>
  );
};
