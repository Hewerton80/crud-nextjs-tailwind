import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: 'green' | 'blue' | 'gray';
}

function Button({ children, color, className, ...rest }: ButtonProps) {
  const defaultColor = color ?? 'green';
  return (
    <button
      {...rest}
      className={`
        bg-gradient-to-r from-${defaultColor}-400 to-${defaultColor}-700
        text-white px-4 py-2 rounded-md
        ${className ? className : ''}
      `}
    >
      {children}
    </button>
  );
}
export default Button;
