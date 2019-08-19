import React from 'react';

const Counter = ({ name, count, increment, decrement }) => {
  return (
    <div>
      <span>{count[name] || 0}</span>
      <button onClick={() => { increment(name) }}>+1</button>
      <button onClick={() => { decrement(name) }}>-1</button>
    </div>
  );
};

export default Counter
