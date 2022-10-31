import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>The React Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">New Blog</a>
      </div>
    </nav>
  );
};
export default Navbar;
