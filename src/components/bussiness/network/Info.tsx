import { FC } from 'react';

interface NetworkInfoProps {
  label: string;
  value: string;
}

const NetworkInfo: FC<NetworkInfoProps> = ({ value, label }) => (
  <div className="card__info">
    <span>{label}</span>
    <span className="card__info--value">{value}</span>
  </div>
);

export default NetworkInfo;
