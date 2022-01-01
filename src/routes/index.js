import { Route, Routes } from 'react-router-dom';
import Expense from '../app/expense/Expense';
import ExpenseAdd from '../app/expense/expense-add/ExpenseAdd';
import ExpenseEdit from '../app/expense/expense-edit/ExpenseEdit';
import ExpenseList from '../app/expense/expense-list/ExpenseList';
import Home from '../app/home/Home';
import Income from '../app/income/Income';
import IncomeAdd from '../app/income/income-add/IncomeAdd';
import IncomeEdit from '../app/income/income-edit/IncomeEdit';
import IncomeList from '../app/income/income-list/IncomeList';
import Layout from '../components/layout/Layout';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="expense" element={<Expense />}>
            <Route path="" element={<ExpenseList />} />
            <Route path="add" element={<ExpenseAdd />} />
            <Route path=":id" element={<ExpenseEdit />} />
          </Route>

          <Route path="income" element={<Income />}>
            <Route path="" element={<IncomeList />} />
            <Route path="add" element={<IncomeAdd />} />
            <Route path=":id" element={<IncomeEdit />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
