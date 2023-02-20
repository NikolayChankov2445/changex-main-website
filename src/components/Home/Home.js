import React from "react";

import Hero from "../Heroes/Hero";
import SectionWallet from "../SectionWallet/SectionWallet";
import SectionBank from "../SectionBank/SectionBank";
import CryptoBank from "../CryptoBank/CryptoBank";
import SectionPartners from "../SectionPartners/SectionPartners";
import SectionCard from "../SectionCard/SectionCard";
import SectionCta from "../SectionCta/SectionCta";
import SectionPress from "../SectionPress/SectionPress";
import SectionWealth from "../SectionWealth/SectionWealth";

const heroObj = {
    titleObj: {
        h1: "Money matters → Made Simple",
        h2: "Decentralized Personal Finance",
        h3: "For All",
        h4: "Manage, invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi investment tools. Spend anywhere with the Changex",
        titleWithLink: "Crypto Debit Card.",
    },
    text: "",
    appBtnsVisible: true,
    scrollBtnText: "",
    backgroundImage: "/assets/images/Hero-BGimg-mobile.png",
};

const cardContent = {
    head1: "Meet The",
    head2: "ChangeX",
    head3: "Debit Card",
    paragraph: "",
    page: "Home",
};

export default function Home() {
    return (
       <>
           <Hero heroObj={ heroObj } />
           <SectionWallet />
           <SectionBank />
           <CryptoBank />
           <SectionPartners />
           <SectionCard cardContent={ cardContent }  />
           <SectionWealth />
           <SectionCta />
           <SectionPress />
       </>
    );
}
