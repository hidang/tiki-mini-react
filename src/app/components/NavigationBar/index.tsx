import React, { CSSProperties } from 'react';
import s from './nav.module.css';

export interface NavigationBarProps {
  fixed?: boolean;
  className?: string;
  style?: CSSProperties;
  // Renderers
  prefixRender?: () => React.ReactNode;
  rootRender?: () => React.ReactNode;
  suffixRender?: () => React.ReactNode;
}

const getClass = (props: NavigationBarProps) => {
  return [s.nav, props.fixed && s.fixed, props.className].join(' ');
};

export const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  return (
    <div style={props.style} className={getClass(props)}>
      {props.prefixRender && (
        <div className={s.prefix}>
          {props.prefixRender && props.prefixRender()}
        </div>
      )}
      {props.rootRender && (
        <div className={s.root}>{props.rootRender && props.rootRender()}</div>
      )}
      {props.suffixRender && (
        <div className={s.suffix}>
          {props.suffixRender && props.suffixRender()}
        </div>
      )}
    </div>
  );
};
