import './Clicker.css';
import { useEffect, useState, useRef } from 'react';

function Clicker({ keyName, color = 'green', increment }) {
  const [count, setCount] = useState(
    Number(localStorage.getItem(keyName) ?? 0)
  );

  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.style.backgroundColor = 'papayawhip';
    buttonRef.current.style.color = 'salmon';
    buttonRef.current.style.padding = '10px 20px';
    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  const clickHandler = () => {
    setCount(count + 1);
    increment();
  };

  return (
    <div>
      <p style={{ color: color }}>Count is : {count}</p>
      <button ref={buttonRef} onClick={clickHandler}>
        Click Me!
      </button>
    </div>
  );
}

export default Clicker;
