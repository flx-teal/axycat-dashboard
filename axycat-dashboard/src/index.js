import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Home from './components/Home';
import Details from './components/Details'
import NewProjectPopUp from './components/NewProjectPopUp/NewProjectPopUp';
import Listing from './components/Listing';
import Error from './components/Error';
import TitleComponent from './components/details-components/TitleComponent'
import ButtonComponent from './components/details-components/ButtonComponent'
import './index.scss'


class App extends Component {
  activeLink() {}
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
              <NavLink className='nav-link' activeClassName="active" to={{ pathname: "./detail" }}>
                Details
              </NavLink>
              <NavLink className='nav-link' activeClassName="active" to={{ pathname: "./listing" }}>
                Listing
              </NavLink>
              <NavLink className='nav-link'
                activeClassName="active"
                to={{ pathname: "./newproject" }}>
                NewProject
              </NavLink>
            </nav>
            <div className='buttons-container'>
                <ButtonComponent name='Sign up'/>
                <ButtonComponent name='Login'/>
            </div>
          </header>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/detail" component={Details} />
            <Route path="/listing" component={Listing} />
            <Route path="/newproject" component={NewProjectPopUp} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
