import React from 'react'
import pdf from '../assets/pdf/dummy_tos.pdf'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const Viewpdf = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
        <div style={{ height: '750px' }}>
            <Viewer
                fileUrl={pdf}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
      
        

    // <object data={pdf} type='application/pdf' width='100%' height='auto'>
    // <p></p> </object>
    )
}

export default Viewpdf