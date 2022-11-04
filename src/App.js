import { useState } from 'react';
import Clicker from './Clicker';

function App({ children }) {
  const [hasClicker, setHasClicker] = useState(true);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  let colorA = `hsl(${Math.round(Math.random() * 360)}deg, 100%, 70%)`;
  let colorB = `hsl(${Math.round(Math.random() * 360)}deg, 100%, 70%)`;
  let colorC = `hsl(${Math.round(Math.random() * 360)}deg, 100%, 70%)`;

  return (
    <>
      {children}
      <button onClick={toggleClickerClick}>
        {hasClicker ? 'Hide' : 'Show'} Clicker
      </button>
      {hasClicker && (
        <>
          <Clicker keyName="countA" color={colorA} />
          <Clicker keyName="countB" color={colorB} />
          <Clicker keyName="countC" color={colorC} />
        </>
      )}
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

// wp wirelessadmin / VEL$SDJC%ZH3
