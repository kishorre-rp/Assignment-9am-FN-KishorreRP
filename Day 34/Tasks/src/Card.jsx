// Card.jsx - Generic card using children
function Card({ title, children, className = "" }) {
  return (
    <div className={`card shadow-sm ${className}`}>
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0"><i className="me-2"></i>{title}</h5>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}y

export default Card;
