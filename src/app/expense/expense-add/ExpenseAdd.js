import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import ExpenseForm from '../Expense.form';
import ExpenseSchema from '../Expense.schema';

export default function ExpenseAdd() {
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

  async function apiSubmitExpense(values) {
    /* Mock api usage */
    alert(JSON.stringify(values, null, 2));
  }

  async function onSubmit(values) {
    await apiSubmitExpense(values);
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
