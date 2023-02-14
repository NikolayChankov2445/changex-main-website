import * as React from "react";
import {useEffect, useState, useContext} from "react";
import Nav from 'react-bootstrap/Nav';
import {Container, Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import { Link } from "gatsby";
import Modal from 'react-bootstrap/Modal';
import { iconItems, menuItems, mobileIcon } from "./navItems";
import ScanQrCode from "../QrCode/ScanQrCode";
import $ from "jquery";
import styled from "styled-components";
import ChangeXLogoColor from "../../../static/assets/images/common/Logo_navigation.svg";
import QRBlack from "../../../static/assets/images/common/icn-qr-black.svg";
import MenuIcon from "../../../static/assets/images/common/Menu-Icon_1Menu Icon.png";
import {PricesContext} from "../Context/PriceContext";
import {ApyContext} from "../Context/ApyContext";

import PriceApyBtns from "../Context/PriceApyBtns";

const NavFullWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0.5rem;
  padding-right: 1.2rem;
  z-index: 999;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 0.375rem;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  @media screen and (max-width: 991px) {
    padding-right: 0;
    padding-left: 0;
  }
  @media screen and (max-width: 912px) {
    margin-top: 0 !important;
  }
  @media screen and (max-width: 845px) {
    border-radius: 0;
  }
`

const PriceApyWrapper = styled.div`
    display: flex;
    margin: 0;
  @media screen and (max-width: 600px) {
    padding: 0 0 0 1.313rem;
  }
`

const NavMobile = styled.div`
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
`

const ApyWrapper = styled.div`
  align-self: center;
  display: block;
  @media (max-width: 1024px) {
    display: none;
`

const PriecWrapper = styled.div`
  align-self: center;
  @media (max-width: 320px) {
    display: none;
`

const Price = styled.span`
  font-weight: bold;
  font-size: 16px;
  font-family: var(--font-paragraph);
  color: var(--themeBlueBackgroundColor);
  text-decoration: none;
  margin-left: 3px;
`

const Apy = styled.span`
  font-weight: bold;
  font-size: 16px;
  font-family: var(--font-paragraph);
  color: var(--themeBlueBackgroundColor);
  text-decoration: none;
  margin-left: 3px;
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
            window.addEventListener("scroll", handleScroll);
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

    function handleScroll(e) {
        if (typeof window !== undefined) {
            if(window.top.scrollY > 99) {
                $('#changex_navigation_wrapper').css({'background': '#fff', 'box-shadow': '0.063rem 3px 0 hsla(0, 0%, 76.7%, 0.15)'})
            } else {
                $('#changex_navigation_wrapper').css({'background': 'transparent', 'box-shadow': 'none'})
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
                <div className={"container-large-nav"}>
                    <div className="is-nav navHeight">
                        <NavFullWrapper id="changex_navigation_wrapper">
                            <Navbar className="nav_menu-links nav-menu">
                                <Container>
                                <div className="nav_left-wrapper">
                                    <div className="nav_brandlink margin-right w-nav-brand">
                                        <Link to="/">
                                            <img
                                                src={ChangeXLogoColor}
                                                loading="lazy"
                                                alt="Changex Logo"
                                                className="nav_logo"
                                            ></img>
                                        </Link>
                                    </div>
                                </div>

                                <Nav activeKey={activeKey} className={"hide-mobile-landscape me-auto  navbar-main"}>
                                    <>
                                        {menuItems.map((menu, index) => {
                                            return (
                                                <>
                                                    {menu.submenu.length > 0 ?
                                                        <NavDropdown title={menu.title} className={`${activeKey === menu.id ? 'active' : ''} nav-dropdown`}>
                                                            {menu.submenu.map((item, index)=> {
                                                                return (
                                                                    <div>
                                                                        {item.link === false ?
                                                                            <Link className="nav-link" activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={item.url} key={index.toString()}>
                                                                                {item.title}
                                                                            </Link>
                                                                            :
                                                                            <>
                                                                                <a className="nav-link"
                                                                                   rel="noreferrer"
                                                                                   href={item.url}
                                                                                   target="_blank" key={index.toString()}>
                                                                                    {item.title}
                                                                                </a>
                                                                            </>
                                                                        }

                                                                    </div>

                                                                )
                                                            })}
                                                        </NavDropdown>
                                                        :
                                                            <Link className={`${activeKey === menu.id ? 'active' : ''} nav-link`} activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={menu.url} key={index.toString()}>
                                                                {menu.title}
                                                            </Link>
                                                    }
                                                </>
                                            );
                                        })}
                                    </>
                                </Nav>
                                </Container>
                                <div className="nav_right-wrapper">
                                    <PriecWrapper className="nav_stats-wrapper">
                                        <div className="padding-small">
                                            <div
                                                id="changexPrice"
                                                className="text-size-tiny changexprice "
                                            >
                                                <span>$CHANGE:</span>
                                                <Price>
                                                    {price}
                                                </Price>
                                            </div>
                                        </div>
                                    </PriecWrapper>
                                    <ApyWrapper className="nav_stats-wrapper">
                                        <div className="padding-small">
                                            <div
                                                id="changex_apy"
                                                className="text-size-tiny text-color-black changexapy"
                                            >
                                                <span><strong>APY:</strong></span>
                                                <Apy> <strong>{apyContext}%</strong></Apy>
                                            </div>
                                        </div>
                                    </ApyWrapper>
                                    <ul className="nav_download-wrapper w-list-unstyled hide-mobile-landscape">
                                        {iconItems.map((icon, index) => {
                                            return (
                                                <li key={icon.id} id={icon.id} className="nav_download-item">
                                                    <a
                                                        href={icon.href}
                                                        target="_blank"
                                                        className={icon.class}
                                                        rel="noreferrer">
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

                                    </ul>
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
                                    <div
                                        className="menu-button w-nav-button"
                                        aria-label="menu"
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
                            </Navbar>
                        </NavFullWrapper>
                    </div>
                </div>
                <NavMobile className={`${openNav ? "" : "hide"} fixed`}>
                    <nav
                        className="nav_menu-links-mobile"
                        data-nav-menu-open=""
                    >
                        <Navbar className="nav-menu">
                            <Nav activeKey={activeKey} className="rs-navbar-mobile navbar-mobile">
                                <>
                                    {menuItems.map((menu, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="nav_menu-links navDisplay"
                                                id={`changex_nav_${index.toString()}`}
                                            >
                                                {menu.submenu.length > 0 ?
                                                    <NavDropdown  title={menu.title} className={`${activeKey === menu.id ? 'active' : ''} nav-dropdown`}>
                                                        {menu.submenu.map((item, index)=> {
                                                            return (
                                                                <div>
                                                                    {item.link === false ?
                                                                        <Link className="nav-link-dropdown" activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={item.url} key={index.toString()}>
                                                                            {item.title}
                                                                        </Link>
                                                                        :
                                                                        <>
                                                                            <a className="nav-link"
                                                                               rel="noreferrer"
                                                                               href={item.url}
                                                                               target="_blank"
                                                                               key={index.toString()}>
                                                                                {item.title}
                                                                            </a>
                                                                        </>
                                                                    }

                                                                </div>

                                                            )
                                                        })}
                                                    </NavDropdown>
                                                    :
                                                    <Link className={`${activeKey === menu.id ? 'active' : ''} nav-link`} activeClassName="activeLink" onClick={()=> {setActiveKey(menu.id )}} to={menu.url} key={index.toString()}>
                                                        {menu.title}
                                                    </Link>
                                                }
                                            </div>
                                        );
                                    })}
                                </>
                            </Nav>
                        </Navbar>
                        <div className="infoWrapper">
                            <PriceApyWrapper>
                                <PriceApyBtns withDropdown={false} />
                            </PriceApyWrapper>
                        </div>
                        <div className="infotainment">
                            <div className="nav_right-wrapper margin-top margin-huge">
                                <div className="button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                    {mobileIcon.map((icon, index) => {
                                        return (
                                            <>
                                                <div
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
                                                </div>
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
