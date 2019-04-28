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
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import Issues from "./components/Pages/Issues";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

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
                            <NavLink className='nav-link' activeClassName="active" to={{pathname: "./detail"}}>
                                Details
                            </NavLink>
                            <NavLink className='nav-link' activeClassName="active" to={{pathname: "./listing"}}>
                                Listing
                            </NavLink>
                            <NavLink className='nav-link'
                                     activeClassName="active"
                                     to={{pathname: "./newproject"}}>
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
                        <Route path="/issues" component={Issues}/>
                        <Route component={Error}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
