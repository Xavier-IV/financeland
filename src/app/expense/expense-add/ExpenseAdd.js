import { Link } from 'react-router-dom';

export default function ExpenseAdd() {
  return (
    <>
      <div className="mb-5">
        <Link to="/expense">back</Link>
      </div>
      <p>Add.</p>
    </>
  );
}
