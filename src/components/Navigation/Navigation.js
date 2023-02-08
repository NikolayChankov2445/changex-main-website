import * as React from "react";
import {useEffect, useState, useContext} from "react";
import {Nav, Navbar} from "rsuite";
import { Link } from "gatsby";
import Modal from 'react-bootstrap/Modal';
import { iconItems, menuItems, mobileIcon } from "./navItems";
import ScanQrCode from "../QrCode/ScanQrCode";
import styled from "styled-components";
import ChangeXLogoColor from "../../../static/assets/images/common/Logo_navigation.svg";
import QRBlack from "../../../static/assets/images/common/icn-qr-black.svg";
import MenuIcon from "../../../static/assets/images/common/Menu-Icon_1Menu Icon.png";
import ExternalLink from "../../../static/assets/images/common/external_link.svg";
import {PricesContext} from "../Context/PriceContext";
import {ApyContext} from "../Context/ApyContext";
import 'rsuite/dist/rsuite.min.css';
import PriceApyBtns from "../Context/PriceApyBtns";

const NavMobile = styled.div`
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
`

export default function Navigation() {
    const [openNav, setIsNavOpen] = useState(false);
    const [price, setPrice] = useState('0.0000');
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

    },[coinsContextPrices])

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
                                                src={ChangeXLogoColor}
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
                                                    id={index.toString()}
                                                >
                                                    {menu.submenu.length > 0 ?
                                                        <Nav.Menu title={menu.title} className={`${activeKey === menu.id ? 'active' : ''} nav-dropdown`}>
                                                            {menu.submenu.map((item, index)=> {
                                                            return (
                                                                    <Nav.Item>
                                                                        {item.link === false ?
                                                                            <Link activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={item.url} key={index.toString()}>
                                                                                {item.title}
                                                                            </Link>
                                                                        :
                                                                            <>
                                                                                <a  rel="noreferrer" href={item.url}  target="_blank" key={index.toString()}>
                                                                                    {item.title}
                                                                                </a>
                                                                                <img
                                                                                    alt="changex coingecko"
                                                                                    className="coingecko"
                                                                                    src={ExternalLink}
                                                                                />
                                                                            </>
                                                                        }

                                                                    </Nav.Item>

                                                            )
                                                        })}
                                                        </Nav.Menu>
                                                        :
                                                        <Nav.Item className={`${activeKey === menu.id ? 'active' : ''}`}>
                                                            <Link activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={menu.url} key={index.toString()}>
                                                                {menu.title}
                                                            </Link>
                                                        </Nav.Item>
                                                    }
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
                                            <strong> {apyContext}%</strong>
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
                                        className="nav_download-item transparent"
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
                                    <button
                                        id="changex_qr"
                                        onClick={openNavDropDown}
                                        className="transparent">
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
                <NavMobile className={`${openNav ? "" : "hide"} fixed`}>
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
                                                className="nav_menu-links navDisplay"
                                                id={`changex_nav_${index.toString()}`}
                                            >
                                                {menu.submenu.length > 0 ?
                                                    <Nav.Menu placement={"rightStart"} title={menu.title} className={`${activeKey === menu.id ? 'active' : ''} nav-dropdown`}>
                                                        {menu.submenu.map((item, index)=> {
                                                            return (

                                                                <Nav.Item>
                                                                    {item.link === false ?
                                                                        <Link activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={item.url} key={index.toString()}>
                                                                            {item.title}
                                                                        </Link>
                                                                        :
                                                                        <>
                                                                            <a  rel="noreferrer" href={item.url}  target="_blank" key={index.toString()}>
                                                                                {item.title}
                                                                            </a>
                                                                            <img
                                                                                alt="changex coingecko"
                                                                                className="coingecko"
                                                                                src={ExternalLink}
                                                                            />
                                                                        </>
                                                                    }

                                                                </Nav.Item>

                                                            )
                                                        })}
                                                    </Nav.Menu>
                                                    :
                                                    <Nav.Item className={`${activeKey === menu.id ? 'active' : ''}`}>
                                                        <Link activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={menu.url} key={index.toString()}>
                                                            {menu.title}
                                                        </Link>
                                                    </Nav.Item>
                                                }
                                            </div>
                                        );
                                    })}
                                </>
                            </Nav>
                        </Navbar>
                        <div className="infoWrapper">
                            <div className="flex margin-small">
                                <PriceApyBtns withDropdown={false} />
                            </div>
                        </div>
                        <div className="infotainment">
                            <div className="nav_right-wrapper margin-top margin-huge">
                                <div className="button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                    {mobileIcon.map((icon, index) => {
                                        return (
                                            <>
                                                <button
                                                    className="button-store background-color-black"
                                                    key={index}>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={icon.href}>
                                                        <img
                                                            src={icon.src || ''}
                                                            alt={`Changex ${icon.id}`}
                                                            loading="lazy">
                                                        </img>
                                                    </a>
                                                </button>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </nav>
                </NavMobile>
                <Modal id="Changex_modal" show={showModal} centered={true} onHide={handleClose} animation={true}>
                    <>
                        <ScanQrCode
                            className=""
                            showModal={showModal}
                            setShowModal={setShowModal}
                            aria-labelledby="Changex Qr Code Download"
                            aria-describedby="Changex Qr Code">
                        </ScanQrCode>
                    </>
                </Modal>
            </div>
        </div>
    );
}
