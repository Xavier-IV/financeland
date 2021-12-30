import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Error from '../../components/form/Error';

ExpenseForm.propTypes = {
  handleSubmit: PropTypes.func,
  formik: PropTypes.object,
  buttonName: PropTypes.string,
};

export default function ExpenseForm({ handleSubmit, formik, buttonName }) {
  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mt-5">
          <Col md={6}>
            <Row>
              <Col md={6}>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type={'text'}
                  name={'name'}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <Error formik={formik} name={'name'} />
              </Col>
              <Col md={6}>
                <Form.Label htmlFor="amount">Amount</Form.Label>
                <Form.Control
                  type={'number'}
                  name={'amount'}
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                />
                <Error formik={formik} name={'amount'} />
              </Col>
            </Row>

            <Row className={'mt-3'}>
              <Col md={6}>
                <Form.Label htmlFor="amount">Category</Form.Label>
                <Form.Select
                  name={'category'}
                  className={
                    formik.values.category === 'Category...' && 'text-black-50'
                  }
                  value={formik.values.category}
                  onChange={formik.handleChange}
                >
                  <option disabled>Category...</option>
                  <option>Living</option>
                  <option>Loan</option>
                  <option>Entertainment</option>
                  <option>Groceries</option>
                  <option>Travel & Transport</option>
                  <option>Others</option>
                </Form.Select>
                <Error formik={formik} name={'category'} />
              </Col>
              <Col md={6}>
                <Form.Label htmlFor="isRecurring">Recurring?</Form.Label>
                <Form.Select
                  className={
                    formik.values.isRecurring === 'Recurring...' &&
                    'text-black-50'
                  }
                  name={'isRecurring'}
                  value={formik.values.isRecurring}
                  onChange={formik.handleChange}
                >
                  <option disabled>Recurring...</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
                <Error formik={formik} name={'isRecurring'} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Button type={'submit'}>{buttonName}</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
