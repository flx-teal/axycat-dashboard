import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

import Home from './components/Home';
import Details from './components/Details'
import NewProjectPopUp from './components/NewProjectPopUp/NewProjectPopUp';
import Listing from './components/Listing';
import Error from './components/Error';
import TitleComponent from './components/details-components/TitleComponent'
import ButtonComponent from './components/details-components/ButtonComponent'
import './index.scss'
//import Issues from "./components/Pages/Issues";
import ProjectItemNavigation from "./components/ProjectItemNavigation/ProjectItemNavigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header id='header'>
            <div className="logo">
              <TitleComponent title='AxyCAT'/>
            </div>
            <nav className="navigation">
              <NavLink className='nav-link' activeClassName="active" to="/">
                Home
              </NavLink>
              <NavLink className='nav-link' activeClassName="active" to="/issues">
                Issues
              </NavLink>
              <NavLink className='nav-link' activeClassName="active" to="/detail">
                Details
              </NavLink>
              <NavLink className='nav-link' activeClassName="active" to="/listing">
                Listing
              </NavLink>
              <NavLink className='nav-link'
                       activeClassName="active"
                       to="/newproject">
                NewProject
              </NavLink>
            </nav>
            <div className='buttons-container'>
              <ButtonComponent class='btn btn-blue' name='Sign up'/>
              <ButtonComponent class='btn btn-white' name='Login'/>
            </div>
          </header>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/detail" component={Details}/>
            <Route path="/listing" component={Listing}/>
            <Route path="/newproject" component={NewProjectPopUp}/>
            {/*<Route path="/issues" component={Issues}/>*/}
            <Route path="/project-details" component={ProjectItemNavigation}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
