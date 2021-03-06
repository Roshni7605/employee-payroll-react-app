import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                 Step 1
                <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
