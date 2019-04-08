import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';
import NewProjectPopUp from './components/NewProjectPopUp';
import Listing from './components/Listing';
import Error from './components/Error';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/detail" component={Details}/>
                <Route path="/listing" component={Listing}/>
                <Route path="/newproject" component={NewProjectPopUp}/>
                <Route component={Error}/>
            </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));