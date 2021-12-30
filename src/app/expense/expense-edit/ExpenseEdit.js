import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExpenseForm from '../Expense.form';
import ExpenseSchema from '../Expense.schema';

export default function ExpenseEdit() {
  const formik = useFormik({
    initialValues: {
      name: '',
      amount: 0,
      category: 'Category...',
      isRecurring: 'Recurring...',
    },
    validationSchema: ExpenseSchema,
    onSubmit,
  });

  function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }

  async function apiFetchExpense(id) {
    await formik.setValues({
      name: 'Books',
      amount: 125.3,
      category: 'Living',
      isRecurring: 'No',
    });
  }

  useEffect(async () => {
    /* Mock api usage */
    await apiFetchExpense();
  }, []);

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
