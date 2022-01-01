import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import IncomeForm from '../Income.form';
import IncomeSchema from '../Income.schema';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function IncomeEdit() {
  const { id } = useParams();
  const [redirectTo, setRedirectTo] = useState(null);

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
      alert(JSON.stringify(values, null, 2));
      setRedirectTo('/income');
    },
  });

  async function apiFetchIncome(id) {
    await formik.setValues({
      name: 'Salary',
      amount: 3000.0,
      companyName: 'Company ABC',
    });
  }

  useEffect(async () => {
    /* Mock api usage */
    await apiFetchIncome(id);
  }, []);

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <>
      <div className="mb-5">
        <Link to="/income">back</Link>
      </div>
      <IncomeForm
        formik={formik}
        buttonName={'Update'}
        handleSubmit={formik.handleSubmit}
      />
    </>
  );
}
