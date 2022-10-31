import { useState } from "react";
import BlogList from "./BlogList";
import "./styles/Home.css";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "About React",
      body: "some text about React...",
      author: "Matt",
      id: 1,
    },
    {
      title: "About React Native",
      body: "some text about React Native...",
      author: "Mike",
      id: 2,
    },
    {
      title: "About React Hooks",
      body: " some text about React Hooks...",
      author: "Serhii",
      id: 3,
    },
  ]);
  return (
    <div className="Home">
      <BlogList blogs={blogs} />
    </div>
  );
}
export default Home;
