import BlogList from "./BlogList";
import { useState } from "react";

function Filter({ blogs }) {
  console.log(blogs);
  const [dataLoaded, setDataLoaded] = useState(blogs);
  const handleClick = (itemIndex) => {
    setDataLoaded((prevBlog) => {
      return prevBlog.filter((item) => item.id !== itemIndex);
    });
  };

  return <BlogList blogs={dataLoaded} handleClick={handleClick} />;
}

export default Filter;
