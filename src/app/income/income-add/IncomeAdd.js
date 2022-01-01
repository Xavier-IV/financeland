import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import IncomeForm from '../Income.form';
import IncomeSchema from '../Income.schema';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function IncomeAdd() {
  const formik = useFormik({
    initialValues: {
      id: null,
      name: '',
      companyName: '',
      amount: 0,
    },
    validationSchema: IncomeSchema,
    onSubmit: async (values) => {
      await sleep(500);
      await apiSubmitIncome(values);
    },
  });

  async function apiSubmitIncome(values) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <>
      <div className="mb-5">
        <Link to="/income">back</Link>
      </div>
      <IncomeForm
        formik={formik}
        buttonName={'Add'}
        handleSubmit={formik.handleSubmit}
      />
    </>
  );
}
