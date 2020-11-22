import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Upload/Upload.css';
import Routes from './Routes';

class UploadView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className='UploadView'><Routes/></div>
        );
    }
}

export default withRouter(UploadView);