import * as React from "react";
import { useEffect, useState, useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "gatsby";

import Modal from 'react-bootstrap/Modal';
import { iconItems, menuItems, mobileIcon } from "./navItems";
import ScanQrCode from "../QrCode/ScanQrCode";
import ChangeXLogoColor from "../../images/common/Logo_navigation.svg";
import QRBlack from "../../images/common/icn-qr-black.svg";
import MenuIcon from "../../images/common/Menu-Icon_1Menu Icon.png";
import ExternalLink from "../../images/common/external_link.svg";
import {PricesContext} from "../Context/PriceContext";
import {ApyContext} from "../Context/ApyContext";

export default function Navigation() {
    const [apy, setApy] = useState("$CHANGE");
    const [openNav, setIsNavOpen] = useState(false);
    const [price, setPrice] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [activeKey, setActiveKey] = useState('');
    const coinsContextPrices = useContext(PricesContext);
    const apyContext = useContext(ApyContext);

    useEffect(()=> {
        if (typeof window !== undefined) {
            window.addEventListener("resize", handleWindowResize);
        }

        const changePrice = coinsContextPrices.filter(a => a.id === 'changex');

        if (changePrice.length > 0) {
            setPrice(changePrice[0].current_price.toFixed(4));
        }

        setApy(apyContext);
    },[coinsContextPrices, apyContext])

    function handleWindowResize() {
        if (typeof window !== undefined) {
            if (window.innerWidth >= 907) {
                setIsNavOpen(false);
            }
        }
    }

    function openModal() {
        setShowModal(true);
    }

    const handleClose = () => setShowModal(false);

    function openNavDropDown() {
        if (typeof window !== undefined) {
            setIsNavOpen((current) => !current);
        }
    }

    return (
        <div
            id="navigation"
            className="nav_bar w-nav"
        >
            <div className="is-nav">
                <div className={"container-large"}>
                    <div className="is-nav navHeight">
                        <div className="nav_full-wrapper">
                            <Navbar className="nav_menu-links w-nav-menu navbar-main">
                                <Navbar.Brand href="/" className="nav_left-wrapper">
                                    <div className="nav_brandlink margin-right w-nav-brand">
                                        <Link to="/">
                                            <img
                                                src={ChangeXLogoColor  || ''}
                                                loading="lazy"
                                                alt="ChangeX Logo"
                                                className="nav_logo"
                                            ></img>
                                        </Link>
                                    </div>
                                </Navbar.Brand>
                                <Nav activeKey={activeKey} className={"hide-mobile-landscape"}>
                                    <>
                                      {menuItems.map((menu, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={`nav_menu-links navDisplay ${
                                                        menu.hasLine ? "navItemBorder" : ""
                                                    }`}
                                                    id={menu.id}
                                                >
                                                    <Nav.Item as="li" >
                                                        <Link onClick={()=> {setActiveKey(menu.id )}}  to={menu.url  || ''} eventkey={index.toString()}>
                                                            {menu.title}
                                                        </Link>
                                                    </Nav.Item>
                                                </div>
                                            );
                                        })}
                                    </>
                                </Nav>
                            </Navbar>

                            <div className="nav_right-wrapper">
                                <div className="nav_stats-wrapper">
                                    <div className="padding-small">
                                        <div
                                            id="changexPrice"
                                            className="text-size-tiny changexprice "
                                        >
                                            <span>$CHANGE:</span>
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                className="price-highlight"
                                                href="https://www.coingecko.com/en/coins/changex"
                                            >
                                            <span>
                                              {" "}
                                                ${price}
                                                <img
                                                    alt="changex coingecko"
                                                    className="coingecko"
                                                    src={ExternalLink}
                                                />
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav_stats-wrapper">
                                    <div className="padding-small">
                                        <div
                                            id="changexApy"
                                            className="text-size-tiny text-color-black changexapy"
                                        >
                                            <span>APY:</span>
                                            <strong> {apy}%</strong>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav_download-wrapper w-list-unstyled hide-mobile-landscape">
                                    {iconItems.map((icon, index) => {
                                        return (
                                            <li key={icon.id} id={icon.id} className="nav_download-item">
                                                <a href={icon.href} className={icon.class}>
                                                    <img
                                                        src={icon.src  || ''}
                                                        alt="changex icon"
                                                        loading="lazy"
                                                        width="21"
                                                    ></img>
                                                </a>
                                            </li>
                                        );
                                    })}
                                    <button
                                        onClick={openModal}
                                        id="qrcode"
                                        className="nav_download-item"
                                    >
                                        <img
                                            src={QRBlack  || ''}
                                            className={"nav_download-btn w-inline-block"}
                                            alt="changex qr"
                                            loading="lazy"
                                            width="21"
                                        ></img>
                                    </button>
                                </ul>
                                <div
                                    className="menu-button w-nav-button"
                                    aria-label="menu"
                                    role="button"
                                    tabIndex="0"
                                    aria-controls="w-nav-overlay-0"
                                    aria-haspopup="menu"
                                >
                                    <button id="changex_qr"
                                            onClick={openNavDropDown}>
                                        <img
                                            src={MenuIcon || ''}
                                            width="20"
                                            alt="changex QR code"
                                            className="menu-icon"
                                        ></img>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {openNav && (
                    <div className="w_nav-overlay">
                        <nav
                            role="navigation"
                            className="nav_menu-links-mobile"
                            data-nav-menu-open=""
                        >
                            <Navbar className="navbar-main w-nav-menu">
                                <Nav activeKey={activeKey} className="rs-navbar-mobile">
                                    <>
                                        {menuItems.map((menu, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="mobileNavBtns navDisplay"
                                                    id={menu.id}
                                                >
                                                    <Nav.Item  className={`${activeKey === menu.id ? 'active' : ''}`} onClick={openNavDropDown}>
                                                        <Link  onClick={()=> {setActiveKey(menu.id )}} to={menu.url  || ''} eventKey={index.toString()}>
                                                            {menu.title}
                                                        </Link>
                                                    </Nav.Item>
                                                </div>
                                            );
                                        })}
                                    </>
                                </Nav>
                            </Navbar>
                            <div className="infotainment">
                                <div className="nav_right-wrapper margin-top margin-huge">
                                    <div className="centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                        {mobileIcon.map((icon, index) => {
                                            return (
                                                <a
                                                    key={index}
                                                    href={icon.href}
                                                    id={icon.id}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="button is-store max-width-full-mobile-landscape w-inline-block"
                                                >
                                                    <img
                                                        src={icon.src  || ''}
                                                        loading="lazy"
                                                        alt={icon.id}
                                                        width="150"
                                                    ></img>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
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
            </div>
        </div>
    );
}
