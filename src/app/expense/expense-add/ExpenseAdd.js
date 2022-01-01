import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import ExpenseForm from '../Expense.form';
import ExpenseSchema from '../Expense.schema';
import ExpenseService from '../Expense.service';

export default function ExpenseAdd() {
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
      await apiSubmitExpense(values);
    },
  });

  async function apiSubmitExpense(values) {
    const { status } = await ExpenseService.create(values);

    if (status === 201) {
      alert('Create success!');
      setRedirectTo('/expense');
    }
  }

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
        buttonName={'Add'}
        handleSubmit={formik.handleSubmit}
      />
    </>
  );
}
