import DayToProgress from 'components/bussiness/dayToProgress';
import Networks from 'components/bussiness/network';
import USDCBalance from 'components/bussiness/USDCBalance';
import { USDC_BALANCE } from 'df-constants';
import { useState } from 'react';

function App() {
  const [usdcBalance, setUSDCBalance] = useState<number>(USDC_BALANCE);
  const updateBalance = (value: number) => {
    setUSDCBalance((prevState: number) => prevState + value);
  };
  return (
    <div className="App">
      <div className="header">
        <USDCBalance value={usdcBalance} />
        <DayToProgress />
      </div>
      <Networks updateBalance={updateBalance} />
    </div>
  );
}

export default App;
