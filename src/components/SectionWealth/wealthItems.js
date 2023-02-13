import Staking_1 from "../../../static/assets/images/wealth/Staking_1.svg";
import Doubleapy from "../../../static/assets/images/wealth/Doubleapy.svg";
import Stablecoins from "../../../static/assets/images/wealth/Lend-Stablecoins.svg";


export const menuTabs = [
    {
        id: "stake",
        title: "Stake",
        text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking.",
        img: Staking_1,
        alt: "Investment Slider image for stake",
    },
    {
        id: "apy",
        title: "Double your APY",
        text: "Use Changex's unique Leveraged staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before.",
        img: Doubleapy,
        alt: "Investment Slider image for double your APY",
    },
    {
        id: "stablecoins",
        title: "Lend stablecoins",
        text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged staking economy. Everything is completely decentralized.",
        img: Stablecoins,
        alt: "Investment Slider image for lend stablecoins",
    }
]

export const stake = {
    id: "Tab 1",
    alt: "Investment Slider image for stake",
    text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking."
}

export const doubleApy = {
    id: "Tab 2",
    alt: "Investment Slider image for double your APY",
    text: "Use Changex's unique Leveraged staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before."
}

export const stablecoins = {
    id: "Tab 3",
    alt: "Investment Slider image for lend stablecoins",
    text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged staking economy. Everything is completely decentralized."
}

export const sliderDataLandingPage = [
    {
        id: "Tab1",
        image: "/assets/images/wealth/LeveragedStakingBlack.svg",
        head: "",
        alt: "Investment Slider image for stake",
        text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking.",
        linkText: "Stake Now",
        route: true,
        url: "https://hydra-staking.changex.io/"
    },
    {
        id: "Tab2",
        image: "/assets/images/wealth/Benefits_Black.svg",
        head: "",
        alt: "Investment Slider image for double your APY",
        text: "Use Changex's unique Leveraged staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before.",
        linkText: "Coming Soon",
        route: true,
        url: "hero"
    },
    {
        id: "Tab3",
        image: "/assets/images/wealth/Stablecoins.svg",
        head: "",
        alt: "Investment Slider image for lend stablecoins",
        text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged staking economy. Everything is completely decentralized.",
        linkText: "Coming Soon",
        route: true,
        url: "hero"
    }
]

export const sliderDataWealthPage = [
    {
        id: "card1",
        image: "/assets/images/wealth/StakingWealth.svg",
        head: "Flexible Stakind And Spending",
        alt: "Flexible Stakind And Spending",
        text: "Stake assets and maintain immediate access to them without interrupting the flow of rewards. This is a unique way to use your crypto in various ways while earning on it constantly.",
        linkText: "",
        route: true,
        url: ""
    },
    {
        id: "card2",
        image: "/assets/images/wealth/Hydra.svg",
        head: "Delegated HYDRA Staking",
        alt: "Delegated HYDRA Staking",
        text: "Stake HYDRA offline and enjoy the full benefits of the HydraChain economy by delegating your coins to a staker. Rewards equal to 5 HYDRA or more are paid out daily.",
        linkText: "Stake HYDRA",
        route: false,
        url: "https://hydra-staking.changex.io/"
    },
    {
        id: "card3",
        image: "/assets/images/wealth/WealthChange.svg",
        head: "Earn Bonus CHANGE",
        alt: "Earn Bonus CHANGE",
        text: "Whenever you stake an asset in Changex, the APR for your staked CHANGE goes up, and the bonuses stack. Without CHANGE, this mechanism is not possible.",
        linkText: "",
        route: true,
        url: ""
    }
]

export const responsiveSliderData =  {
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
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1025,
                min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
        }
    }
}


/*WEALTH PAGE items */

export const heroObj = {
    titleObj: {
        h1: "Put Your Money to Work And",
        h2: "Grow Your Wealth",
        h3: "Access a suite of DeFi investment and passive income products and take control of your financial future.",
    },
    text: "",
    appBtnsVisible: false,
    scrollBtnText: "Discover Wealth",
    scrollToID: "changex_slider",
    backgroundImage: "",
    class: "wealthPage"
};

export const textData = {
    background: "background-color-black",
    head: "",
    h1: "Discover",
    h2: "Staking",
    h3: "Don't just hold your crypto - stake it and earn on your investments passively, while retaining access to your coins",
    h4: "",
    buttonTxt: "Stake CHANGE",
    buttonUrl: "https://urlgeni.us/changexapp",
};

export const featureContent = {
    head: "More Features Coming Soon",
    feature: [
        {
            h1: "Pioneering Leveraged",
            h2: "Staking",
            h3: "A unique way to boost the staking rewards of any PoS token in the app by a factor of 1.2-2x. All while maintaining low liquidation risk. Leveraged staking works with any interest-bearing economy.",
            h4: "",
            buttonTxt: "Learn More",
            buttonUrl: "https://urlgeni.us/changexapp",
            buttonClass: "button-lime",
            imageUrl: "/assets/images/wealth/leverage_staking.svg",
            imageClass: "centerImage",
            alignImage: "right",
            commingSoon: false,
            offerText: "",
            bottomText: "",
        },
        {
            h1: "Discover",
            h2: "Lending",
            h3: "Earn on stablecoins like USDT and USDC while powering up the Leveraged Staking economy. ",
            h4: "Users who use leveraged staking borrow your stablecoins to acquire more of their asset, and pay you back the interest. Everything is completely decentralized, and your coins play a vital role in the ecosystem.",
            buttonTxt: "Read Whitepaper",
            buttonUrl:
                "https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530",
            buttonClass: "button-lime",
            imageUrl: "/assets/images/wealth/lending.svg",
            imageClass: "centerImage",
            alignImage: "left",
            commingSoon: false,
            offerText: "",
            bottomText: "",
        },
    ],
};

export const featureContent2 = {
    feature: [
        {
            h1: "Stack For A Rainy Day With",
            h2: "Savings",
            h3: "Deposit idle stablecoin assets for a fixed interest rate and remain decentralized: Changex relies on smart contracts and can never access your assets.",
            h4: "",
            buttonTxt: "Read Whitepaper",
            buttonUrl:
                "https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530",
            buttonClass: "button-blue",
            imageUrl: "/assets/images/savings/Savings_Rainy_Day.png",
            imageClass: "centerImage",
            alignImage: "right",
            commingSoon: true,
            offerText: "Coming Soon",
            bottomText: "",
        },
    ],
    info: "The savings mechanism automatically distributes the deposited funds into DeFi products that offer appealing liquidity mining and inflationary mechanisms for stimulating growth."
};

export const textDataWealthSection = {
    background: "background-color-black",
    head: "Invest.",
    h1: "Money That",
    h2: "Never Sleeps",
    h3: "Earn passive income in the easiest possible way with DeFi’s most powerful investment tools.",
    buttonTxt: "",
};
