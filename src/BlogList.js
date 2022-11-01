const BlogList = ({ blogs, handleClick }) => {
  return (
    <div>
      {blogs.map((value, index) => {
        return (
          <div key={index} className="blog-preview">
            <h2>{value.title}</h2>
            <p>Written by: {value.author}</p>
            <button onClick={() => handleClick(value.id)}>delete blog</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
