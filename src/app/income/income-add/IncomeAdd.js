import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import IncomeForm from '../Income.form';
import IncomeSchema from '../Income.schema';
import IncomeService from '../Income.service';

export default function IncomeAdd() {
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
      await apiSubmitIncome(values);
    },
  });

  async function apiSubmitIncome(values) {
    const { status } = await IncomeService.create(values);
    if (status !== 201) return;
    alert('Record created!');
    setRedirectTo('/income');
  }

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
        buttonName={'Add'}
        handleSubmit={formik.handleSubmit}
      />
    </>
  );
}
