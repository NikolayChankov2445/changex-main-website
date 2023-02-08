import hydrachain from "../../../static/assets/images/partners/hydra-logo.webp";
import locktrip from "../../../static/assets/images/partners/locktrip_logo.svg";
import bitcoingold from "../../../static/assets/images/partners/logo-btg-1.png";
import unifarm from "../../../static/assets/images/partners/unifrarm-logo.png";
import stakingrewards from "../../../static/assets/images/partners/stakingrewards.svg";

export const logosParners = [
    {
        href: 'https://hydrachain.org/',
        src: hydrachain,
        name: 'cointelegraph logo'
    },
    {
        href: 'https://locktrip.com/',
        src: locktrip,
        name: 'bloomberg logo'
    },
    {
        href: 'https://bitcoingold.org/',
        src: bitcoingold,
        name: 'cryptoslate logo'
    },
    {
        href: 'https://unifarm.co/',
        src: unifarm,
        name: 'cryptopotato logo'
    },
    {
        href: 'https://www.stakingrewards.com/',
        src: stakingrewards,
        name: 'cryptopotato logo'
    }
]

export const heroPartnerObj = {
    titleObj: {
        h1: "Become a Partner",
        h2: "Set Your Token Up For Success With Changex!",
        h3: "Streamline how users stake your token with Changex's intuitive, non-custodial DeFi wallet, and expand your user base with our DeFi-savvy community.",
        h4: ""
    },
    text: "",
    appBtnsVisible: false,
    scrollBtnText: "",
    backgroundImage: '',
    quoteObject: {
        author: '',
        quote: '',
        role: '',
        img: ''
    },
    class: 'partnerPage',

    perks: {
        perksTitle: "Benefits Of Integrating",
        perksBtns: [
            {
                text: "For Your Business"
            },
            {
                text: "For Your Customers"
            }
        ],
        perks0: [
            {
                src: '/assets/images/partners/icn-staking-noncustodial.svg',
                title: 'CeDeFI Model',
                text: 'We’re employing a CeDeFi model, which takes the best sides of traditional finance and the incredible opportunities of blockchain technology.'
            },
            {
                src: '/assets/images/partners/icn-marketingsupport.svg',
                title: 'Simple, yet Powerful',
                text: 'Tool to manage, invest, and grow your wealth on your own terms, so that you can focus on what matters most - your financial wellbeing and your vision for the future.'
            },
            {
                src: '/assets/images/partners/icn-listingtop.svg',
                title: 'Simple, yet Powerful',
                text: 'Tool to manage, invest, and grow your wealth on your own terms, so that you can focus on what matters most - your financial wellbeing and your vision for the future.'
            }
        ],
        perks1: [
            {
                src: '/assets/images/partners/icn-zerocommision.svg',
                title: 'Staking in a Non-custodial DeFi Wallet',
                text: 'Staking has never been so easy: enable your users to stake their tokens from their mobile devices in a few clicks.'
            },
            {
                src: '/assets/images/partners/icn-debitcard.svg',
                title: 'Marketing Support',
                text: 'We will promote your token to a DeFi-savvy community through our social media channels.'
            },
            {
                src: '/assets/images/partners/icn-leveragedstaking.svg',
                title: 'Top 20 Listing',
                text: 'Get maximum attention for your token by placing it among the top 20 in our rankings on the “Buy” & “Stake” screens.'
            }
        ],
    }
}

export const featureContent = {
    feature: [
        {
            h1: "Integrate your token for less.",
            h2: "",
            h3: "No integration fees. Changex requires a small investment of 2000 USD worth of CHANGE tokens. The CHANGE will then be automatically staked and vested for a period of 45 days. Once the vesting period is over partners can redeem their tokens with a hefty reward for their staking.",
            h4: "",
            buttonTxt: "Read Whitepaper",
            buttonUrl: "https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530",
            buttonClass: "button-blue",
            imageUrl: "/assets/images/partners/integrate-illustration.svg",
            imageClass: "centerImage",
            alignImage: 'right',
            commingSoon: true,
            offerText: 'Unique offer until 31.03.2023',
            bottomText: 'Please note that the special promo will last until 31 March 2023 so make sure to get in touch and claim your spot in Changex.'
        }
    ],
    info: "Please note that the special promo will last until 31 March 2023 so make sure to get in touch and claim your spot in Changex."
}

export const becomeAPartner = {
    feature: [
        {
            h1: "Become our ",
            h2: "Partner",
            h3: "Fill out the form and apply to become our Partner - we'll get in touch with you to take it from there.",
            h4: "",
            buttonTxt: "",
            buttonUrl: "",
            buttonClass: "",
            imageUrl: "/assets/images/partners/superhero-backgroundfull_1920-1311.png",
            imageClass: "",
            alignImage: 'right',
            commingSoon: false,
            offerText: '',
            bottomText: ''
        }
    ]
}

export const becomeAPartnerForm = {
    field1: "Token/Organization name",
    field2: "Community Link",
    field3: "Website Link",
    field4: "Additional information",
    checkbox: "I agree to receive emails",
    buttonTxt: "Apply To Be A Partner",
    buttonClass: "background-color-off-white"
}
