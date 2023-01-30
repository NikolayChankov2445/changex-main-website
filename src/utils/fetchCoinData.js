import axios from "axios";
import {
    GATSBY_PRICE_FETCHER_URL,
    GATSBY_FETCH_APY_URL,
    GATSBY_SENDGRID_URL,
    GATSBY_SENDGRID_TOKEN
} from "../constants/config";

export const fetchApy = async () => {
    let response;

    try {
        await axios.get(GATSBY_FETCH_APY_URL)
            .then((res)=> {
                if(res.status === 200) {
                    response = res.data.inPercent;
                }
            })
    } catch (err) {
        console.error(err)
    }

    return response;
}

export const fetchCoins = async () => {
    let response;
    await axios.get(`${GATSBY_PRICE_FETCHER_URL}coins/all`)
        .then((res)=> {
            if(res.status === 200) {
                response = res.data;
            }
        })
        .catch(err => {
            console.error(err)
        });

    return response;
}

export const sendSendGridWidgetData = ( formData ) => {

    try {
        return axios.post(GATSBY_SENDGRID_URL, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                email: formData,
                first_name: "",
                last_name: "",
                token: GATSBY_SENDGRID_TOKEN,
            })
        })

    } catch (err) {
        console.error(err)
    }

}

export async function fetchAllCoins () {
    const coins = await fetchCoins();
    const url = `${GATSBY_PRICE_FETCHER_URL}coins/markets?ids=${coins.join('%2C')}&vs_currency=usd`;
    let allCoinsPrices = [];

    try {
        await axios.get(url)
            .then((res)=> {
                if(res.status === 200) {
                    allCoinsPrices = res.data;
                }
            })
    } catch (err) {
        console.error(err);
    }

    return allCoinsPrices
}
