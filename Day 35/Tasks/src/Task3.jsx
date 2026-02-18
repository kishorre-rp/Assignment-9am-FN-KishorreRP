import React from 'react'

function Task3() {
  return (
    function Task3() {
  const [message, setMessage] = useState("Click a button!");

  const handleClick = (action) => {
    setMessage(`You clicked: ${action}`);
  };

  return (
    <div className="p-4">
      <h3>{message}</h3>
      <button className="btn btn-primary me-2" onClick={() => handleClick("Save")}>
        Save Employee
      </button>
      <button className="btn btn-danger" onClick={() => handleClick("Delete")}>
        Delete Employee
      </button>
    </div>
  );
}

  )
}

export default Task3