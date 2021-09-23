import { FC, useState } from 'react';
import { DEFAULT_NETWORK_INFO } from 'df-constants';
import NetworkCard, { NetworkCardProps } from './Card';

interface NetworksProps {
  updateBalance: Function;
}

const Networks: FC<NetworksProps> = ({ updateBalance }) => {
  const [networks] = useState(DEFAULT_NETWORK_INFO);

  const handleWithdraw = (value: number) => {
    updateBalance(value);
  };

  return (
    <div className="networks">
      {networks.map((network: Omit<NetworkCardProps, 'handleConfirm'>) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
        <NetworkCard key={network.id} {...network} handleConfirm={handleWithdraw} />
      ))}
    </div>
  );
};

export default Networks;
