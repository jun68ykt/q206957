import React from 'react';

const Counter = ({ name, count=0, increment, decrement }) => {
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => { increment(name) }}>+1</button>
      <button onClick={() => { decrement(name) }}>-1</button>
    </div>
  );
};

export default Counter
