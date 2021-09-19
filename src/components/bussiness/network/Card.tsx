import Button from 'components/contextless/button';
import ButtonGroup from 'components/contextless/button/Group';
import { FC } from 'react';
import NetworkCustomAmount from './Amount';
import NetworkInfo from './Info';
import './styles.scss';

interface NetworkCardProps {
  name: string;
  currentAPY: number;
  amountDeposited: number;
  accruedInterest: number;
}
const NetworkCard: FC<NetworkCardProps> = ({
  name, currentAPY, amountDeposited, accruedInterest
}) => (
  <div className="card">
    <h3 className="card__header">{name}</h3>
    <NetworkInfo label="Current APY:" value={`${currentAPY}%`} />
    <NetworkInfo label="Amount Deposited:" value={`${amountDeposited} USDC`} />
    <NetworkInfo label="Accrued Interest:" value={`${accruedInterest} USDC`} />
    <ButtonGroup>
      <Button variant="secondary">Deposit</Button>
      <Button>Withdraw</Button>
    </ButtonGroup>
    <NetworkCustomAmount handleChange={() => {}} />
    <p className="card__footer">
      <Button outline>Confirm</Button>
    </p>
  </div>
);

export default NetworkCard;
