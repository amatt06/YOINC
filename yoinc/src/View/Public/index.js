// NPM MODULES
import React, {Component, useState, useEffect} from 'react';
import logo from '../../assets/Logo.svg';
import Hotspot from '../Hotspots/Hotspot';
import "../view.css";
import {pdfjs, Document, Page} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PublicView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    PDFView() {
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);
    }

    onDocumentLoadSuccess({numPages}){
        let setNumPages = null;
        setNumPages(numPages);
    }




    render() {

        let setNumPages, onDocumentLoadSuccess, pageNumber, numPages = null;

        return (
            <div className='full-screen'>
                <img src={logo} className="App-logo" alt="logo" height="40px"/>
                <span className='header-text'>YOINC</span>
                <Document file='aldi.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber}/>
                </Document>
                <p> Page {pageNumber} of {numPages}</p>
                <Hotspot/>
            </div>);
    }
}
