import { FC } from 'react';

interface NetworkCustomAmountProps {
  handleChange: () => void;
}

const NetworkCustomAmount: FC<NetworkCustomAmountProps> = ({ handleChange }) => (
  <div className="card__custom-amount">
    <span>Amount:</span>
    <input type="number" onChange={handleChange} />
  </div>
);

export default NetworkCustomAmount;
