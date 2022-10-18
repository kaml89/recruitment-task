import React from 'react';
import styles from './index.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties | undefined
}

const Button = ({
  children,
  onClick,
  disabled=false,
  isLoading=false,
  type='button',
  style,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      style={style}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      { isLoading ? 'Loading...' : children }
    </button>
  );
};

export default Button;