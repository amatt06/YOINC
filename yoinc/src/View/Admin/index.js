// NPM MODULES
import React, {Component} from 'react';
import logo from '../../assets/Logo.svg';
import "../view.css";

export default class AdminView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='full-screen'>
            <img src={logo} className="App-logo" alt="logo" height="40px"/>
            <span className='header-text'>YOINC</span>
        ADD PFD VIEWER HERE
        </div>
    );
    }
}
