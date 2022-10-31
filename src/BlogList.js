const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((value, index) => {
        return (
          <div key={index} className="blog-preview">
            <h2>{value.title}</h2>
            <p>Written by: {value.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
