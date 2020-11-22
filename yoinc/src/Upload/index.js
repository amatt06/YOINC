// NPM MODULES
import React, {Component} from 'react';
import logo from '../assets/Logo.svg';
import Routes from "../Routes";

export default class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='full-screen'>
                <img src={logo} className="App-logo" alt="logo" height="40px"/>
                <span className='header-text'>YOINC</span>
            </div>
        );
    }
}