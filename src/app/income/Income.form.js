import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Error from '../../components/form/Error';

IncomeForm.propTypes = {
  handleSubmit: PropTypes.func,
  formik: PropTypes.object,
  buttonName: PropTypes.string,
};

export default function IncomeForm({ handleSubmit, formik, buttonName }) {
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
                <Form.Label htmlFor="companyName">Company Name</Form.Label>
                <Form.Control
                  type={'text'}
                  name={'companyName'}
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                />
                <Error formik={formik} name={'companyName'} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Button disabled={formik.isSubmitting} type={'submit'}>
              {buttonName}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
