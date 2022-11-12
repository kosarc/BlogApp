import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h2>Sory Pal,</h2>
      <p>The page that you are reaching does not exist!</p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
};

export default NotFoundPage;
