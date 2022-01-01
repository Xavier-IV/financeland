import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <Container>
        <Link to="/">Home</Link> | <Link to="/expense">Expense</Link> |{' '}
        <Link to="/income">Income</Link>
      </Container>

      <Outlet />

      <footer>
        A simple project to practice React.
        <br />
        <a
          href="https://github.com/Xavier-IV/financeland"
          target={'_blank'}
          rel="noreferrer"
        >
          React Project
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://github.com/Xavier-IV/financeland-api"
          target={'_blank'}
          rel="noreferrer"
        >
          API Project
        </a>
      </footer>
    </>
  );
}
