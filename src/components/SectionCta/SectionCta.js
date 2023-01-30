import * as React from "react";

import { useState } from "react";
import DownloadApple from "../../images/common/DW-Apple-Lime.svg";
import DownloadGoogle from "../../images/common/DW-Google-Lime.svg";
import ScanQRCode from "../../images/common/download-qr.svg";
import ScanQrCode from "../QrCode/ScanQrCode";
import Modal from 'react-bootstrap/Modal';

export default function SectionCta() {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    const handleClose = () => setShowModal(false);

    return (
        <section id="cta" className="section_cta">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large is-cta-section">
                        <div className="max-width-medium">
                            <div className="margin-top-small">
                                <h2 className="heading-style-h2 highlight text-color-grey">
                                    Take Control Of Your Money
                                </h2>
                                <p className="text-color-grey text-size-xlarge margin-vertical margin-large">
                                    Changex’s non-custodial wallet provides you with a fiat-crypto on-ramp, an ever-growing list of assets, and passive income like never before. Your keys, your crypto - always.
                                </p>
                            </div>
                            <div className="button-group-hero centered-items margin-top margin-large spread align-left">
                                <button
                                    className="button-store is-lime-background"
                                ><a
                                    target="_blank"
                                    rel="noreferrer"
                                    alt="Changex Apple Store"
                                    href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"

                                >
                                    <img
                                        src={DownloadApple || ''}
                                        alt="Changex Apple app"
                                        loading="lazy"
                                    ></img>
                                </a>
                                </button>
                                <button
                                    className="button-store is-lime-background"
                                ><a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://play.google.com/store/apps/details?id=io.changex.app"
                                >
                                    <img
                                        src={DownloadGoogle  || ''}
                                        alt="Changex Google app"
                                        loading="lazy"
                                    ></img>
                                </a>
                                </button>
                            </div>
                        </div>
                        <div className="cta-image">
                            <img
                                src={ScanQRCode || ''}
                                alt={"cta"}
                            ></img>
                            <button
                                onClick={openModal}
                                className="button is-qr-cta w-inline-block"
                            >
                                <img
                                    src=""
                                    loading="lazy"
                                    width="75"
                                    alt="Changex QR code"
                                    className="qr-small-cta"
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal id="Changex_modal" show={showModal} onHide={handleClose} animation={true}>
                <>
                    <ScanQrCode
                        className="section-scanpopup wf-section"
                        showModal={showModal}
                        setShowModal={setShowModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                    </ScanQrCode>
                </>
            </Modal>
        </section>
    );
}
