import './Clicker.css';
import { useEffect, useState } from 'react';

function Clicker({ keyName, color = 'green' }) {
  const [count, setCount] = useState(
    Number(localStorage.getItem(keyName) ?? 0)
  );

  useEffect(() => {
    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p style={{ color: color }}>Count is : {count}</p>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
}

export default Clicker;
