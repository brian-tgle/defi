import Button from 'components/contextless/button';
import './styles.scss';

const DayToProgress = () => (
  <div className="date-to-progress">
    <h3>Day to Progress</h3>
    <input className="input" name="dateToProgress" />
    <Button variant="secondary">Enter</Button>
  </div>
);

export default DayToProgress;
