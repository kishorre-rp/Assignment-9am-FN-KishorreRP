import React from 'react'

function Task3({ name, age, children }) {  
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4>{name}</h4>
        <p><strong>Age:</strong> {age} years</p>
        <p className="text-muted">{children}</p>
      </div>
    </div>
  );
}

export default Task3
