import hydrachain from "../../../static/assets/images/social/logo-hydra.svg";
import uniswap from "../../../static/assets/images/social/uniswapImg.svg";
import mexc from "../../../static/assets/images/social/logo-mexc.svg";


export const titleObj = {
    titleObj: {
        h1: "",
        h2: "Tokens on Changex",
        h3: "",
    },
    text: "",
    appBtnsVisible: false,
    buttonUrl: "",
    scrollBtnText: "",
    backgroundImage: "",
    class: "supportedTokensPage",
};

export const heroObj = {
    titleObj: {
        h1: "Introducing",
        h2: "The CHANGE token",
        h3: "A multi-chain, multi-purpose token that offers added benefit of increased APR for every other staked asset in the app."
    },
    text: "",
    appBtnsVisible: false,
    scrollToID: "",
    scrollBtnText: "Buy CHANGE",
    backgroundImage: "",
    class: "tokenPage"
}

export const textData = {
    background: "background-color-blue",
    head: "",
    h1: "Discover Better Fiat With Changex Banking",
    h2: "",
    h3: "Opening a Bank account with Changex happens in seconds and gives you access to a suite of financial services and perks for an easier life.",
    buttonTxt: "Read Whitepaper"

}


export const advantages = [
    {
        src: '/assets/images/card/Mini/2.0/stack.svg',
        text: 'CHANGE has a fixed supply of 425 million tokens that favors growth: every transaction in Changex serves to reduce total supply and protect the price.',
        title: 'Burn'
    },
    {
        src: '/assets/images/card/Mini/2.0/cashback.svg',
        text: 'Earn on your tokens with staking and power-up your CHANGE: every staked asset in Changex increases your CHANGE rewards. Bonuses stack.',
        title: 'Earn More'
    },
    {
        src: '/assets/images/card/Mini/2.0/Boost_APY.svg',
        text: 'Stake or simply trade: CHANGE lets you jump between blockchains with ease - Hydra and Ethereum are yours to explore, with BSC and more to come.\n',
        title: 'Explore'
    },
    {
        src: '/assets/images/card/Mini/2.0/yourMoney.svg',
        text: 'Unlock exclusive app features by holding and/or staking CHANGE in Changex: higher cashback, higher stablecoin APR, and more.\n',
        title: 'Get Benefits'
    }
]

export const tokenPageTokenomicsData = {
    head: 'CHANGE Tokenomics',
    head2: 'Explore the numbers',
    paragraph: '',
    chart: [
        {
            type: 'Public Sale',
            value: 150,
            color: '#3418D8'
        },
        {
            type: 'Treasury',
            value: 97.5,
            color: '#E0FB92' /*'#E0FB92'*/
        },
        {
            type: 'Tier 1 Institutional Investors',
            value: 50,
            color: '#11D48E'
        },
        {
            type: 'Launchpad Supply',
            value: 50,
            color: '#8366F4'
        },
        {
            type: 'Liquidity',
            value: 30,
            color: '#303D48'
        },
        {
            type: 'Founders & Team',
            value: 22.5,
            color: '#F3FBFD'
        },
        {
            type: 'Staking Pool for first 9 months',
            value: 20,
            color: '#F4DF22'
        },
        {
            type: 'Airdrop',
            value: 5,
            color: '#E69F34'
        }],
    learnMore: [
        {
            img: '/assets/images/social/logo-coinmarketcap-white.svg',
            title: 'CoinMarketCap',
            link: 'https://coinmarketcap.com/currencies/changex/'
        },
        {
            img: '/assets/images/social/coingecko.svg',
            title: 'CoinGecko',
            link: 'https://www.coingecko.com/en/coins/changex?'
        }
    ]
};

export const bannerLogos = [

    {
        href: 'https://app.uniswap.org/',
        src: uniswap,
        name: 'uniswap'
    },
    {
        href: 'https://www.mexc.com/',
        src: mexc,
        name: 'mexc'
    },
    {
        href: 'https://hydrachain.org/',
        src: hydrachain,
        name: 'hydrachain'
    }

]

export const bannerTitleTokenomics = {
    head: 'Buy',
    head2: 'CHANGE',
    head3: 'discover decentralized finance'
}


export const tokenPageDeFiData = {
    head: 'Deflationary Token - Inflationary Rewards',
    head2: 'The Best Of DeFI',
    paragraph: 'Harness the power of PoS assets while reaping the benefits of a finite supply.',
    perks: [
        {
            title: 'Stake CHANGE',
            content: 'Earn passive income and unlock additional features',
            image: '/assets/images/token/icn-stakechange.svg'
        },
        {
            title: 'Burn It',
            content: 'All crypto-crypto and fiat-crypto transactions reduce supply',
            image: '/assets/images/token/icn-burnit.svg'
        },
        {
            title: 'Stake PoS Assets',
            content: 'Changex supports multi-chain staking',
            image: '/assets/images/token/icn-stakeposassets.svg'
        },
        {
            title: 'Boost CHANGE APR',
            content: 'Every staked asset increases staking rewards.',
            image: '/assets/images/token/icn-boostchangeapr.svg'
        },
        {
            title: 'Deflationary CHANGE',
            content: 'Rewards increase while supply decreases',
            image: '/assets/images/token/icn-deflationary.svg'
        },
        {
            title: 'Grow Your Wealth',
            content: 'While you sleep.',
            image: '/assets/images/token/icn-growwealth.svg'
        },
    ],
    centerIcon: '/assets/images/token/defi_circle.svg',
    learnMore: [
        {
            img: '/assets/images/social/logo-coinmarketcap-white.svg',
            title: 'CoinMarketCap',
            link: 'https://coinmarketcap.com/currencies/changex/'
        },
        {
            img: '/assets/images/social/coingecko.svg',
            title: 'CoinGecko',
            link: 'https://www.coingecko.com/en/coins/changex?'
        }
    ]
};
