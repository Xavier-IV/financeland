import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Currency from '../../../components/shared/Currency';
import IncomeService from '../Income.service';

export default function IncomeList() {
  const [incomes, setIncomes] = useState([]);

  useEffect(async () => {
    await apiFetchIncomes();
  }, []);

  async function apiDeleteIncome(id) {
    const { status } = await IncomeService.destroy(id);
    if (status !== 200) alert('Fail to delete');

    await apiFetchIncomes();
    alert('Record deleted!');
  }

  async function apiFetchIncomes() {
    const { status, data } = await IncomeService.fetchAll();
    if (status === 200) setIncomes(data);
  }

  function getList() {
    return incomes.map(({ id, name, amount, companyName }) => (
      <tr key={id}>
        <th scope="row">{name}</th>
        <td>{companyName}</td>
        <td>
          <Currency amount={amount} />
        </td>
        <td>
          <Link to={`/income/${id}`}>
            <Button className={'mx-2'} size={'sm'}>
              View
            </Button>
          </Link>
          <Button
            size={'sm'}
            variant={'danger'}
            onClick={async () => apiDeleteIncome(id)}
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
        <Link to="/income/add">add</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Company Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{getList()}</tbody>
      </table>
    </>
  );
}
