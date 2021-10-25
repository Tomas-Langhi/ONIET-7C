import './App.css';

// React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Bootstrap modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Components
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <section class="py-5 text-center container">
        <Switch>
          <Route path='/barrios' component={Table} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
