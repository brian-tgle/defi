export const USDC_BALANCE = 10_000;

export const DAY_TO_PROGRESS = 365;

export const DEFAULT_NETWORK_INFO = [{
  id: 1,
  name: 'COMPOUND',
  currentAPY: 5,
  amountDeposited: 100,
  accruedInterest: 0.4,
  status: 'DEPOSIT'
}, {
  id: 2,
  name: 'AAVE',
  currentAPY: 3,
  amountDeposited: 500,
  accruedInterest: 1.2,
  status: 'WITHDRAW'
}, {
  id: 3,
  name: 'CURVE',
  currentAPY: 2.5,
  amountDeposited: 0,
  accruedInterest: 0,
  status: 'WITHDRAW'
}];
