import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function Income() {
  return (
    <Container className={'mt-5'}>
      <h2>Income</h2>

      <Outlet />
    </Container>
  );
}
