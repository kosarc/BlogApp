import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleClick }) => {
  return (
    <div>
      {blogs.map((value, index) => {
        return (
          <div key={index} className="blog-preview">
            <Link to={`/blogs/${value.id}`}>
              <h2>{value.title}</h2>
              <p>Written by: {value.author}</p>
            </Link>
            <button onClick={() => handleClick(value.id)}>delete blog</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
