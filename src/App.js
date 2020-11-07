import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <header className="Header-container"> 
        <h1 className="Header-text">Hello DB World</h1>
      </header>
      <main className="Main-container">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
