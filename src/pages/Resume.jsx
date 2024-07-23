import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import myResume from '/assets/SoftwareDeveloperResume.pdf';

export default function Resume() {
    return (
        <div className="container">
            <h1 className="my-4">Resume</h1>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '50rem',
                    }}
                >
                    <Viewer fileUrl={myResume} />
                </div>
            </Worker>
            <div className="pt-3">
                <a href={myResume} download="SoftwareDeveloperResume.pdf" className="text-dark">
                    Download Resume
                </a>
            </div>
        </div>
    );
}