import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { NumericFormat } from "react-number-format";
import Table from "@mui/material/Table";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import {PricesContext} from "../Context/PriceContext";
import {FaAngleRight} from "react-icons/fa";
import {TextField} from "@mui/material";
import {BiSearchAlt2} from "react-icons/bi";

export default function SupportedTokensTable() {
    const coinsContextPrices = useContext(PricesContext);
    const [coins , setCoins] = useState([]);
    const tableHeads = ['NAME', 'CURRENT PRICE', '24H CHANGE', 'MARKER CAP', 'CIRCULATING SUPPLY'];
    useEffect(()=> {
        setCoins(coinsContextPrices);
    },[coinsContextPrices])

    function onChangeHandler (event) {
        if (event.target.value === '') {
            setCoins(coinsContextPrices);
            return;
        }

        const newCoinsArray = coins.filter((coin)=> { return coin.name.toLowerCase().startsWith(event.target.value)});
        setCoins(newCoinsArray);
    }

    return (
        <>
            <TextField label={<span className="font-paragraph card-text"><BiSearchAlt2/>&nbsp; Search</span>} fullWidth onChange={(e) => { onChangeHandler(e)}}  id="changex_search_tokens"  />
                <TableContainer id="changex_supported_tokens" className="background-color-white margin-auto-large" component={Paper}>
                    <Table stickyHeader  sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                {tableHeads.map((item, index)=> {
                                    return (
                                        <TableCell key={index} className="text-weight-xsmall font-paragraph tableHead" align="center">{item}</TableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {coins.map((item,index) => (
                                <TableRow
                                    key={`changex_table_${index}`}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell  className="tableCellIcon" component="th" sx={{width: 200}} scope="row">
                                        <IconButton>
                                            <img
                                                src={`/assets/images/token/${item.symbol}.svg`}
                                                loading="lazy"
                                                alt={item.symbol}
                                                className="crawlImg">
                                            </img>
                                        </IconButton>
                                        {item.name}
                                    </TableCell>
                                    <TableCell  align="center" className="tableCell" component="th" scope="row">
                                        <div className="grid-1">
                                            <NumericFormat
                                                value={item.current_price}
                                                displayType={"text"}
                                                prefix={"$"}/>

                                            {item.symbol === 'hydra' &&
                                                <a
                                                    rel="noreferrer"
                                                    href="https://hydra-staking.changex.io/"
                                                    className="button transparent font-header"
                                                    target="_blank">
                                                    Stake HYDRA Now <FaAngleRight/>
                                                </a>
                                            }
                                        </div>
                                    </TableCell>
                                    <TableCell align="center" className="tableCell" component="th" scope="row">
                                        <NumericFormat
                                            className={`${item.price_change_percentage_24h < 0 ? 'is-red' : 'is-green'}`}
                                            allowNegative={true}
                                            value={item.price_change_percentage_24h}
                                            displayType={"text"}
                                            suffix={"%"}/>

                                    </TableCell>
                                    <TableCell align="center" className="tableCell" component="th" scope="row">
                                        <NumericFormat
                                            value={item.market_cap}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}/>

                                    </TableCell>
                                    <TableCell align="center" className="tableCell" component="th" scope="row">
                                        <NumericFormat
                                            value={item.circulating_supply}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </>
    )
}
