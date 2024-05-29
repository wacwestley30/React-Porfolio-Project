import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import myResume from '../assets/SoftwareDeveloperResume.pdf';

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '750px',
                    }}
                >
                    <Viewer fileUrl={myResume} />
                </div>
            </Worker>
        </div>
    );
}