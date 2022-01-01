import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function Expense() {
  return (
    <Container className={'mt-5'}>
      <h2>Expense</h2>

      <Outlet />
    </Container>
  );
}
