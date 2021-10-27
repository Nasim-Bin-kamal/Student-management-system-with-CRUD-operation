import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent/AddStudent';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Students from './components/Students/Students';
import UpdateStudent from './components/UpdateStudent/UpdateStudent';

function App() {
  return (
    <div className="mt-5">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/students" component={Students} />
          <Route path="/addStudent" component={AddStudent} />
          <Route path="/student/update/:id" component={UpdateStudent} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
