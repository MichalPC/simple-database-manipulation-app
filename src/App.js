import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <header className="Header-container">
        <div className="Header-text">
          <Link className='Link-button' to={'/'}> 
            <h1>Simple DB App</h1>
          </Link>
          <div className='Button-container'>
              <Link className='Link-button' to={'/signup'}> 
              <button>
                  <p>Sign Up</p>
                </button> 
              </Link>
              <Link className='Link-button' to={'/login'}> 
                <button>
                  <p>Login</p>
                </button> 
              </Link>
          </div>
        </div>
      </header>
      <main className="Main-container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
