import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details'
import Listing from './components/Listing';
import Error from './components/Error';
import TitleComponent from './components/details-components/TitleComponent'
import './index.scss'
import ProjectItemNavigation from './components/ProjectItemNavigation/ProjectItemNavigation';
import ReportPdf from './components/ReportPdf';
import MainUserStatus from './components/Authentication/MainUserStatus';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header id='header'>
                        <div className='logo'>
                            <TitleComponent title='AxyCAT'/>
                        </div>
                        <nav className='navigation'>
                            <NavLink className='nav-link' to='/'>
                                Home
                            </NavLink>
                            <NavLink className='nav-link' to='/#'>
                                About Us
                            </NavLink>
                            <NavLink className='nav-link' to='/#'>
                                Case Study
                            </NavLink>
                            <NavLink className='nav-link' to='/#'>
                                Contact Us
                            </NavLink>
                        </nav>
                        <MainUserStatus/>
                    </header>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/detail' component={Details}/>
                        <Route path='/listing' component={Listing}/>
                        <Route path='/project-details' component={ProjectItemNavigation}/>
                        <Route path={`/report-for-pdf/:projectId`} component={ReportPdf}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
