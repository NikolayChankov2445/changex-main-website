import * as React from "react"
import {createContext, useEffect, useState} from "react";
import {fetchAllCoins} from "../../utils/fetchCoinData";

export const PricesContext = createContext([])

export default function PricesContextProvider({children}) {

    const [coinPrices, setCoinsPirces] = useState([]);

    async function getPrices() {
        const prices = await fetchAllCoins();
        setCoinsPirces(prices)
    }

    useEffect(()=> {
        getPrices();
        const pricesInterval = setInterval(() => {

            getPrices();
        }, 30000)

        return () => clearInterval(pricesInterval); //This is important

    },[])

    return (
        <PricesContext.Provider value={coinPrices}>{children}</PricesContext.Provider>
    )
}

