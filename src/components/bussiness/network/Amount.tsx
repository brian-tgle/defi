import { ChangeEvent, FC } from 'react';

interface NetworkCustomAmountProps {
  handleChange: Function;
  value: number;
  disabled?: boolean;
}

const NetworkCustomAmount: FC<NetworkCustomAmountProps> = ({ handleChange, value, disabled = false }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      handleChange(parseInt(event.target.value, 10));
    } else {
      handleChange(0);
    }
  };
  return (
    <div className="card__custom-amount">
      <span>Amount:</span>
      <input className="input" dir="rtl" disabled={disabled} value={value} type="number" onChange={onChange} />
    </div>
  );
};

export default NetworkCustomAmount;
