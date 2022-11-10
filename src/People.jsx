import { useState, useEffect } from 'react';

function People() {
  const [people, setPeople] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(true);

  const getPeople = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    setHasLoaded(!hasLoaded);
    setPeople(result);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {hasLoaded ? (
          <p>Loading...</p>
        ) : (
          people.map((person) => {
            return <li key={person.id}>{person.name}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default People;
