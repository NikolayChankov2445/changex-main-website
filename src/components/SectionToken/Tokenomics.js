import * as React from 'react';
import { Pie } from '@ant-design/plots';

import Banner from "../Common/Banner";
import {bannerLogos, bannerTitleTokenomics} from "./tokenItems";
import TokenomicsTable from "./TokenomicsTable";

export default function Tokenomics({ background, tokenData}) {
    const data = tokenData.chart;

    const config = {
        appendPadding: 10,
        data,
        theme: 'dark',
        class: 'pieChartToken',
        fontFamily: 'Lexend',
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        innerRadius: 0.8,
        meta: {
            value: {
                formatter: (v) => `${v}M`,
            },
        },
        label: {
            type: 'inner',
            offset: '0%',
            autoRotate: false,
            style: {
                textAlign: 'center',
                fill: '#fff',
            },
            formatter: ' ',
        },
        statistic: {
            title: {
                offsetY: -4
            },
            customHtml: (container, view, datum) => {
                return `<div>Total Supply</div>`
            },
            content: {
                title: 'Total Supply',
                style: {
                    color: '#fff'
                },
                offsetY: -4,
            },
        },
        pieStyle: {
            lineWidth: 0,
        },
        legend: false,
        color: ['#3418D8','#E0FB92','#11D48E','#8366F4','#303D48','#F3FBFD','#F4DF22','#E69F34']
    };
    return (
        <section id="tokenomics" className={background}>
            <div className="padding-global">
                <div className="container-large">
                    <h4 className={`${background === "background-color-black" ? "is-lime" : "blue" } heading-style-h6 margin-vertical margin-large`}>
                        {tokenData.head2}
                    </h4>
                    <h3 className={`${background === "background-color-black" ? "white" : "blue"} heading-style-h3 margin-vertical margin-large`}>
                        {tokenData.head}
                    </h3>
                    <div className="grid-2-chart">
                        <div className="pieChartWrapper">
                            <Pie {...config}  className="pieChart"/>
                            <div className="social-tokenomics">
                                <div className="font-paragraph text-size-regular social-tokenomics text-cut-off">
                                    Learn More:
                                </div>
                                {tokenData.learnMore.map((item, index) => {
                                    return (
                                        <a key={index} href={item.link} target="_blank" rel="noreferrer">
                                            <img  alt={item.title} style={{padding: "0 10px"}} id={item.title} src={item.img}/>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <TokenomicsTable />
                        </div>
                    </div>
                    <div className="margin-top-medium">
                        <Banner  title={bannerTitleTokenomics} backgroundClass={'tokenomicsImgBanner'} logos={bannerLogos} />
                    </div>
                </div>
            </div>
        </section>
    )
}
