export const scrollImages = [
    {
        src: '/assets/images/wallet/icn-40x40-wallet.svg',
        caption: 'A wallet just for you',
        text: 'Own your crypto - Changex has no control over your wallet and can never access your funds. All information is kept safely on the blockchain',
        url: 'https://changex.io',
        urlText: 'Download the app',
        h1: 'Wallet'
    },
    {
        src: '/assets/images/wallet/icn-40x40-wallet.svg',
        caption: 'Decentralyzed Crypto wallet',
        text: 'Access crypto from any point on Earth and stay in control with Changex’s highly-secure, non-custodial crypto wallet. No KYC required',
        url: 'https://changex.io',
        urlText: 'Learn More',
        h1: 'Wallet'
    },
    {
        src: '/assets/images/wallet/scroll_4.svg',
        caption: 'Buy and sell crypto',
        text: 'Trade cryptocurrencies with the click of a button with vetted protocols and contracts.',
        url: 'https://changex.io',
        urlText: "Download the app",
        h1: 'Wallet'
    },
];

export const slideImages = [
    {
        image: '/assets/images/wallet/cryptowallet_0_dark.webp',
        alt: 'Changex Crypto Wallet',
    },
    {
        image: '/assets/images/wallet/cryptowallet_1_dark.webp',
        alt: 'Changex Crypto Wallet Buy',
    },
    {
        image: '/assets/images/wallet/cryptowallet_2_dark.webp',
        alt: 'Changex Crypto Wallet Sell',
    }
];

export const properties = {
    duration: 5000,
    autoplay: true,
    defaultIndex: 0,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "linear",
};

export const SliderOptions = {
    useGPURender: true,
    showNavs: false,
    showBullets: true,
    loop: true,
    autoPlay: true,
    autoPlayDelay: 1000,
    startIndex: 0,
    duration: 5000,
};


export const responsiveSliderData =  {
    additionalTransfrom: 0,
    autoPlaySpeed: 1000,
    autoPlay: true,
    centerMode: false,
    arrows: false,
    className: "",
    containerClass: "container-wallet",
    dotListClass: "dotListClass",
    draggable: true,
    focusOnSelect: false,
    infinite: false,
    itemClass:"",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    partialVisible: false,
    pauseOnHover: true,
    renderArrowsWhenDisabled: false,
    renderDotsOutside: true,
    rewind: false,
    rewindWithAnimation: false,
    rtl: false,
    renderButtonGroupOutside: true,
    shouldResetAutoplay: true,
    showDots: true,
    sliderClass:"",
    slidesToSlide: 1,
    swipeable: true,
    responsive: {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 30,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 465,
            },
            items: 1,
            partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
        }
    }
}

export const heroObj = {
    titleObj: {
        h1: "Redesigning",
        h2: "The Crypto Wallet Experience",
        h3: "Get full ownership of your crypto assets and unprecedented CeFi functionality inside a non-custodial wallet. Buy, hold, and swap crypto with a tap - it’s that easy."
    },
    text: "",
    appBtnsVisible: true,
    scrollToID: "",
    scrollBtnText: "",
    backgroundImage: "/assets/images/Hero-BGimg-mobile.png",
    class: "walletPage"
}


export const advantages = [
    {
        src: '/assets/images/card/Mini/2.0/decentralized.svg',
        text: 'Explore the world of DeFi from a non-custodial crypto wallet. Access decentralized exchanges and a myriad of investment opportunities.',
        title: 'Decentralized'
    },
    {
        src: '/assets/images/card/Mini/2.0/cedefi.svg',
        text: 'Buy coins and tokens with Euro directly in the wallet via advanced fiat/crypto synergies - decentralization with the added comfort and simplicity of CeFi.',
        title: 'Hybrid CeDeFi'
    },
    {
        src: '/assets/images/card/Mini/2.0/multi_chain.svg',
        text: 'Hold tokens on multiple blockchains in your DeFi non-custodial wallet. Swap and stake tokens without unnecessary complications.',
        title: 'Multi-Chain'
    },
    {
        src: '/assets/images/card/Mini/2.0/secure.svg',
        text: 'Changex has zero access to your data and assets - everything is safely stored on your device only, and our number one priority is your safety.',
        title: 'Secure'
    }
]

export const sliderDataWalletPage = [
    {
        id: "card1",
        image: "/assets/images/wealth/StakingWealth.svg",
        head: "Fiat On-Ramp",
        alt: "Flexible Stakind And Spending",
        text: "Stake assets and maintain immediate access to them without interrupting the flow of rewards. This is a unique way to use your crypto in various ways while earning on it constantly.",
        linkText: "",
        url: ""
    },
    {
        id: "card2",
        image: "/assets/images/wealth/Hydra.svg",
        head: "Crypto Off-Ramp",
        alt: "Delegated HYDRA Staking",
        text: "Stake HYDRA offline and enjoy the full benefits of the HydraChain economy by delegating your coins to a staker. Rewards equal to 5 HYDRA or more are paid out daily.",
        linkText: "",
        url: ""
    },
    {
        id: "card3",
        image: "/assets/images/wealth/WealthChange.svg",
        head: "Earn Bonus CHANGE",
        alt: "Earn Bonus CHANGE",
        text: "Whenever you stake an asset in Changex, the APR for your staked CHANGE goes up, and the bonuses stack. Without CHANGE, this mechanism is not possible.",
        linkText: "",
        url: ""
    }
]

export const responsiveWalletPageSlider = {
    additionalTransfrom:0,
    autoPlaySpeed: 1000,
    autoPlay: true,
    centerMode: false,
    arrows: false,
    className: "",
    containerClass: "container-wealth",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass:"",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    partialVisible: true,
    pauseOnHover: true,
    renderArrowsWhenDisabled: false,
    renderDotsOutside: false,
    rewind: true,
    rewindWithAnimation: true,
    rtl: false,
    renderButtonGroupOutside: true,
    shouldResetAutoplay: false,
    showDots: true,
    sliderClass:"",
    slidesToSlide: 1,
    swipeable: true,
    responsive: {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1025
            },
            items: 2,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 465
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        }
    }
}

export const textData = {
    background: 'background-color-black',
    head: '',
    h1: "Buy Crypto",
    h2: "With Fiat",
    h3: "Get your coins without complications with in-wallet banking and a fiat on-ramp. No more transfers, extra steps, and clutter - buy crypto with Euro without ever leaving the app.",
    h4: "",
    buttonTxt: "Read Whitepaper",
    buttonUrl: "https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530"
}

export const cardContent = {
    head1: "Meet The",
    head2: "Changex",
    head3: "Debit Card",
    paragraph: "",
    page: "Wallet",
};
