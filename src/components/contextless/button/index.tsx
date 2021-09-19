import { FC } from 'react';
import './styles.scss';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  outline?: boolean;
}
const Button: FC<ButtonProps> = ({
  onClick = () => {}, type = 'button', variant = 'primary', outline = false, children
}) => (
  <button type={type} className={`button ${variant}${outline ? '-outline' : ''}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
