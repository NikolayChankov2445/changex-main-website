import * as React from "react"
import {createContext, useEffect, useState} from "react";
import { fetchApy } from "../../utils/fetchCoinData";

export const ApyContext = createContext('00.00')

export default function ApyContextProvider({children}) {

    const [apy, setApy] = useState('00.00');

    async function getApyData() {
        const apyData = await fetchApy();
        setApy(apyData)
    }

    useEffect(()=> {
        getApyData();
        const pricesInterval = setInterval(() => {

            getApyData();
        }, 30000)

        return () => clearInterval(pricesInterval); //This is important

    },[])

    return (
        <ApyContext.Provider value={apy}>{children}</ApyContext.Provider>
    )
}

