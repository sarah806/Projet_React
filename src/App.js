import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid justify-content-center">
          <Link class="nav-link" to="/">Home <i class="fa-solid fa-house"></i></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" to="/create">Create <i class="fa-solid fa-plus"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/read">Read <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main">
        <h1 className="main-header"> <i class="fa-solid fa-feather"></i> React Crud Operations <i class="fa-solid fa-feather"></i></h1>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
