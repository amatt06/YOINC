// NPM MODULES
import React, {Component} from 'react';
import logo from '../assets/Logo.svg';
import "./Upload.css";
import upload from '../assets/uploadIcon.svg';

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
                <h1 className='upload-header'>File Upload</h1>
                <span className='drag-area'>Select a file or drag here</span>
                <button className='choose-file'>Choose a File</button>
                <img src={upload} className="upload-icon" alt="upload-icon" height="206px"/>


            </div>
        );
    }
}