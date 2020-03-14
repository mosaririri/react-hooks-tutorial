import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset= () => setCount(0)
  const devide3 = () => setCount(count % 3 === 0 ? count / 3 : count)
  return (
    <> 
      <div>
        count: {count}
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>reset</button>
        <button onClick={devide3}>3の倍数のときに3で割る</button>

      </div>
    </>
    
  );
}

export default App;
