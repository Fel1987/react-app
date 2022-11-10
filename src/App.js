import { useState, useMemo } from 'react';
import Clicker from './Clicker';
import People from './People';

function App({ children, clickersCount }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const colors = useMemo(() => {
    const colors = [];

    for (let i = 0; i < clickersCount; i++) {
      colors.push(`hsl(${Math.round(Math.random() * 360)}deg, 100%, 70%)`);
    }

    return colors;
  }, [clickersCount]);

  return (
    <>
      {children}

      <div>Total count: {count}</div>
      <button onClick={toggleClickerClick}>
        {hasClicker ? 'Hide' : 'Show'} Clicker
      </button>
      {hasClicker && (
        <>
          {[...Array(clickersCount)].map((value, index) => {
            return (
              <Clicker
                key={index}
                increment={increment}
                keyName={`count${index}`}
                color={colors[index]}
              />
            );
          })}
        </>
      )}
      <People />
    </>
  );
}

export default App;

// Please contact the nameservers end and add A record for the domain to server IP 209.59.140.74

// ns;
// ns22.digicertdns.com
// ns23.digicertdns.net
// ns21.digicertdns.com
// ns20.digicertdns.com
// ns24.digicertdns.net
// ns25.digicertdns.net

// https://209.59.140.74:2083
// awirelessadmin
// X4#j;c{1m!7-

// wp-staging wirelessadmin / VEL$SDJC%ZH3
// wp-main wirelessadmin / VEL$SDJC%ZH3
