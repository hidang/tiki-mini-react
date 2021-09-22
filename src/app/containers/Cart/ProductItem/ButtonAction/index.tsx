import React, { CSSProperties } from 'react';
import classname from 'classnames';
import s from './buttonAction.module.css';

export interface ButtonActionProps {
  children?: React.ReactNode;
  state?: 'active' | 'inactive';

  onClick?: React.MouseEventHandler;

  style?: CSSProperties;
  className?: string;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  state,
  onClick,
  style,
  className
}) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={classname(
        s.container,
        state === 'active' ? s.active : state === 'inactive' && s.inactive,
        className
      )}
    >
      {children}
    </div>
  );
};
