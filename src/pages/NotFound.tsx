import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Back to home page!</Link>
    </div>
  );
}

export default NotFound;
