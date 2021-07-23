import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MenuRoute from './components/Menu/MenuRoute';
import { MenuContext, MenuContextProvider } from './context/MenuContextProvider';

function App() {
  return (
    <Router>
      <Header/>
      
      <Route path="/" exact>
        <MenuContextProvider>
          <MenuRoute/>
        </MenuContextProvider>
      </Route>

    </Router>
  );
}

export default App;
