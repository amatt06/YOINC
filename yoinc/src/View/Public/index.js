// NPM MODULES
import React, {Component} from 'react';
import logo from '../../assets/Logo.svg';

import Hotspot from '../Hotspots/Hotspot';
import "../view.css";

export default class PublicView extends Component {
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
            <Hotspot/>
            </div>
    );
    }
}
