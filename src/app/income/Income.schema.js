import * as Yup from 'yup';

const ExpenseSchema = Yup.object().shape({
  name: Yup.string().required(),
  amount: Yup.number().required(),
  companyName: Yup.string().required(),
});

export default ExpenseSchema;
