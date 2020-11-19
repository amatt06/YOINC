// NPM MODULES
import React, {Component} from 'react';
import logo from '../assets/Logo.svg';
import Routes from "../Routes";

import UploadView from "../Upload/UploadView";

export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='full-screen'>
                <img src={logo} className="App-logo" alt="logo" height="40px"/>
                <span className='header-text'>YOINC</span>
                <h1 className='welcome-text'>
                    Welcome!
                </h1>
                <button className='welcome-button'>Lets get started</button>
                <span className='bottom-text'>information about things</span>
                {/*<Routes>*/}
                {/*    <switch>*/}
                {/*        <Routes exact path="/" component={Welcome}/>*/}
                {/*        <Routes exact path="/UploadView" component={UploadView}/>*/}
                {/*    </switch>*/}
                {/*</Routes>*/}
            </div>
        );
    }
}
