import React, { CSSProperties } from 'react';
import s from './button.module.css';
import classNames from 'classnames';

export interface ButtonProps {
  children?: React.ReactNode;

  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler;

  className?: string;
  style?: CSSProperties;
}

const ButtonChildren: React.FC<ButtonProps> = (props) => {
  return (
    <React.Fragment>
      {props.children && (
        <span className={classNames(s.text)}>{props.children}</span>
      )}
    </React.Fragment>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  const common = {
    className: [props.className, s.button].join(' '),
    children: <ButtonChildren {...props} />
  };

  return (
    <button
      {...common}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ?? 'button'}
    />
  );
};
