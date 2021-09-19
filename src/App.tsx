import DayToProgress from 'components/bussiness/dayToProgress';
import Networks from 'components/bussiness/network';
import USDCBalance from 'components/bussiness/USDCBalance';
import { USDC_BALANCE } from 'df-constants';

function App() {
  return (
    <div className="App">
      <div className="header">
        <USDCBalance value={USDC_BALANCE} />
        <DayToProgress />
      </div>
      <Networks />
    </div>
  );
}

export default App;
