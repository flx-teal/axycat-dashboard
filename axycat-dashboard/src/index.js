import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details'
import Listing from './components/Listing';
import Error from './components/Error';
import TitleComponent from './components/details-components/TitleComponent'
import './index.scss'
import ProjectItemNavigation from "./components/ProjectItemNavigation/ProjectItemNavigation";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false,
            isLogin: false
        };
    }

    handleSignUp = () => {
        this.setState(prevState => ({
            isSignUp: !prevState.isSignUp
        }));
    };

    handleLogin = () => {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin
        }));
    };

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
                            <NavLink className='nav-link' to="/#">
                                About Us
                            </NavLink>
                            <NavLink className='nav-link' to="/#">
                                Case Study
                            </NavLink>
                            <NavLink className='nav-link' to="/#">
                                Contact Us
                            </NavLink>
                            <NavLink className='nav-link' to="/listing">
                                Listing
                            </NavLink>
                        </nav>
                        <div className='buttons-container'>

                            <button onClick={this.handleSignUp} className='btn btn-blue' name='Sign up'>Sing Up</button>
                            <div>{this.state.isSignUp && <SignUp handleSignUp={this.handleSignUp}/>}</div>

                            <button onClick={this.handleLogin} className='btn btn-white' name='Sign up'>Login</button>
                            <div>{this.state.isLogin && <Login handleLogin={this.handleLogin}/>}</div>

                        </div>
                    </header>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/detail" component={Details}/>
                        <Route path="/listing" component={Listing}/>
                        <Route path="/project-details" component={ProjectItemNavigation}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
