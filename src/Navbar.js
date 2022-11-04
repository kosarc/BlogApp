import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>The React Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/new-blog">New Blog</Link>
      </div>
    </nav>
  );
};
export default Navbar;
