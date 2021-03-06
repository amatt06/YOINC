// NPM MODULES
import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import AppliedRoutes from "./AppliedRoutes";
import Welcome from "./Welcome";
import Upload from "./Upload";
import SearchBar from "./SearchBar";
import View from "./View";


export default class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <AppliedRoutes path='/' exact component={Welcome}/>
                    <AppliedRoutes path='/Upload' exact component={Upload}/>
                    <AppliedRoutes path='/Search' exact component={SearchBar}/>
                    <AppliedRoutes path='/View' exact component={View}/>
                    <Route component={Welcome}/> { /* Catch all unmatched routes */}
                </Switch>
            </Fragment>
        );
    }
}
