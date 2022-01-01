import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Container>
        <Link to="/">Home</Link> | <Link to="/expense">Expense</Link> |{' '}
        <Link to="/income">Income</Link>
      </Container>

      <Outlet />
    </>
  );
}
