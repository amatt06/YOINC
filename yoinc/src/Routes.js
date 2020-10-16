// NPM MODULES
import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import AppliedRoutes from "./AppliedRoutes";
import Welcome from "./Welcome";

export default class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <AppliedRoutes path='/' exact component={Welcome}/>
                    <Route component={Welcome}/> { /* Catch all unmatched routes */}
                </Switch>
            </Fragment>
        );
    }
}
