import React from "react";
import "./Page.css";
import Header from "../Header";
import TradeCard from "../TradeCard";
import BasicForm from "../PostTradeForm";


const Page = props => (
    <div>
        <Header/>
        <TradeCard/>
        <BasicForm/>
    </div>
);

export default Page;