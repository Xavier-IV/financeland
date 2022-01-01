import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Currency from '../../../components/shared/Currency';
import ExpenseService from '../Expense.service';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(async () => {
    const { status, data } = await ExpenseService.fetchAll();
    if (status === 200) setExpenses(data);
  }, []);

  function getList() {
    return expenses.map(({ id, name, amount }) => (
      <li key={id}>
        <Link to={`/expense/${id}`}>{name}</Link> - <Currency amount={amount} />
      </li>
    ));
  }

  return (
    <>
      <div className="mb-5">
        <Link to="/expense/add">add</Link>
      </div>
      <ul>{getList()}</ul>
    </>
  );
}
