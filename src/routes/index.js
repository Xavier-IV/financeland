import { Route, Routes } from 'react-router-dom';
import Expense from '../app/expense/Expense';
import ExpenseAdd from '../app/expense/expense-add/ExpenseAdd';
import ExpenseEdit from '../app/expense/expense-edit/ExpenseEdit';
import ExpenseList from '../app/expense/expense-list/ExpenseList';
import Home from '../app/home/Home';
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
        </Route>
      </Routes>
    </>
  );
}

export default Router;
