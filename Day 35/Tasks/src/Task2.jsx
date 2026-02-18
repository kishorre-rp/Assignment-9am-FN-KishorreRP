import { useState } from 'react';

function Task2() {
  
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded shadow">
      <h2>Employee Counter: {count}</h2>
      <button 
        className="btn btn-success me-2" 
        onClick={() => setCount(count + 1)}
      >
        + Hire
      </button>
      <button 
        className="btn btn-warning me-2" 
        onClick={() => setCount(count - 1)}
      >
        - Fire
      </button>
      <button 
        className="btn btn-secondary" 
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Task2;
