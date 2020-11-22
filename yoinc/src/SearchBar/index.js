// NPM MODULES
import React, {Component} from 'react';
import logo from '../assets/Logo.svg';
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Add testing data to state
        this.state = {};
    }

    handleSearch(){
        // handle search
    }

    render() {
        return (
            <div className='full-screen'>
                <img src={logo} className="App-logo" alt="logo" height="40px"/>
                <span className='header-text'>YOINC</span>

                ADD SEARCH BAR COMPONENT HERE
                <input type="text"/>
                <button type="submit" onClick={() => this.handleSearch()}>Go</button>

            </div>
        );
    }
}