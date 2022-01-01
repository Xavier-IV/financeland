import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ExpenseForm from '../Expense.form';
import ExpenseSchema from '../Expense.schema';
import ExpenseService from '../Expense.service';

export default function ExpenseEdit() {
  const { id } = useParams();
  const [redirectTo, setRedirectTo] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: 0,
      category: 'Category...',
      isRecurring: 'Recurring...',
    },
    validationSchema: ExpenseSchema,
    onSubmit: async (values) => {
      await apiUpdateExpense(values);
    },
  });

  async function apiUpdateExpense(values) {
    const { status } = await ExpenseService.update(id, values);
    if (status === 200) {
      alert('Update success!');
      setRedirectTo('/expense');
    }
  }

  async function apiFetchExpense(id) {
    const { status, data } = await ExpenseService.fetchOne(id);
    if (status === 200) await formik.setValues(data);
  }

  useEffect(async () => await apiFetchExpense(id), []);

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <>
      <div className="mb-5">
        <Link to="/expense">back</Link>
      </div>
      <ExpenseForm
        formik={formik}
        buttonName={'Update'}
        handleSubmit={formik.handleSubmit}
      />
    </>
  );
}
