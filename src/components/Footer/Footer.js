import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

import {menuItemsFooter, menuItemsFooter2, menuItemsFooterSocial} from "../Navigation/navItems";
import ScanQrCode from "../QrCode/ScanQrCode";
import ChangeXLogoColor from "../../../static/assets/images/common/Logo_footer.svg";
import DownloadApple from "../../../static/assets/images/common/DW-Apple.svg";
import DownloadGoogle from "../../../static/assets/images/common/DW-Google.svg";
import QRBlack from "../../../static/assets/images/common/icn-qr-black.svg";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const ImageSocial = styled.img`
  object-fit: cover;
`

export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    const handleClose = () => setShowModal(false);

    return (
        <div className="section_footer wf-section">
            <div className="padding-top">
                <div className="container-large-footer">
                    <img src={ChangeXLogoColor  || ''} alt="changex logo" loading="lazy"></img>
                    <div className="padding-section-small is-footer">
                        <div className="w-layout-grid footer-grid">
                            <div className="copyright">
                                <div className="text-size-small text-color-darkgrey">
                                    Copyright © 2023, Olympus Capital JSC,
                                    <br /> All trademarks and copyrights belong to their
                                    respective owners.
                                </div>
                            </div>
                            <div className="button-group footer-group">
                                {menuItemsFooter.map((menu,index) => {
                                    return (
                                        <Link
                                            key={index}
                                            to={menu.url || ''}
                                            className="button footer-links w-inline-block"
                                        >
                                            {menu.title}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="button-group footer-group">
                                {menuItemsFooter2.map((item, index) => {
                                    return (
                                        item.link === true ?
                                            <Link
                                                id={item.title}
                                                key={index}
                                                target="_blank"
                                                rel="noreferrer"
                                                to={item.url  || ''}
                                                className={item.className}
                                            >
                                                <div className="text-color-black">{item.title}</div>
                                            </Link>
                                            :
                                            <a id={item.title}
                                               key={index}
                                               target="_blank"
                                               rel="noreferrer"
                                               href={item.url}
                                               className={item.className}>
                                                <div className="text-color-black">{item.title}</div>
                                            </a>
                                    )
                                })}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://token.changex.io/"
                                    className="button is-secondary portal w-inline-block"
                                >
                                    <div>Investor&#x27;s Portal</div>
                                </a>
                            </div>
                            <div className="button-group-store-footer centered-items margin-top spread align-left social">
                                <button
                                    className="button-store-footer background-color-black"
                                ><a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"

                                >
                                    <img
                                        src={DownloadApple || ''}
                                        alt="Apple"
                                        width="150"
                                        height="45"
                                        loading="lazy"
                                    ></img>
                                </a>
                                </button>
                                <button
                                    className="button-store-footer background-color-black"
                                ><a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://play.google.com/store/apps/details?id=io.changex.app"
                                >
                                    <img
                                        src={DownloadGoogle || ''}
                                        alt="Google"
                                        width="150"
                                        height="45"
                                        loading="lazy"
                                    ></img>
                                </a>
                                </button>

                                <button
                                    onClick={openModal}
                                    className="button is-qr-footer w-inline-block"
                                >
                                    <img
                                        src={QRBlack}
                                        loading="lazy"
                                        width="75"
                                        alt="Changex QR code"
                                        className="qr-small"
                                    ></img>
                                </button>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="w-col w-col w-col-stack">
                                <div className="button-group">
                                    <div className="w-col-3 legal_links_wrapper">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://changex-io.web.app/privacy.html"
                                            className="legal_links text-size-small"
                                        >
                                            Privacy Policy
                                        </a>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://changex-io.web.app/terms.html"
                                            className="legal_links text-size-small"
                                        >
                                            Terms of Service
                                        </a>
                                    </div>
                                    <div className="w-col-stack w-col  button-group footer-links">

                                        {menuItemsFooterSocial.map((item, index) => {
                                            return (
                                                <a
                                                    id={item.id}
                                                    key={index}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href={item.url}
                                                    className={item.className}
                                                >
                                                    <ImageSocial
                                                        className=""
                                                        src={item.src  || ''}
                                                        alt={`${item.id} changex`}
                                                        loading="lazy"
                                                    ></ImageSocial>
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal id="Changex_modal" show={showModal} onHide={handleClose} animation={true}>
                <>
                    <ScanQrCode
                        showModal={showModal}
                        setShowModal={setShowModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                    </ScanQrCode>
                </>
            </Modal>
        </div>
    );
}
