import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <header className="Header-container"> 
        <h1 className="Header-text">Hello DB World</h1>
        <div className='Button-container'>
          <Link className='SignUp-button' to={'/signup'}> Sign Up </Link>
          <Link className='Login-button' to={'/home'}> Login </Link>
        </div>
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
