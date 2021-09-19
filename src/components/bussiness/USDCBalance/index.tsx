import { FC } from 'react';

interface USDCBalanceProps {
  value: number;
}
const USDCBalance: FC<USDCBalanceProps> = ({ value }) => (
  <div className="usdc">
    <h3>USDC Balance</h3>
    <h4>
      {value}
      {' '}
      USDC
    </h4>
  </div>
);

export default USDCBalance;
