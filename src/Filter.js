import BlogList from "./BlogList";
import { useState } from "react";

function Filter({ blogs }) {
  console.log(blogs);
  const [dataLoaded, setDataLoaded] = useState(blogs);
  //  if (blogs) {
  //  async function blogDataLoaded(data) {
  //  let result = await data;
  //}
  //blogDataLoaded(blogs);
  //}
  const handleClick = (itemIndex) => {
    setDataLoaded((prevBlog) => {
      return prevBlog.filter((item) => item.id !== itemIndex);
    });
  };

  return <BlogList blogs={dataLoaded} handleClick={handleClick} />;
}

export default Filter;
