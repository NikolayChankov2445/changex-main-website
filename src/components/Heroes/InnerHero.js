import * as React from "react";
import { useState } from "react";

import { advantages } from "../SectionToken/tokenItems";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { BsArrowDown } from "react-icons/bs";
import QRWhite from "../../../static/assets/images/common/icn-qr-white.svg";
import PriceApyBtns from "../Context/PriceApyBtns";
import {PrimaryButton} from "../Buttons/Primary";
import SectionAdvantages from "../SectionAdvantages/SectionAdvantages";
import DownloadApple from "../../../static/assets/images/common/DW-Apple.svg";
import DownloadGoogle from "../../../static/assets/images/common/DW-Google.svg";
import Modal from 'react-bootstrap/Modal';
import ScanQrCode from "../QrCode/ScanQrCode";

export default function InnerHero( { heroObj } ){

    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    const handleClose = () => setShowModal(false);

    return (
        <section id="inner-hero" className={`${heroObj.class === 'tokenPage' ? 'vh-responsive-token' : 'vh-responsive'}`}>
            <div className="padding-global relative">
                <div className="container-large ">
                    <div id="inner-hero-title" className="hero_content-wrapper padding-vertical padding-large">
                        <div className={`${heroObj.class === 'walletPage' ? 'title_wrapper_hero-wallet' : 'title_wrapper_hero'} max-width-large`} >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <h6 className="heading-style-h6 text-desktop-mobile text-color-primary text-left-mobile">
                                        {heroObj.titleObj.h1}
                                    </h6>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-desktop-mobile text-left-mobile">
                                            {heroObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-desktop-mobile text-left-mobile text-weight-normal">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                                <div className={`${heroObj.appBtnsVisible ? '' : 'hide'} button-group margin-top margin-large spread max-width-full-mobile-landscape`}>
                                    <button
                                        className="button-store background-color-black"
                                    ><a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                    >
                                        <img
                                            src={DownloadApple || ''}
                                            alt="Apple"
                                            loading="lazy"
                                        ></img>
                                    </a>
                                    </button>
                                    <button
                                        className="button-store background-color-black"
                                    ><a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://play.google.com/store/apps/details?id=io.changex.app"
                                    >
                                        <img
                                            src={DownloadGoogle || ''}
                                            alt="Google"
                                            loading="lazy"
                                        ></img>
                                    </a>
                                    </button>
                                    <button onClick={openModal}
                                            className={`${heroObj.appBtnsVisible && heroObj.class === "walletPage" ? "" : "hide"} button is-qr-hero w-inline-block`}>
                                        <img src={QRWhite} loading="lazy" width="75"
                                             alt="Changex QR code"
                                             className="qr-big">
                                        </img>
                                    </button>
                                </div>
                                <div className={`${heroObj.scrollBtnText && heroObj.class === "tokenPage" ? '' : "hide"} infoWrapper`}>
                                    <div className="infoInnerWrapper grid-2">
                                        <PriceApyBtns />
                                    </div>
                                </div>
                                <div className={`${heroObj.scrollBtnText && heroObj.class !== "tokenPage" ? '' : 'hide'} tabs-menu goToLink w-tab-menu`}>
                                    <div onClick={()=> {scrollTo(heroObj.scrollToID) }} >
                                        <PrimaryButton text={heroObj.scrollBtnText} url={''} icon={<BsArrowDown/>} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${heroObj.class === "tokenPage" ? '' : "hide"}`}>
                            <SectionAdvantages pageClass={heroObj.class} classGrid={'card-grid-token'} title={'A community-centric token'} advantages={ advantages }/>
                        </div>
                    </div>
                </div>
                <div className={`${heroObj.class} absolute`}></div>
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
        </section>
    );
}
