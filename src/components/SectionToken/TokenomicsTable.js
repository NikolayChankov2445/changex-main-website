import * as React from "react";
import { tokenPageTokenomicsData } from "./tokenItems";
import {Table} from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";

export default function TokenomicsTable() {
    return (
        <Table responsive size="lg">
            <thead></thead>
            <tbody>
            {tokenPageTokenomicsData.chart.map((item, index) => (
                <tr key={`changex_chart_${index}`} className="tableRow">
                    <td className="tableTokenomicsCellIcon">
                        <BsFillCircleFill style={{ color: `${item.color}` }} />{" "}
                    </td>
                    <td className="tableType">
                        {item.type}
                    </td>
                    <td className="tableValue" >{item.value} {item.type === "Public Sale" ? "($2.4M)" : "M"}
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}
