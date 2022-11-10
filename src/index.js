import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.querySelector('#root'));

root.render(
  <div>
    <App clickersCount={3}>
      <h1>First React App</h1>
      <p>Fancy Title</p>
    </App>
  </div>
);
