import * as Yup from 'yup';

const ExpenseSchema = Yup.object().shape({
  name: Yup.string().required(),
  amount: Yup.number().required(),
  category: Yup.string()
    .notOneOf(['Category...'], 'Category is required')
    .required(),
  isRecurring: Yup.string()
    .notOneOf(['Recurring...'], 'Recurring is required')
    .required(),
});

export default ExpenseSchema;
