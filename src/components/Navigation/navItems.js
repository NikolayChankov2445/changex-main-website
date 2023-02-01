import AppleBlackIcon from "../../images/common/icn-apple-black.svg";
import PlaystoreBlackIcon from "../../images/common/icn-playstore-black.svg";
import AppleIcon from "../../images/common/DW-Apple.svg";
import GoogleIcon from "../../images/common/DW-Google.svg";

export const menuItems = [
    {
        title: 'Wallet',
        url: '/wallet',
        id: 'wallet',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        footer: true,
        submenu: [
            {
                title: 'DeFy Crypto Wallet',
                url: 'defycryptowallet',
            },
            {
                title: 'Swap Crypto',
                url: 'swapcrypto',
            },
            {
                title: 'Buy and Sell crypto',
                url: 'buysellcrypto',
            },
        ]
    },
    {
        title: 'Bank',
        url: '/bank',
        id: 'bank',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: [
            {
                title: 'Debit card',
                url: 'debitcard',
            },
            {
                title: 'SEPA Bank Account',
                url: 'sepabankaccount',
            }
        ]
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'wealth',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: [
            {
                title: 'Staking',
                url: 'staking',
            },
            {
                title: 'Lending',
                url: 'lending',
            },
            {
                title: 'Savings',
                url: 'savings'
            },
        ]
    },
    {
        title: 'CHANGE token',
        url: '/token',
        id: 'token-page',
        className: 'nav_menu-links w-nav-menu',
        hasLine: true,
        footer: true,
        submenu: []
    },
    {
        title: 'About',
        url: '/about',
        id: 'about',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        submenu: []
    },
    /* {
         title: 'FAQs',
         url: '/faqs',
         id: 'faqs',
         className: 'nav_menu-links w-nav-menu',
         dropdown: false,
         submenu: []
     }*/
    /*    {
            title: 'Company',
            url: '/company',
            id: 'company',
            className: 'nav_menu-links w-nav-menu',
            submenu: []
        },
        {
            title: 'Learn',
            url: '/learn',
            id: 'learn',
            className: 'nav_menu-links w-nav-menu',
            submenu: []
        }*/
];

export const iconItems = [
    {
        src: AppleBlackIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: PlaystoreBlackIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]

export const mobileIcon = [
    {
        src: AppleIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: GoogleIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]


export const menuItemsFooter = [
    {
        title: 'Wallet',
        url: '/wallet',
        id: 'wallet',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        footer: true
    },
    {
        title: 'Bank',
        url: '/bank',
        id: 'bank',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'wealth',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true
    },
    {
        title: 'CHANGE token',
        url: '/token',
        id: 'token-page',
        className: 'nav_menu-links w-nav-menu',
        hasLine: true,
        footer: true,
        submenu: []
    },
    {
        title: 'Suppported Tokens',
        url: '/supported',
        id: 'supported-tokens',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        footer: true
    },
    {
        title: 'Become A Partner',
        url: '/partner',
        id: 'partner',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        footer: true
    },

];

export const menuItemsFooter2 = [
    {
        title: 'About',
        url: '/about',
        id: 'about',
        className: 'button footer-links w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Whitepaper',
        url: 'https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530',
        id: 'whitepaper',
        className: 'button footer-links w-inline-block',
        hasLine: false,
        link: false
    },
    {
        title: 'ICO Information',
        url: "https://legacy.changex.io/",
        id: 'ico',
        className: '"button footer-links w-inline-block',
        hasLine: false,
        link: false
    }
];

export const menuItemsFooterSocial = [
    {
        title: 'Telegram',
        url: 'https://t.me/changex_official',
        src: "/images/social/telegram.svg",
        id: 'telegram',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/ChangeXapp',
        src: "/images/social/twitter.svg",
        id: 'twitter',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Telegram',
        url: 'https://changex.medium.com/',
        src: "/images/social/carbon.svg",
        id: 'carbon',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Facebook',
        url: 'https://www.facebook.com/ChangeXapp',
        src: "/images/social/facebook.svg",
        id: 'facebook',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/changexapp/',
        src: "/images/social/linkedIn.svg",
        id: 'linkedin',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    }
];
