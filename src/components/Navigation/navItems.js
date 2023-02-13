import AppleBlackIcon from "../../../static/assets/images/common/icn-apple-black.svg";
import PlaystoreBlackIcon from "../../../static/assets/images/common/icn-playstore-black.svg";
import AppleIcon from "../../../static/assets/images/common/DW-Apple.svg";
import GoogleIcon from "../../../static/assets/images/common/DW-Google.svg";

export const menuItems = [
    {
        title: 'Wallet',
        url: '/wallet',
        id: 'wallet',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        footer: true,
        submenu: []
    },
    {
        title: 'Bank',
        url: '/bank',
        id: 'bank',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'wealth',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'CHANGE token',
        url: '#',
        id: 'token-page',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        footer: true,
        submenu: [
            {
                title: 'Info',
                url: '/token',
                id: "changex_token",
                link: false
            },
            {
                title: 'Stake CHANGE',
                url: 'https://hydradex.org/#/stake/changex',
                id: "changex_token_stake",
                link: true
            },
            {
                title: 'Stake HYDRA',
                url: 'https://hydra-staking.changex.io/',
                id: "changex_hdyra_stake",
                link: true
            }
        ]
    },
    {
        title: 'Learn',
        url: '#',
        id: 'changex_learn',
        className: 'nav_menu-links w-nav-menu',
        hasLine: true,
        submenu: [
            {
                title: 'About',
                url: '/about',
                id: "changex_about",
                link: false
            },
            {
                title: 'Changex Blog',
                url: 'https://hydradex.org/#/stake/changex',
                id: "changex_blog",
                link: true
            },
        ]
    }
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
        id: 'changex_apple'
    },
    {
        src: GoogleIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'changex_google'
    }
]


export const menuItemsFooter = [
    {
        title: 'Wallet',
        url: '/wallet',
        id: 'changex_wallet',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        footer: true
    },
    {
        title: 'Bank',
        url: '/bank',
        id: 'changex_bank',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'changex_wealth',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true
    },
    {
        title: 'CHANGE token',
        url: '/token',
        id: 'changex_token-page',
        className: 'nav_menu-links w-nav-menu',
        hasLine: true,
        footer: true,
        submenu: []
    },
    {
        title: 'Suppported Tokens',
        url: '/supported',
        id: 'changex_supported-tokens',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        footer: true
    }

];

export const menuItemsFooter2 = [
    {
        title: 'Learn',
        url: '/about',
        id: 'changex_about',
        className: 'button footer-links w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'HYDRA Staking',
        url: 'https://hydra-staking.changex.io/',
        id: 'changex_hydra_staking',
        className: 'button footer-links w-inline-block',
        hasLine: false,
        link: false
    },
    {
        title: 'Become A Partner',
        url: '/partner',
        id: 'changex_partner',
        className: 'button footer-links w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Whitepaper',
        url: 'https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530',
        id: 'changex_whitepaper',
        className: 'button footer-links w-inline-block',
        hasLine: false,
        link: false
    },
    {
        title: 'ICO Information',
        url: "https://legacy.changex.io/",
        id: 'changex_ico',
        className: 'button footer-links w-inline-block',
        hasLine: false,
        link: false
    },
];

export const menuItemsFooterSocial = [
    {
        title: 'Telegram',
        url: 'https://t.me/changex_official',
        src: "/assets/images/social/telegram.svg",
        id: 'telegram',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/ChangeXapp',
        src: "/assets/images/social/twitter.svg",
        id: 'twitter',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Telegram',
        url: 'https://changex.medium.com/',
        src: "/assets/images/social/carbon.svg",
        id: 'carbon',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'Facebook',
        url: 'https://www.facebook.com/ChangeXapp',
        src: "/assets/images/social/facebook.svg",
        id: 'facebook',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/changexapp/',
        src: "/assets/images/social/linkedIn.svg",
        id: 'linkedin',
        className: 'button social-link w-inline-block',
        hasLine: false,
        link: true
    }
];
