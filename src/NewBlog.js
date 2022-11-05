import { useState } from "react";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const { data } = useFetch("http://localhost:8000/blog");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsLoaded(true);
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setTimeout(() => {
        setIsLoaded(false);
        navigate("/");
      }, 1000);
    });
  };

  return (
    <div className="new-blog">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          {data &&
            data.map((value, index) => {
              return (
                <option key={index} value={value.author}>
                  {value.author}
                </option>
              );
            })}
        </select>
        {!isLoaded && (
          <input type="submit" value="Add Blog" className="button" />
        )}
        {isLoaded && (
          <input type="submit" value="Loading..." className="button" />
        )}
      </form>
      <div>{title}</div>
      <div> {body}</div>
      <div> {author}</div>
    </div>
  );
};

export default NewBlog;
