import React from "react";
import "./TradeCard.css";

const TradeCard = props => (
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h2 class="display-4" id="currentTrades">Current Trades</h2>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text" id="trades">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
);

export default TradeCard;