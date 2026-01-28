// ProductList.jsx 
function ProductList({ products }) {
  return (
    <div className="row g-4">
      {products.map(product => (
        <div key={product.id} className="col-md-4">
          <div className="card h-100 shadow-sm hover-highlight">
            <div className="card-body d-flex flex-column">
              <div className="product-icon mb-3 fs-1 text-center">{product.image}</div>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text flex-grow-1 mb-3">High-quality digital product</p>
              <div className="d-flex justify-content-between align-items-end">
                <h3 className="text-primary mb-0">₹{product.price.toLocaleString()}</h3>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
