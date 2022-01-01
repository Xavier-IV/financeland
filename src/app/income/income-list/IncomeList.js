import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Currency from '../../../components/shared/Currency';

export default function IncomeList() {
  const [incomes, setIncomes] = useState([]);

  useEffect(async () => {
    /* Mock api usage */
    setIncomes([
      { id: 1, name: 'Salary', companyName: 'Company ABC', amount: 3000.0 },
      { id: 2, name: 'Overtime', companyName: 'Company ABC', amount: 500.0 },
    ]);
  }, []);

  function getList() {
    return incomes.map(({ id, name, amount }) => (
      <li key={id}>
        <Link to={`/income/${id}`}>{name}</Link> - <Currency amount={amount} />
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
