import * as React from "react";
import { useContext, useEffect, useState} from "react";
import { NumericFormat } from "react-number-format";
import { PricesContext } from "../Context/PriceContext";
import { Table } from "react-bootstrap";

export default function SupportedTokensTable() {
    const coinsContextPrices = useContext(PricesContext);
    const [coins , setCoins] = useState([]);
    const tableHeads = ['NAME', 'CURRENT PRICE', '24H CHANGE', 'MARKER CAP', 'CIRCULATING SUPPLY'];
    useEffect(()=> {
        setCoins(coinsContextPrices);
    },[coinsContextPrices])

    return (
        <>
            <section
                id="supported-tokens"
            >
                <Table responsive sx={{ minWidth: 650 }} aria-label="simple table">
                    <thead>
                    <tr>
                        {tableHeads.map((title,index) => {
                            return (
                                <td
                                    key={index}
                                    className="text-weight-xsmall font-paragraph"
                                    align="center"
                                >
                                    {title}
                                </td>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {coins && coins.map((item, index) => (
                        <tr
                            key={index}
                        >
                            <td
                                className="tableCellIcon"
                                scope="row"
                            >
                                <button className="transparent">
                                    <img
                                        src={`/assets/images/token/${item.symbol}.svg` || ''}
                                        loading="lazy"
                                        alt={item.symbol}
                                        className="crawlImg"
                                    ></img>
                                </button>
                                {item.name}
                            </td>
                            <td
                                align="center"
                                className="tableCell"
                                scope="row"
                            >
                                <NumericFormat
                                    value={item.current_price}
                                    displayType={"text"}
                                    prefix={"$"}
                                />
                            </td>
                            <td
                                align="center"
                                className="tableCell"
                                scope="row"
                            >
                                <NumericFormat
                                    className={`${
                                        item.price_change_percentage_24h < 0 ? "is-red" : "is-green"
                                    }`}
                                    allowNegative={true}
                                    value={item.price_change_percentage_24h}
                                    displayType={"text"}
                                    suffix={"%"}
                                />
                            </td>
                            <td
                                align="center"
                                className="tableCell"
                                scope="row"
                            >
                                <NumericFormat
                                    value={item.market_cap}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </td>
                            <td
                                align="center"
                                className="tableCell"
                                scope="row"
                            >
                                <NumericFormat
                                    value={item.circulating_supply}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </section>
        </>
    );
}
