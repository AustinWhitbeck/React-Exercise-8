import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DetailsRoute from './components/DetailsRoute/DetailsRoute';
import Header from './components/Header/Header';
import MenuRoute from './components/Menu/MenuRoute';
import { MenuContextProvider } from './context/MenuContextProvider';

function App() {
  return (
    <Router>
      <Header/>
      
      <Switch>
        <Route path="/" exact>
          <MenuContextProvider>
            <MenuRoute/>
          </MenuContextProvider>
        </Route>

        <Route path="/details/id:" exact>
          <MenuContextProvider>
            <DetailsRoute/>
          </MenuContextProvider>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
