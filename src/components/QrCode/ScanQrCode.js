import * as React from "react";

export  default function ScanQrCode ({showModal, setShowModal}) {
    return (
        <>
            {showModal ?
                <div style={{display: "flex"}}  className="section-scanpopup wf-section">
                    <div>
                        <div className="modal-scan-wrapper">
                            <div className="padding-small">
                                <div
                                    className="modal-scan-imgwrap"><img
                                    src="https://uploads-ssl.webflow.com/63315e7a42bc6afd0341c3bd/633668ff7172a17634704dfb_download-qr.svg"
                                    loading="lazy" alt="changex qr code"></img></div>
                                <div
                                    className="modal-scan-heading max-width-small"><h3
                                    className="heading-style-h5 margin-vertical margin-small">Scan to Download Changex</h3>
                                </div>
                                <button onClick={() => setShowModal(prev => !prev)} style={{opacity: 1}}
                                        className="button is-secondary gray max-width-full w-inline-block">
                                    <div>Close</div>
                                </button>
                            </div>
                            <button onClick={() => setShowModal(prev => !prev)}  className="close-link w-inline-block">
                                <img
                                    src="https://uploads-ssl.webflow.com/63315e7a42bc6afd0341c3bd/63366db0841f5102c5002c07_icn-close.svg"
                                    loading="lazy" alt="">
                                </img>
                            </button>
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}
