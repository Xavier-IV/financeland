import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h1>Financeland</h1>

      <Outlet />
    </>
  );
}
