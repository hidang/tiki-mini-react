import React, { CSSProperties } from 'react';
import s from './label.module.css';

export interface LabelProps {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ children, style, className }) => {
  return (
    <span className={[s.label, className].join(' ')} style={style}>
      {children}
    </span>
  );
};
