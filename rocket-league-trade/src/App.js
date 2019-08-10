import React from "react";
import Header from "./components/Header";
import PostTradeForm from "./components/PostTradeForm";
import TradeList from "./components/TradeList";

const App = props => (
    <div>
        <Header />
        <PostTradeForm/>
        <TradeList/>
    </div>
);

export default App;

