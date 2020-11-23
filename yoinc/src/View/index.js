// NPM MODULES
import React, {Component} from 'react';
import logo from '../assets/Logo.svg';
import AdminView from "./Admin";
import PublicView from "./Public";

import "./view.css";

export default class View extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <PublicView/>
        );
    }
}