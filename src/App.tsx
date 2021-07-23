import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MenuRoute from './components/Menu/MenuRoute';

function App() {
  return (
    <Router>
      <Header/>
      
      <Route path="/" exact>
          <MenuRoute/>
      </Route>

    </Router>
  );
}

export default App;
