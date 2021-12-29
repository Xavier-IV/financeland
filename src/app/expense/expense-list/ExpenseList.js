import { useState } from 'react';
import { Link } from 'react-router-dom';
import Currency from '../../../components/shared/Currency';

export default function ExpenseList() {
  const [expenses] = useState([
    { id: 1, name: 'House Rent', price: 1250.0 },
    { id: 2, name: 'Car Loan', price: 600.0 },
  ]);

  function getList() {
    return expenses.map(({ id, name, price }) => (
      <li key={id}>
        <Link to={`/expense/${id}`}>{name}</Link> - <Currency amount={price} />
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
