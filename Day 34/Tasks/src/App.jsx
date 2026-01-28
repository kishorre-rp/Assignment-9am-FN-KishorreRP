
import './App.css'

import Task2 from './Task2'
import Task3 from './Task3'
import Dashboard from './Dashboard'
import ProfileCard from './ProfileCard'
import ProductList from './ProductList'
import Card from './Card'
import BlogPost from './BlogPost'

function App() {
  const products = [
    { id: 1, name: 'Pro Landing Template', price: 1499, image: '🏠' },
    { id: 2, name: 'Ecommerce UI Kit', price: 1999, image: '🛒' },
    { id: 3, name: 'Analytics Dashboard', price: 2499, image: '📊' }
  ];

  return (
    <>
      <Task2/>
      
      <Task3 name="Shanthosh" age={25}>
        Software Developer from Japerkanpet
      </Task3>

      <div className="container-fluid py-4 bg-light min-vh-100">
        <Dashboard>
          <ProfileCard name="Kishorre R P" role="Full Stack Developer" />
          
          <section className="my-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <ProductList products={products} />
          </section>
          
          <Card title="Quick Stats" className="mb-4">
            <div className="row text-center">
              <div className="col-md-3"><h3>₹5,497</h3><p>Total Sales</p></div>
              <div className="col-md-3"><h3>12</h3><p>Products</p></div>
              <div className="col-md-3"><h3>150+</h3><p>Users</p></div>
              <div className="col-md-3"><h3>98%</h3><p>Satisfaction</p></div>
            </div>
          </Card>
          
          <section className="row">
            <div className="col-md-8">
              <BlogPost 
                title="Mastering React Components" 
                author="Anbuarasu"
                date="Jan 28, 2026"
              >
                <p>Learn how to build reusable components with props and children...</p>
                <img src="https://via.placeholder.com/600x300" alt="React" className="img-fluid rounded mb-3" />
                <p>Components make your code maintainable and scalable...</p>
              </BlogPost>
            </div>
            <div className="col-md-4">
              <Card title="Recent Posts">
                <ul className="list-unstyled">
                  <li><a href="#">Props Deep Dive</a></li>
                  <li><a href="#">State Management</a></li>
                  <li><a href="#">Hooks Guide</a></li>
                </ul>
              </Card>
            </div>
          </section>
        </Dashboard>
      </div>
    </>
  )
}

export default App
