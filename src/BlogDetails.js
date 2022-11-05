import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoaded,
  } = useFetch(`http://localhost:8000/blog/${id}`);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch(`http://localhost:8000/blog/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };
  return (
    <div className="blog-details">
      {isLoaded && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleClick}>Delete blog</button>
    </div>
  );
};

export default BlogDetails;
