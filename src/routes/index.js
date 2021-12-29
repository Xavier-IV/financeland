import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<p>Home.</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
