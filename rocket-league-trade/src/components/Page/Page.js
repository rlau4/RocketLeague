import React from "react";
import "./Page.css";
import Header from "../Header";
import TradeCard from "../TradeCard";
import PostTradeForm from "../PostTradeForm";


const Page = props => (
    <div>
        <Header/>
        <TradeCard/>
        <PostTradeForm/>
    </div>
);

export default Page;