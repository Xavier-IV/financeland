import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Currency from '../../../components/shared/Currency';
import IncomeService from '../Income.service';

export default function IncomeList() {
  const [incomes, setIncomes] = useState([]);

  useEffect(async () => {
    const { status, data } = await IncomeService.fetchAll();
    if (status === 200) setIncomes(data);
  }, []);

  function getList() {
    return incomes.map(({ id, name, amount, companyName }) => (
      <li key={id}>
        <Link to={`/income/${id}`}>
          ({companyName})&nbsp;{name}
        </Link>{' '}
        - <Currency amount={amount} />
      </li>
    ));
  }

  return (
    <>
      <div className="mb-5">
        <Link to="/income/add">add</Link>
      </div>
      <ul>{getList()}</ul>
    </>
  );
}
