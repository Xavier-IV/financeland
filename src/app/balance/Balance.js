import { useEffect, useState } from 'react';
import Currency from '../../components/shared/Currency';
import BalanceService from './Balance.service';

export default function Balance() {
  const [balance, setBalance] = useState({
    balance: 0,
    incomes: 0,
    expenses: 0,
  });
  useEffect(async () => {
    const { status, data } = await BalanceService.fetchAll();

    if (status !== 200) return;
    setBalance(data);
  }, []);

  return (
    <>
      <h1>
        Balance: <Currency amount={balance.balance} />
      </h1>
      <p>
        Income: <Currency amount={balance.incomes} />
      </p>
      <p>
        Expense: <Currency amount={balance.expenses} />
      </p>
    </>
  );
}
