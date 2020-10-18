// NPM MODULES
import React, {Component} from 'react';
import logotransparent from '../assets/logo-transparent.png';
import Routes from "../Routes";

import Upload from "../Upload/Upload";

export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='full-screen'>
                <img src={logotransparent} className="App-logo" alt="logo" height="40px"/>
                <span className='header-text'>YOINC</span>
                <h1 className='welcome-text'>
                    Welcome!
                </h1>
                <button className='welcome-button'>Lets get started</button>
                <h2 className='bottom-text'>
                        information about things
                    </h2>
            </div>
        );
    }
}
