import {useState} from 'react';
import {AuthProvider} from './contexts/auth';
import RoutesApp from './routes';
import GlobalStyles from './styles/global';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
