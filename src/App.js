import { useState } from 'react';
import Clicker from './Clicker';

function App() {
  const [hasClicker, setHasClicker] = useState(true);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  return (
    <>
      <button onClick={toggleClickerClick}>
        {hasClicker ? 'Hide' : 'Show'} Clicker
      </button>
      {hasClicker ? <Clicker /> : null}
    </>
  );
}

export default App;
