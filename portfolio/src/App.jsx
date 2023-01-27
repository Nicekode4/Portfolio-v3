import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './AppRouter/AppRouter';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <AppRouter />
    </div>
    </BrowserRouter>
  );
}

export default App;
