import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import "./styles/Home.css";

function Home() {
  const [blogs, setBlogs] = useState(null);

  const handleClick = (itemIndex) => {
    setBlogs((prevBlog) => {
      return prevBlog.filter((item) => item.indexOf(blogs) !== itemIndex);
    });
  };
  useEffect(() => {
    fetch("http://localhost:8000/blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  if (blogs) {
    let sortedBlog = blogs.filter((blogs) => blogs.author !== "Mike");
    return (
      <div className="Home">
        All authors:
        <BlogList blogs={blogs} handleClick={handleClick} />
        <br />
        <div>
          Filtered authors:
          <BlogList blogs={sortedBlog} handleClick={handleClick} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default Home;
