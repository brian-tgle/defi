import Button from 'components/contextless/button';
import ButtonGroup from 'components/contextless/button/Group';
import { FC, useState } from 'react';
import NetworkCustomAmount from './Amount';
import NetworkInfo from './Info';
import './styles.scss';

export interface NetworkCardProps {
  id: number;
  name: string;
  currentAPY: number;
  amountDeposited: number;
  accruedInterest: number;
  status: string;
  handleConfirm: Function;
}
const NetworkCard: FC<NetworkCardProps> = ({
  name,
  currentAPY,
  amountDeposited,
  accruedInterest,
  status,
  handleConfirm
}) => {
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [currentState, setCurrentState] = useState(status);
  const [currentAccruedInterest, setCurrentAccruedInterest] = useState(accruedInterest);
  const [currentAmountDeposited, setCurrentAmountDeposited] = useState(amountDeposited);
  const onConfirm = () => {
    if (currentState === 'WITHDRAW') {
      handleConfirm(currentAmountDeposited + currentAccruedInterest);
      setCurrentAmountDeposited(0);
      setCurrentAccruedInterest(0);
    } else {
      setCurrentAmountDeposited((prevState: number) => prevState + customAmount);
      setCustomAmount(0);
    }
  };

  return (
    <div className="card">
      <h3 className="card__header">{name}</h3>
      <NetworkInfo label="Current APY:" value={`${currentAPY}%`} />
      <NetworkInfo label="Amount Deposited:" value={`${currentAmountDeposited} USDC`} />
      <NetworkInfo label="Accrued Interest:" value={`${currentAccruedInterest} USDC`} />
      <ButtonGroup>
        <Button
          onClick={() => setCurrentState('DEPOSIT')}
          variant={currentState === 'DEPOSIT' ? 'primary' : 'secondary'}
        >
          Deposit
        </Button>
        <Button
          onClick={() => setCurrentState('WITHDRAW')}
          variant={currentState === 'WITHDRAW' ? 'primary' : 'secondary'}
        >
          Withdraw
        </Button>
      </ButtonGroup>
      <NetworkCustomAmount disabled={currentState === 'WITHDRAW'} value={customAmount} handleChange={setCustomAmount} />
      <p className="card__footer">
        <Button outline onClick={onConfirm}>Confirm</Button>
      </p>
    </div>
  );
};

export default NetworkCard;
