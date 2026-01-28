// Dashboard.jsx - Layout wrapper
function Dashboard({ children }) {
  return (
    <>
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Dashboard</h1>
        <p className="lead text-muted">Built with reusable React components</p>
      </header>
      <main>{children}</main>
      <footer className="mt-5 pt-4 border-top text-center text-muted">
        <p>&copy; 2026 Your Company. Built with React Components.</p>
      </footer>
    </>
  );
}

export default Dashboard;
