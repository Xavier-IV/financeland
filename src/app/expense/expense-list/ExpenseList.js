import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Currency from '../../../components/shared/Currency';
import ExpenseService from '../Expense.service';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(async () => {
    await apiFetchExpense();
  }, []);

  async function apiDeleteExpense(id) {
    const { status } = await ExpenseService.destroy(id);
    if (status !== 200) alert('Fail to delete');

    await apiFetchExpense();
    alert('Record deleted!');
  }

  async function apiFetchExpense() {
    const { status, data } = await ExpenseService.fetchAll();
    if (status === 200) setExpenses(data);
  }

  function getList() {
    return expenses.map(({ id, name, amount }) => (
      <tr key={id}>
        <th scope="row">{name}</th>
        <td>
          <Currency amount={amount} />
        </td>
        <td>
          <Link to={`/expense/${id}`}>
            <Button className={'mx-2'} size={'sm'}>
              View
            </Button>
          </Link>
          <Button
            size={'sm'}
            variant={'danger'}
            onClick={async () => apiDeleteExpense(id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  }

  return (
    <>
      <div className="mb-5">
        <Link to="/expense/add">add</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{getList()}</tbody>
      </table>
    </>
  );
}
