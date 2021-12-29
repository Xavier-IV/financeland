import { Link } from 'react-router-dom';

export default function ExpenseEdit() {
  return (
    <>
      <div className="mb-5">
        <Link to="/expense">back</Link>
      </div>
      <p>Edit.</p>
    </>
  );
}
