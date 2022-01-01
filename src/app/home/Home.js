import { Container } from 'react-bootstrap';
import Balance from '../balance/Balance';

export default function Home() {
  return (
    <>
      <Container className={'mt-5'}>
        <Balance />
      </Container>
    </>
  );
}
