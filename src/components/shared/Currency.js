export default function Currency(props) {
  const { REACT_APP_LOCALE: LOCALE } = process.env;
  const { REACT_APP_CURRENCY: CURRENCY } = process.env;

  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: CURRENCY,
  }).format(props.amount);
}
