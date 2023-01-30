import * as React from "react";
import { useContext, useEffect, useState} from "react";
import { NumericFormat } from "react-number-format";
import { PricesContext } from "../Context/PriceContext";
import {PurpleButtonRoute} from "../Buttons/PurpleRoute";

export default function SupportedTokensTable() {
    const coinsContextPrices = useContext(PricesContext);
    const [coins , setCoins] = useState([]);

    useEffect(()=> {
        setCoins(coinsContextPrices);
    },[coinsContextPrices])

    return (
        <>
            <section
                id="supported-tokens"
            >
                <div className="padding-global">SupportedTokensTable</div>
            </section>
        </>
    );
}
