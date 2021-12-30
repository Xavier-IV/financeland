import PropTypes from 'prop-types';

Error.propTypes = {
  name: PropTypes.string,
  formik: PropTypes.object,
};

export default function Error(props) {
  if (!props.formik.touched[props.name]) return <span>&nbsp;</span>;
  if (!props.formik.errors[props.name]) return <span>&nbsp;</span>;
  return (
    <span className={'text-danger'}>{props.formik.errors[props.name]}</span>
  );
}
