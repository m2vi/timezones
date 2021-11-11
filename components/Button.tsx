import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

const sizeClassnames = {
  big: 'py-2 px-6 text-sm rounded-lg',
  small: 'py-1 px-3 text-sm rounded-lg',
};

const colorClassnames = {
  primary: 'text-button bg-accent hover:bg-accent-hover disabled:text-accent-disabled disabled:bg-accent-hover',
  secondary: 'text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-300',
  'secondary-800': 'text-button bg-primaary-800 hover:bg-primary-600 disabled:text-primary-300',
};

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
  icon?: ReactNode;
  transition?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, size = 'big', color = 'primary', disabled, icon, className = '', ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`${sizeClassnames[size]}  text-button bg-accent hover:bg-accent-hover disabled:text-accent-disabled disabled:bg-accent-hover font-bold flex items-center justify-center ${className}`}
      data-testid='button'
      {...props}
    >
      <span className={`flex items-center`}>
        {icon ? <span className={`mr-2 items-center`}>{icon}</span> : null}
        {children}
      </span>
    </button>
  );
};