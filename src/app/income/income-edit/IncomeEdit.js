import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import IncomeForm from '../Income.form';
import IncomeSchema from '../Income.schema';
import IncomeService from '../Income.service';

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
      await apiUpdateIncome(values);
      setRedirectTo('/income');
    },
  });

  async function apiFetchIncome() {
    const { status, data } = await IncomeService.fetchOne(id);
    if (status !== 200) return;
    await formik.setValues(data);
  }

  async function apiUpdateIncome(values) {
    const { status, data } = await IncomeService.update(id, values);
    if (status !== 200) return;
    await formik.setValues(data);
    alert('Record updated!');
  }

  useEffect(async () => await apiFetchIncome(), []);

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
