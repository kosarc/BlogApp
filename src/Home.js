import { useState } from "react";
import BlogList from "./BlogList";
import "./styles/Home.css";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "About React",
      body: "some text about React...",
      author: "Matt",
      id: 0,
    },
    {
      title: "About React Native",
      body: "some text about React Native...",
      author: "Mike",
      id: 1,
    },
    {
      title: "About React Hooks",
      body: " some text about React Hooks...",
      author: "Serhii",
      id: 2,
    },
    {
      title: "About React Native Navigation",
      body: "some text about React Native navigation...",
      author: "Mike",
      id: 3,
    },
  ]);
  let sortedBlog = blogs.filter((blogs) => blogs.author !== "Mike");
  const handleClick = (itemIndex) => {
    setBlogs((prevBlog) => {
      return prevBlog.filter((item) => item.indexOf(blogs) !== itemIndex);
    });
  };

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
}
export default Home;
