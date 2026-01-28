// BlogPost.jsx - Nested layout with children
function BlogPost({ title, author, date, children }) {
  return (
    <article className="card shadow-lg mb-4">
      <div className="card-body p-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="display-5 fw-bold mb-0">{title}</h1>
          <div className="text-end">
            <small className="text-muted d-block">{author}</small>
            <small className="text-muted">{date}</small>
          </div>
        </div>
        <div className="blog-content">
          {children}
        </div>
        <hr className="my-4" />
        <div className="d-flex justify-content-between">
          <span className="text-muted">5 min read</span>
          <div>
            <button className="btn btn-outline-primary btn-sm me-2"> Like</button>
            <button className="btn btn-outline-secondary btn-sm"> Save</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
