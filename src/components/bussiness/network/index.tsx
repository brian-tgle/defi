import { useState } from 'react';
import { DEFAULT_NETWORK_INFO } from 'df-constants';
import NetworkCard from './Card';

const Networks = () => {
  const [networks] = useState(DEFAULT_NETWORK_INFO);

  return (
    <div className="networks">
      {networks.map((network: any) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
        <NetworkCard {...network} />
      ))}
    </div>
  );
};

export default Networks;
