import React from "react";


// functional React component
const SingleTrade = props => (
    <tr>
        <td>{props.trade.haveItem}</td>
        <td>{props.trade.haveColor}</td>
        <td>{props.trade.haveCert}</td>
        <td>{props.trade.wantItem}</td>
        <td>{props.trade.wantColor}</td>
        <td>{props.trade.wantCert}</td>
    </tr>
)

export default SingleTrade;