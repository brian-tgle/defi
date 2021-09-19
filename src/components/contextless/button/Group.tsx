import { FC, ReactElement } from 'react';

interface ButtonGroupProps {
  children: ReactElement | ReactElement[];
}
const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => (
  <div className="button__group">
    {children}
  </div>
);

export default ButtonGroup;
