import { useEffect, useState } from 'react';

function Clicker() {
  const [count, setCount] = useState(
    Number(localStorage.getItem('count') ?? 0)
  );

  useEffect(() => {}, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count is : {count}</p>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
}

export default Clicker;
