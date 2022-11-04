import { useState } from "react";
import useFetch from "./useFetch";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const { data } = useFetch("http://localhost:8000/blog");

  return (
    <div className="new-blog">
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          placeholder="enter a title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          required
          placeholder="enter a body"
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
        <input type="submit" value="Add Blog" />
      </form>
    </div>
  );
};

export default NewBlog;
